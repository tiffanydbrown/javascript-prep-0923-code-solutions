/* exported getWords */
function getWords(string) {
  const myArray = string.trim().split(' ');
  if (string === '') {
    return [];
  }
  return myArray;
}
// console.log(getWords('Hello Tiffany'));
