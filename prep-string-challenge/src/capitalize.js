/* exported capitalize */
function capitalize(word) {
  const result = word.toLowerCase();
  return result.charAt(0).toUpperCase() + result.slice(1);
}
