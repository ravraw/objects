// Function constructer

const Person = function(name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

//Person.prototype.lastname;

var john = new Person("John", 1992, "Teacher");
var jane = new Person("Jane", 1982, "Doctor");
var mark = new Person("Mark", 1955, "Retired");
