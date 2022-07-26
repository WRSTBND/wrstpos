// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package parallelism.actions;

import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import parallelism.implementation.BackgroundMicroflowThread;
import parallelism.implementation.Constants;
import parallelism.implementation.Parallelism;

public class ExecuteInBackground extends CustomJavaAction<java.lang.Boolean>
{
	private java.lang.Long amountOfThreads;
	private java.lang.String microflow;
	private java.lang.Boolean repeat;
	private java.lang.Long sleep;
	private java.lang.Boolean sleepWhenFalse;

	public ExecuteInBackground(IContext context, java.lang.Long amountOfThreads, java.lang.String microflow, java.lang.Boolean repeat, java.lang.Long sleep, java.lang.Boolean sleepWhenFalse)
	{
		super(context);
		this.amountOfThreads = amountOfThreads;
		this.microflow = microflow;
		this.repeat = repeat;
		this.sleep = sleep;
		this.sleepWhenFalse = sleepWhenFalse;
	}

	@java.lang.Override
	public java.lang.Boolean executeAction() throws Exception
	{
		// BEGIN USER CODE
		for (int i = 0; i < amountOfThreads; i++) {
			Parallelism.addThread(new BackgroundMicroflowThread(microflow, repeat, sleep, sleepWhenFalse, null));
		}
		Constants.LOGNODE.info("Started " + amountOfThreads + " threads invoking " + microflow);
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
		return "ExecuteInBackground";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}