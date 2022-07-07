// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE

import { checkDateConstraintsFull } from "../GetOfflineUtils";

// END EXTRA CODE

/**
 * Get offline implementation using JSON strings as parameters. See getOffline at https://apidocs.mendix.com/7/client/mx.data.html for details.
 * 
 * Returns the first object, empty if not found.
 * 
 * Be sure to specify a limit of one, to avoid receiving a lot of data which is not used anyway. 
 * 
 * Use DateTimeToMilliseconds to get the correct value to use for date constraints.
 * @param {string} entityToReturn
 * @param {string} constraintsJson
 * @param {string} filterJson
 * @returns {Promise.<MxObject>}
 */
export async function GetOfflineFullFirst(entityToReturn, constraintsJson, filterJson) {
	// BEGIN USER CODE
	return new Promise(function(resolve, reject) {

		try {
			var constraints,
				filter;

			constraints = JSON.parse(constraintsJson);
			checkDateConstraintsFull(constraints, entityToReturn);

			filter = JSON.parse(filterJson);

			mx.data.getOffline(entityToReturn, constraints, filter,
				function (mxobjs, count) {
					if (count > 0) {
						resolve(mxobjs[0]);
					} else {
						// Returning null does not work, needs to be undefined
						resolve(undefined);
					}
				},
				function (error) {
					if (error && error.message) {
						reject("GetOfflineFullFirst failed: " + error.message);
					} else {
						reject("GetOfflineFullFirst failed to retrieve data.");
					}
				}
			);
		} catch (error) {
			if (error && error.message) {
				reject("GetOfflineFullFirst failed: " + error.message);
			} else {
				reject("GetOfflineFullFirst failed.");
			}
		}
	});
	// END USER CODE
}
