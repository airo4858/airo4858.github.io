// script.js

// Problem 1
console.log("Problem 1:");

const employees = [
  { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
  { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
  { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

// Problem 2
const company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees
};

console.log(company);

// Problem 3
console.log("\nProblem 3:");

const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);

console.log(company);

// Problem 4
console.log("\nProblem 4:");

const totalSalary = company.employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log("Total Salary for all employees: ", totalSalary);

// Problem 5
console.log("\nProblem 5:");

function giveRaise(employee) {
  if (employee.raiseEligible) {
    employee.salary *= 1.1;
    employee.raiseEligible = false;
  }
}

company.employees.forEach(giveRaise);
console.log(company);

// Problem 6
console.log("\nProblem 6:");

const workingFromHome = ['Anna', 'Sam'];

company.employees.forEach(employee => {
  employee.wfh = workingFromHome.includes(employee.firstName);
});

console.log(company);