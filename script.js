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

// callback function : return

// function interviewQuestion(job) {
//   if (job === "teacher") {
//     return function(name) {
//       console.log(name + " " + "What do you teach ?");
//     };
//   } else if (job === "designer") {
//     return function(name) {
//       console.log(name + " " + ", can you please explain UX design");
//     };
//   } else {
//     return function(name) {
//       console.log(name + " " + ",what do you do ?");
//     };
//   }
// }

// const teacherQuestion = interviewQuestion("teacher");
// console.log(teacherQuestion("john"));

/// closure

function interviewQuestion(job) {
  let question = "";

  switch (job) {
    case "teacher":
      question = " " + "What do you teach ?";
      break;
    case "designer":
      question = " " + ", can you please explain UX design";
      break;
    default:
      question = " " + ",what do you do ?";
  }

  return function(name) {
    console.log(name + question);
  };
}

//const teacherQuestion = interviewQuestion("teacher");
//teacherQuestion("john");

//// closure

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

// console.log(counter.value()); // logs 0
// counter.increment();
// counter.increment();
// console.log(counter.value()); // logs 2
// counter.decrement();
// console.log(counter.value()); // logs 1

////  Makecounter

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
};

// var counter1 = makeCounter();
// var counter2 = makeCounter();
// alert(counter1.value()); /* Alerts 0 */
// counter1.increment();
// counter1.increment();
// alert(counter1.value()); /* Alerts 2 */
// counter1.decrement();
// alert(counter1.value()); /* Alerts 1 */
// alert(counter2.value()); /* Alerts 0 */

//question 1 :

//Answer
for (var i = 0; i < 5; i++) {
  let x = i;
  let btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Button " + i));
  btn.addEventListener("click", function() {
    console.log(x);
  });
  document.body.appendChild(btn);
}

// is Palindrome

var isPalindrome = function(str) {
  var strLen = str.length;
  if (strLen === 0 || strLen === 1) {
    return true;
  }

  if (str[0] === str[strLen - 1]) {
    return isPalindrome(str.slice(1, strLen - 1));
  }

  return false;
};

console.log(isPalindrome("abcdefggfedcba"));

//factorial

function f(n) {
  return n > 1 ? n * f(n - 1) : n;
}
