/* exported toObject */
function toObject(keyValuePair) {
  const [key, value] = keyValuePair;
  const object = {};
  object[key] = value;
  return object;
}
