// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package simplepusher.actions;

import java.util.HashMap;
import java.util.Map;
import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.pusher.rest.Pusher;

/**
 * Send a Notify event to all Listen widgets, that are subscribed to the same object and action name.
 * 
 * Please note that this java action is execute asynchronous and will not wait till the pusher services has stared and communicated. Execeptions will not be thrown from the action but will registed in the console log.
 */
public class JAVA_Notify extends CustomJavaAction<java.lang.Boolean>
{
	private java.lang.String Channel;
	private java.lang.String Event;
	private java.lang.String Message;
	private java.lang.String AppID;
	private java.lang.String Cluster;
	private java.lang.String Key;
	private java.lang.String Secret;

	public JAVA_Notify(IContext context, java.lang.String Channel, java.lang.String Event, java.lang.String Message, java.lang.String AppID, java.lang.String Cluster, java.lang.String Key, java.lang.String Secret)
	{
		super(context);
		this.Channel = Channel;
		this.Event = Event;
		this.Message = Message;
		this.AppID = AppID;
		this.Cluster = Cluster;
		this.Key = Key;
		this.Secret = Secret;
	}

	@java.lang.Override
	public java.lang.Boolean executeAction() throws Exception
	{
		// BEGIN USER CODE
		if (this.AppID == null || this.AppID.isEmpty()) {
			throw new Exception("AppID parameter should not be empty");
		}
		if (this.Key == null || this.Key.isEmpty()) {
			throw new Exception("Key parameter should not be empty");
		}
		if (this.Secret == null || this.Secret.isEmpty()) {
			throw new Exception("Secret parameter should not be empty");
		}
		if (this.Cluster == null || this.Cluster.isEmpty()) {
			throw new Exception("Cluster parameter should not be empty");
		}
		if (!this.Cluster.matches("eu|mt1|us2|ap1|ap2")){
			throw new Exception("Cluster parameter should a value from the list: eu, mt1, us2, ap1, ap2");
		}
		if (this.Channel == null || this.Channel.isEmpty()) {
			throw new Exception("Channel parameter should not be empty");
		}
		if (this.Event == null || this.Event.isEmpty()) {
			throw new Exception("Event parameter should not be empty");
		}
		
		Pusher pusher = new Pusher(this.AppID, this.Key, this.Secret);
		pusher.setCluster(this.Cluster);
		pusher.setEncrypted(true);
		
		Map<String, String> payload = new HashMap<String, String>();
		if (this.context().getCurrentUserObject() != null) {
			payload.put("sender", this.context().getCurrentUserObject().getValue(getContext(), "Name"));
		} else {
			payload.put("sender", "Application");
		}
		payload.put("message", this.Message);
		
		String channel = "private-" + this.Channel;
		pusher.trigger(channel, this.Event, payload);
		
		Core.getLogger("Pusher").debug("Send message to channel : " + channel + ", event: " + this.Event);

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
		return "JAVA_Notify";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}