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
 * Parse the drop data JSON of ReactNativeDraggableList into a list of Mendix objects.
 * 
 * Any non-persistent object can be used, as long as it contains (at least) an integer seqNbr attribute and an itemId attribute, usually a string
 * @param {string} dropData
 * @param {string} entityToReturn
 * @returns {Promise.<MxObject[]>}
 */
export async function ParseNativeDraggableListDropData(dropData, entityToReturn) {
	// BEGIN USER CODE

	return new Promise((resolve, reject) => {
		if (!entityToReturn) {
			return reject(new Error("Input parameter 'EntityToReturn' is required"));
		}
		if (!dropData) {
			return resolve (undefined);
		}
		const dropDataArray = JSON.parse(dropData);
		result = [];
		for (const dropDataItem of dropDataArray) {
			createMxObject(entityToReturn).then(mxObj => {
				mxObj.set("seqNbr", dropDataItem.seqNbr);
				mxObj.set("itemId", dropDataItem.itemId);
				result.push(mxObj);
			});
		}
		return resolve(result);
	});

	async function createMxObject(entityName) {
		return new Promise((resolve, reject) => {
			mx.data.create({
				entity: entityName,
				callback:  (mxObject) => {
					resolve(mxObject);
				},
				error: (e) => {
					reject("Could not create '" + entityName + "': " + e.message);
				}
			});

		});
	}

	// END USER CODE
}
