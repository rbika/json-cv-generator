/**
 * Sleep utility.
 *
 * Should be used inside an async function.
 *
 * @param ms - Time in milliseconds
 *
 * @example
 *
 * console.log('ping')
 * await sleep(2000)
 * console.log('pong') // Prints after 2 seconds
 */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
