// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";
import DeviceInfo from "react-native-device-info";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<boolean>}
 */
export async function JS_Get_IsCharging() {
	// BEGIN USER CODE
    return DeviceInfo.isBatteryCharging();
	// END USER CODE
}