/**
 * Capitalizes the first letter of a word.
 * @param {string} word The word to be capitalized
 * @returns The word with the first letter capitalized
 * @example 'hello' 🡢 'Hello'
 */
export function toCapitalCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
