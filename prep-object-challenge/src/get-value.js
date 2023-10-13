/* exported getValue */
function getValue(object, key) {
  for (const prop in object) {
    if (prop === key) {
      return object[key];
    }
  }
}
