/* exported isVowel */
function isVowel(char) {
  if (/[aeiou]/.test(char) || /[AEIOU]/.test(char)) {
    return true;
  }
  return false;
}
