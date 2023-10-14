/* exported isLowerCased */
function isLowerCased(word) {
  if (/[A-Z]/.test(word) || /^[A-Z]+$/.test(word)) {
    return false;
  }
  return true;
}
