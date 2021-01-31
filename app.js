console.log('Mic Check!');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery is hooked up!');

  // submit button click with save info to an array.
  $(document).on('click', '#addEmployeeBtn', submitBtn);

  // $(document).on('click', '#addEmployeeBtn', calcMonthly);
}

/*
 * this function needs to activate on click event
 * needs to collect data from DOM. - .val()
 * create an object to Separate information
 * needs to push employees object to an array
 */
const employeeInfo = []; // Global array
//

//
function submitBtn(event) {
  // this is used to help the page not reload once I hit submit.
  event.preventDefault();
  console.log("I'm Clicked");
  //
  // grabbing info from the DOM // these variables will be used in object.
  let fName = $('#fName').val();
  let lName = $('#lName').val();
  let ID = $('#ID').val();
  let title = $('#TitlePos').val();
  let Salary = $('#annSal').val();
  //
  // putting variables into an object.
  const employees = {
    firstName: fName,
    lastName: lName,
    ID: Number(ID), // want this to be a number
    Title: title,
    Salary: Number(Salary), // want this to be a number
  };
  //
  // this is going to push the employees object into the global array.
  employeeInfo.push(employees);
  console.log(employeeInfo);
  //
  // I want to take info from the global array and take all the employees wages --
  // and divide them by 12.
  // this needs to be above the .val('') or else I'm unable to collect the data.
  //
  const monthlyArray = []; //
  let monthlyWage = 0;

  for (items of employeeInfo) {
    monthlyWage = 0;
    monthlyWage = items.Salary / 12;
    monthlyArray.push(monthlyWage);
    console.log('employeeInfo', employeeInfo);
    console.log('items', items);
    console.log('monthlyArray', monthlyArray);
    // console.log('This is MonthlyWage CL:', monthlyWage);
    // console.log('This is MonthlyArray CL:', monthlyArray);
    // console.log('This is the for OF loop E.I.Array:', items);
  }

  console.log('showing the final result inside M.A.', monthlyArray);

  // empty textboxes
  $('#fName').val('');
  $('#lName').val('');
  $('#ID').val('');
  $('#TitlePos').val('');
  $('#annSal').val('');
  //
  //
  $('#tableData').empty();
  for (let items of employeeInfo) {
    // remember to append items.firstName etc.
    console.log(items);
    $('#tableData').append(
      ` <tr>
      <td>${items.firstName}</td>
      <td>${items.lastName}</td>
      <td>${items.ID}</td>
      <td>${items.Title}</td>
      <td>${items.Salary}</td>
    </tr>; `
    );
  }
}
//
// global monthlyArray
// const monthlyArray = [];

function calcMonthly() {
  // I want to take info from the global array and take all the employees wages --
  // and divide them by 12.
  // monthlyArray.push(monthlyWage);
  // console.log(monthlyWage);
  // console.log($('#annSal'));
}
