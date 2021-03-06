// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} title
 * @param {Date} start
 * @param {Date} end
 * @param {string} location
 * @param {string} notes
 * @returns {Promise.<void>}
 */
export async function SaveCalendarEvent(title, start, end, location, notes) {
	// BEGIN USER CODE
    // Documentation: https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin
    if (!window.plugins || !window.plugins.calendar) {
        throw new Error("SaveCalendarEvent action requires cordova-plugin-calendar to be installed in the app");
    }
    window.plugins.calendar.createEventInteractively(
        title,
        location,
        notes,
        start,
        end,
        () => {
            // This success callback is not called on iOS when the user cancels
        },
        error => {
            throw new Error("Failed to save calendar event: " + error);
        }
    );
    return Promise.resolve();
	// END USER CODE
}
