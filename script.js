// Function constructer

/*const Person = function(name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

//Person.prototype.lastname;

var john = new Person("John", 1992, "Teacher");
var jane = new Person("Jane", 1982, "Doctor");
var mark = new Person("Mark", 1955, "Retired");
*/

// Object.create

var personProto = {
  calculateAge: function() {
    console.log(2016 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearofBirth: { value: 1969 },
  job: { value: "designer" }
});
