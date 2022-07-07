// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
let timeout,lastCall,lastInvoke,fn,posArgs;
let active = false;
const wait = 1000;
function shouldInvoke(time) {
	const timeSinceLastCall = time - lastCall;
	const timeSinceLastInvoke = time - lastInvoke;

	// Either this is the first call, activity has stopped and we're at the
	// trailing edge, the system time has gone backwards and we're treating
	// it as the trailing edge, or we've hit the `maxWait` limit.
	// Also dont let the function run if it is already running
	return !active && (lastCall === undefined || (timeSinceLastCall >= wait) ||
		(timeSinceLastCall < 0) || (timeSinceLastInvoke >= wait));
}
async function run() {
	let newTime = Date.now();
	const invoking = shouldInvoke(newTime);
	lastCall = newTime;
	if(invoking) {
		if(timeout != undefined) {
			clearTimeout(timeout);
			timeout = undefined;
		}
		lastInvoke = newTime;
		// keep track when the function is running
		active = true;
		await fn(posArgs);
		active = false;
	} else {
		clearTimeout(timeout);
		timeout = setTimeout(run, wait);
	}
}
// END EXTRA CODE

/**
 * @param {Nanoflow} nanoflow
 * @param {MxObject} parameter
 * @param {MxObject} parameter_2
 * @returns {Promise.<void>}
 */
export async function JS_Throttle_Pos(nanoflow, parameter, parameter_2) {
	// BEGIN USER CODE
	fn = nanoflow;
	posArgs = {'POS':parameter, 'Cart':parameter_2};
	run();
	// END USER CODE
}
