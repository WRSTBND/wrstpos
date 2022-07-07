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
 * @returns {Promise.<boolean>}
 */
export async function IsBiometricAuthenticationSupported() {
	// BEGIN USER CODE
    return new Promise((resolve, reject) => {
        if (!window.device) {
            throw new Error(
                "IsBiometricAuthenticationSupported action requires cordova-plugin-device to be installed in the app"
            );
        }
        if (window.device.platform === "iOS") {
            if (window.plugins && window.plugins.touchid) {
                window.plugins.touchid.isAvailable(
                    () => resolve(true),
                    () => resolve(false)
                );
            } else {
                reject(
                    new Error(
                        "IsBiometricAuthenticationSupported action requires cordova-plugin-touch-id to be installed in the iOS app"
                    )
                );
            }
        } else if (window.device.platform === "Android") {
            if (window.FingerprintAuth) {
                window.FingerprintAuth.isAvailable(
                    result => {
                        if (result.isAvailable && result.isHardwareDetected && result.hasEnrolledFingerprints) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    },
                    message => reject(message)
                );
            } else {
                reject(
                    new Error(
                        "IsBiometricAuthenticationSupported action requires cordova-plugin-android-fingerprint-auth to be installed in the Android app"
                    )
                );
            }
        }
    });
	// END USER CODE
}
