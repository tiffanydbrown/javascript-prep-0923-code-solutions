/* exported isUpperCased */
function isUpperCased(word) {
  if (/A-Z/.test(word) || /^[A-Z]+$/.test(word)) {
    return true;
  }
  return false;
}
