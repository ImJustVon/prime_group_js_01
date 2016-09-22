var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function Person(name, id, salary, rating) {
  this.name = name;
  this.id = id;
  this.salary = salary;
  this.rating = rating;


  this.getBonus = function () {

    var precent = 0;

    if (rating <= 2) {
      return percent;
    } else if (rating === 3) {
      percent = 0.04
    } else if (rating === 4) {
      percent = 0.06;
    } else if (rating === 5) {
      percent = .1;
    }

  if (id.length <= 4) {
      percent += 0.05;
   }
  if (salary > 65000) {
    percent -= 0.01;
  }
  if (percent > 0.13) {
    percent = 0.13;
  }
  return percent;
  }
}
var atticusO = new Person(atticus[0], atticus[1], atticus[2], atticus[3]);
var jemO = new Person(jem[0], jem[1], jem[2], jem[3]);
var booO = new Person(boo[0], boo[1], boo[2], boo[3]);
var scoutO = new Person(scout[0], scout[1], scout[2], scout[3]);

var employeesO = [atticusO, jemO, booO, scoutO];


for (var i = 0; i < employeesO.length; i++) {
    console.log(getEmployee(employeesO[i]));
}

function getEmployee (employee) {
  var bonusArray = [];
  bonusArray[0] = employee.name;

  var percent = employee.getBonus();

  bonusArray[1] = (percent * 100) + '%';

  var bonus = employee.salary * percent;

  bonusArray[2] = parseInt(employee.salary) + bonus;

  bonusArray[3] = parseInt(bonus);

  document.write('<h2>' + bonusArray[0] + '</h2>' + '<ul><li>Bonus Percentage: ' +
    bonusArray[1] + '</li><li>Adjusted Annual Compensation: $' + bonusArray[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
    '</li><li> Total Bonus: $' + bonusArray[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '</li></ul>')

  return bonusArray;
}

// function percentage (arr){
//   var rating = arr[3];
//   var salary = arr[2];
//   var id = arr[1];
//   var precent = 0;
//
//   if (rating <= 2) {
//     return percent;
//   } else if (rating === 3) {
//     percent = 0.04
//   } else if (rating === 4) {
//     percent = 0.06;
//   } else if (rating === 5) {
//     percent = .1;
//   }
//
// if (id.length <= 4) {
//     percent += 0.05;
//  }
// if (salary > 65000) {
//   percent -= 0.01;
// }
// if (percent > 0.13) {
//   percent = 0.13;
// }
// return percent;
// }
