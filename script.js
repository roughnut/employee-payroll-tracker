// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // Create an empty locally scoped array to store employee data
  const employeesArray = [];
  
  // Set a flag to determine if the user wants to continue adding employees
  let continueAdding = true;

  // Prompt the user to enter employee data
  while (continueAdding) {
  const firstName = prompt('Employee\'s first name?');
  const lastName = prompt('Employee\'s last name?');
  let salary = prompt('Employee\'s salary?');

  // If salary is not a number, set it to 0
  if (isNaN(salary)) {
    salary = 0;
  }

  // Create an object to store the employee data
  const employeeDetails = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };
  
// Push the employee data to the employeesArray
  employeesArray.push(employeeDetails);

  // Ask the user if they want to continue adding employees
  continueAdding = confirm('Enter another employee?');
  if (!continueAdding) {
    return employeesArray;
  }
}
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  // Create a variable to store the total salary
  let totalSalary = 0;

  // Console log the number of employees
  console.log(`The number of employees is: ${employeesArray.length}`);

  // Create a loop to calculate the total salary - Need to convert the salary to a number and add to totalSalary
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += Number(employeesArray[i].salary);
  }

  // Console log the total salary and the average salary - round the average salary to the nearest integer
  console.log(`The sum of all salaries is: ${totalSalary}`);
  console.log(
    `The average salary is: ${Math.round(totalSalary / employeesArray.length)}`
  );
  return;
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // Generate a random number between 0 and the length of the employeesArray
  const randomEmployeeNumber = Math.floor(Math.random() * employeesArray.length);

  // Console log the random employee' first and last names extracted from the object in the employeesArray
  console.log(`Random employee of the month: ${employeesArray[randomEmployeeNumber].firstName} ${employeesArray[randomEmployeeNumber].lastName}! Their prize is a prominently featured console.log. Wooooo!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
