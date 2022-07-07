// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package amazonsqsconnector.actions;

import java.util.HashMap;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class ProcessMessageAsync extends CustomJavaAction<java.lang.Boolean>
{
	private java.lang.String microflow;
	private IMendixObject __message;
	private amazonsqsconnector.proxies.Message message;
	private IMendixObject __queue;
	private amazonsqsconnector.proxies.Queue queue;

	public ProcessMessageAsync(IContext context, java.lang.String microflow, IMendixObject message, IMendixObject queue)
	{
		super(context);
		this.microflow = microflow;
		this.__message = message;
		this.__queue = queue;
	}

	@java.lang.Override
	public java.lang.Boolean executeAction() throws Exception
	{
		this.message = this.__message == null ? null : amazonsqsconnector.proxies.Message.initialize(getContext(), __message);

		this.queue = this.__queue == null ? null : amazonsqsconnector.proxies.Queue.initialize(getContext(), __queue);

		// BEGIN USER CODE
		Map<String, Object> inputMap = new HashMap<>();
		inputMap.put("Message", message.getMendixObject());
		inputMap.put("Queue", queue.getMendixObject());
		Core.executeAsync(getContext(), microflow, true, inputMap);
		return true;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "ProcessMessageAsync";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
