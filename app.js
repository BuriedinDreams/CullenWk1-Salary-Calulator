console.log('Mic Check!');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery is hooked up!');

  // submit button click with save info to an array.
  $(document).on('click', '#addEmployeeBtn', submitBtn);
}

/*
 * this function needs to activate on click event
 * needs to collect data from DOM. - .val()
 * create an object to Separate information
 * needs to push employees object to an array
 */
const employeeInfo = []; // Global array
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
    $('#tableData').append(
      ` <tr>
      <td>employees.firstName</td>
      <td>employees.lastName</td>
      <td>employees.ID</td>
      <td>employees.Title</td>
      <td>employees.Salary</td>
    </tr>; `
    console.log(items);
    );
  }
}
