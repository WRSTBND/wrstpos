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
 * @param {MxObject} mxObject
 * @param {string} enumAttribute - The enum attribute for which to get the caption
 * @param {boolean} useCaption - True to return the caption, false to return the key.
 * @returns {Promise.<string>}
 */
export async function GetEnumValue(mxObject, enumAttribute, useCaption) {
	// BEGIN USER CODE

	return new Promise(function(resolve, reject) {
		var caption,
			metaData,
			rejectWithMessage = function (message) {
				reject("GetEnumCaption: ");
			},
			value;
		try {
			if (!mxObject) {
				rejectWithMessage("mxObject not set.");
				return;
			}
			if (!enumAttribute) {
				rejectWithMessage("enumAttribute not set.");
				return;
			}
			metaData = mx.meta.getEntity(mxObject.getEntity());
			if (!metaData.has(enumAttribute)) {
				rejectWithMessage("Attribute " + enumAttribute + " is no attribute of " + mxObject.getEntity());
			}
			value = mxObject.get(enumAttribute);
			if (value === null || value === "") {
				// Returning null does not work, needs to be undefined
				resolve(undefined);
			} else {
				if (useCaption) {
					caption = mxObject.getEnumCaption(enumAttribute, value);
					resolve(caption);
				} else {
					resolve(value);
				}
			}
		} catch (error) {
			if (error && error.message) {
				reject("GetEnumCaption failed: " + error.message);
			} else {
				reject("GetEnumCaption failed.");
			}
		}
	});
	// END USER CODE
}
