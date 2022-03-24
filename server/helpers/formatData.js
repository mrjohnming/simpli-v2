/*
Return an array of objects into the following format:
  {
    id: {
      id,
      name,
      description,
      ...
    },
    ...
  }
*/
const formatData = array => {
  const object = {};
  for (const element of array) {
    object[element.id] = element;
  }
  return object;
}

module.exports = formatData;
