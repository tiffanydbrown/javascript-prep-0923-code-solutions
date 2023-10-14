/* exported getValues */
function getValues(object) {
  const arr = [];

  for (const value in object) {
    arr.push(object[value]);
  }
  return arr;
}
