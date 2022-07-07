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
 * @param {string} displayName
 * @param {string} firstName
 * @param {string} middleName
 * @param {string} lastName
 * @param {string} phoneNumber
 * @param {string} email
 * @returns {Promise.<void>}
 */
export async function SaveContact(displayName, firstName, middleName, lastName, phoneNumber, email) {
	// BEGIN USER CODE
    // Documentation: https://github.com/apache/cordova-plugin-contacts
    if (!navigator.contacts) {
        throw new Error("SaveContact action requires cordova-plugin-contacts to be installed in the app");
    }
    const contact = navigator.contacts.create();
    contact.displayName = displayName;
    contact.nickname = displayName;
    contact.name = {
        givenName: firstName,
        middleName,
        familyName: lastName
    };
    if (phoneNumber) {
        contact.phoneNumbers = [{ type: "work", value: phoneNumber, pref: true }];
    }
    if (email) {
        contact.emails = [{ type: "work", value: email, pref: true }];
    }
    return new Promise((resolve, reject) => {
        contact.save(
            () => resolve(),
            error => reject(new Error(errorMessage(error)))
        );
    });
    function errorMessage(error) {
        switch (error.code) {
            case 0 /* UNKNOWN_ERROR */:
                return "Found an unknown error while handling the request.";
            case 1 /* INVALID_ARGUMENT_ERROR */:
                return "Invalid argument found.";
            case 2 /* TIMEOUT_ERROR */:
                return "Operation timed out.";
            case 3 /* PENDING_OPERATION_ERROR */:
                return "Pending operation error.";
            case 4 /* IO_ERROR */:
                return "IO error encountered.";
            case 5 /* NOT_SUPPORTED_ERROR */:
                return "Operation not supported.";
            case 6 /* OPERATION_CANCELLED_ERROR */:
                return "Operation cancelled.";
            case 20 /* PERMISSION_DENIED_ERROR */:
                return "Permission denied.";
        }
        return "Error code undefined";
    }
	// END USER CODE
}
