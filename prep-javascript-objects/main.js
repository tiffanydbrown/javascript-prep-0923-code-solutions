const person = { firstName: 'Tiffany', lastName: 'Brown', hobby: 'gaming' };
console.log(person);

const fullName =
  "The person's name is " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'engineer';
console.log("The person's current job is " + person.job);

person['previousJob'] = 'teacher';
console.log("The person's previous job was " + person['previousJob']);

console.log(person);
