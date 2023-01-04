/**
 * Use this function to delay program execution, usually helpful for
 * development/testing loading state during API calls.
 *
 * @example `await sleep() // Pause code for 1 second`
 * @example `await sleep(5000) // Pause for 5 seconds`
 *
 * @param millis millisecond value for how long to pause execution
 * @returns a promise that resolves to nothing after the given time
 */
export function sleep(millis = 1000): Promise<void> {
  return new Promise((res) => setTimeout(res, millis));
}
