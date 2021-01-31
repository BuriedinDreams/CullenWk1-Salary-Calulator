console.log('Mic Check!');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery is hooked up!');

  // submit button click with save info to an array.
  $(document).on('click', '#addEmployeeBtn', submitBtn);

  $(document).on('click', '#deleteBtn', deleteBtn);

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
  const monthlyArray = []; // this is not global because we want the information to not Duplicate.
  //
  let monthlyWage = 0; // this is setting the value to 0

  for (items of employeeInfo) {
    monthlyWage = items.Salary / 12;
    monthlyArray.push(monthlyWage);
    console.log('items', items);
  }

  let totalSum = 0;
  for (let items in monthlyArray) {
    // this should loop through the objects in the array.
    totalSum += monthlyArray[items];
    console.log('this is the totalSum', totalSum);
  }
  console.log('outside the loop', totalSum);

  $('#TotalMonthlyCost').empty(); // this should empty the current info and replace with new totalSum.
  $('#TotalMonthlyCost').append(`${totalSum}`);

  if (totalSum > 20000) {
    $('#TotalMonthlyCost').css('background-color', 'red');
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
      <td> <input type="button" value="Delete" id="deleteBtn"/> </td>
    </tr>; `
    );
  }
}

function deleteBtn() {
  // console.log("I'm clicked!");
  // $(this).parent().remove();
  console.log($(this).parent());
}
