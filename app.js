console.log('Mic Check!');

$(document).ready(onReady);

function onReady() {
  console.log('jQuery is hooked up!');

  // submit button click with save info to an array.
  $(document).on('click', '#addEmployeeBtn', submitBtn);
}

function submitBtn() {
  console.log("I'm Clicked");
}
