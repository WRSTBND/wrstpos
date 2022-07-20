// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package amazonsqsconnector.actions;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import com.amazonaws.services.sqs.AmazonSQS;
import com.amazonaws.services.sqs.model.DeleteMessageBatchRequest;
import com.amazonaws.services.sqs.model.DeleteMessageBatchRequestEntry;
import com.amazonaws.services.sqs.model.DeleteMessageBatchResult;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import amazonsqsconnector.factories.AmazonSQSFactory;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class DeleteMessageBatch extends CustomJavaAction<java.util.List<IMendixObject>>
{
	private IMendixObject __queue;
	private amazonsqsconnector.proxies.Queue queue;
	private java.util.List<IMendixObject> __messageList;
	private java.util.List<amazonsqsconnector.proxies.Message> messageList;

	public DeleteMessageBatch(IContext context, IMendixObject queue, java.util.List<IMendixObject> messageList)
	{
		super(context);
		this.__queue = queue;
		this.__messageList = messageList;
	}

	@java.lang.Override
	public java.util.List<IMendixObject> executeAction() throws Exception
	{
		this.queue = this.__queue == null ? null : amazonsqsconnector.proxies.Queue.initialize(getContext(), __queue);

		this.messageList = java.util.Optional.ofNullable(this.__messageList)
			.orElse(java.util.Collections.emptyList())
			.stream()
			.map(__messageListElement -> amazonsqsconnector.proxies.Message.initialize(getContext(), __messageListElement))
			.collect(java.util.stream.Collectors.toList());

		// BEGIN USER CODE
		AmazonSQS sqs = AmazonSQSFactory.getSQS();
		DeleteMessageBatchRequest deleteMessageBatchRequest = new DeleteMessageBatchRequest().withQueueUrl(queue.getQueueUrl());
		List<DeleteMessageBatchRequestEntry> entries = deleteMessageBatchRequest.getEntries();
		
		// Collect messages to delete
		messageList.stream().forEach(m -> entries.add(
				new DeleteMessageBatchRequestEntry().withId(m.getMessageId()).withReceiptHandle(m.getReceiptHandle())
				));
		
		// Delete messages
		DeleteMessageBatchResult deleteMessageBatchResult = sqs.deleteMessageBatch(deleteMessageBatchRequest);
		
		// Collect failed deletes
		List<String> failures = deleteMessageBatchResult.getFailed().stream().map(fm -> fm.getId()).collect(Collectors.toList());
		
		// Add failed deletes to return list
		List<IMendixObject> errorList = new ArrayList<>();
		messageList.stream().filter(m -> failures.contains(m.getMessageId())).forEach(fm -> errorList.add(fm.getMendixObject()));;
		
		return errorList;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "DeleteMessageBatch";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}