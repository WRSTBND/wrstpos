// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package logging.actions;

import logging.support.MendixObjectLogSubscriber;
import com.mendix.core.Core;
import com.mendix.logging.LogLevel;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;

/**
 * Initializes the log subscriber that writes log messages to the database as "Logging.Message" objects.
 * 
 * Parameters:
 *  - logLevel: The minimum log level of log messages to store in the database. Must be one of: NONE, CRITICAL, ERROR, WARNING, INFO, DEBUG, TRACE. Use "NONE" to disable logging to objects. If no log level is provided (null or empty string), level "INFO" is used by default.
 * 
 * Returns: always 'true' (or throws an exception)
 */
public class InitializeLogSubscriber extends CustomJavaAction<java.lang.Boolean>
{
	private java.lang.String logLevel;

	public InitializeLogSubscriber(IContext context, java.lang.String logLevel)
	{
		super(context);
		this.logLevel = logLevel;
	}

	@java.lang.Override
	public java.lang.Boolean executeAction() throws Exception
	{
		// BEGIN USER CODE

        if ((this.logLevel != null) && !this.logLevel.isEmpty()) {
            MendixObjectLogSubscriber.setLogLevel(LogLevel.valueOf(this.logLevel.toUpperCase()));
        }
        Core.registerLogSubscriber(MendixObjectLogSubscriber.getInstance());

        return Boolean.TRUE;

		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "InitializeLogSubscriber";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
