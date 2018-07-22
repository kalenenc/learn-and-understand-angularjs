var Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

function logPerson() {
  var john = new Person('john', 'doe');
  console.log(john);
}

logPerson();

// logPerson() is depenedent on john, which is usually bad to do in code
// if something changes with john, you have to change it inside the function

// INSTEAD:

function logPerson(person) {
  console.log(person);
}

var john = new Person('john', 'doe');
logPerson(john);

// much better! this is an example of dependency injection
// basically just pass the object to the function instead of make inside the function

// logPerson no longer dependent on the person variable
// we're INJECTING the dependency
