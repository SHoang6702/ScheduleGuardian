// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let hourNine = document.getElementById('hour-9');
let hourTen = document.getElementById('hour-10');
let hourEleven = document.getElementById('hour-11');
let hourTwelve = document.getElementById('hour-12');
let hourThirteen = document.getElementById('hour-13');
let hourFourteen = document.getElementById('hour-14');
let hourFifteen = document.getElementById('hour-15');
let hourSixteen = document.getElementById('hour-16');
let hourSeventeen = document.getElementById('hour-17');
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
let btn9 = document.getElementById('btn-9');
  btn9.addEventListener('click', 
  function (event) {
    const description = document.querySelector('#description-9');
    localStorage.setItem('textStorage9', description.value);
    console.log(localStorage.getItem('textStorage9'));
});

let btn10 = document.getElementById('btn-10');
  btn10.addEventListener('click', 
  function (event) {
    const description = document.querySelector('#description-10');
    localStorage.setItem('textStorage10', description.value);
    console.log(localStorage.getItem('textStorage10'));
  });

let btn11 = document.getElementById('btn-11');
  btn11.addEventListener('click', 
  function (event) {
    const description = document.querySelector('#description-11');
    localStorage.setItem('textStorage11', description.value);
    console.log(localStorage.getItem('textStorage11'));
  });

  let btn12 = document.getElementById('btn-12');
  btn12.addEventListener('click', 
  function (event) {
    const description = document.querySelector('#description-12');
    localStorage.setItem('textStorage12', description.value);
    console.log(localStorage.getItem('textStorage12'));
  });

  let btn13 = document.getElementById('btn-13');
  btn13.addEventListener('click', 
  function (event) {
    const description = document.querySelector('#description-13');
    localStorage.setItem('textStorage13', description.value);
    console.log(localStorage.getItem('textStorage13'));
  });

let btn14 = document.getElementById('btn-14');
  btn14.addEventListener('click', 
  function (event) {
    const description = document.querySelector('#description-14');
    localStorage.setItem('textStorage14', description.value);
    console.log(localStorage.getItem('textStorage14'));
  });

let btn15 = document.getElementById('btn-15');
  btn15.addEventListener('click', 
  function (event) {
    const description = document.querySelector('#description-15');
    localStorage.setItem('textStorage15', description.value);
    console.log(localStorage.getItem('textStorage15'));
  });

let btn16 = document.getElementById('btn-16');
  btn16.addEventListener('click', 
  function (event) {
    const description = document.querySelector('#description-16');
    localStorage.setItem('textStorage16', description.value);
    console.log(localStorage.getItem('textStorage16'));
  });

let btn17 = document.getElementById('btn-17');
  btn17.addEventListener('click', 
  function (event) {
    const description = document.querySelector('#description-17');
    localStorage.setItem('textStorage17', description.value);
    console.log(localStorage.getItem('textStorage17'));
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function callText() {
    const description9 = document.querySelector('#description-9');
    const description10 = document.querySelector('#description-10');
    const description11 = document.querySelector('#description-11');
    const description12 = document.querySelector('#description-12');
    const description13 = document.querySelector('#description-13');
    const description14 = document.querySelector('#description-14');
    const description15 = document.querySelector('#description-15');
    const description16 = document.querySelector('#description-16');
    const description17 = document.querySelector('#description-17');
    description9.innerHTML = localStorage.getItem('textStorage9');
    description10.innerHTML = localStorage.getItem('textStorage10');
    description11.innerHTML = localStorage.getItem('textStorage11');
    description12.innerHTML = localStorage.getItem('textStorage12');
    description13.innerHTML = localStorage.getItem('textStorage13');
    description14.innerHTML = localStorage.getItem('textStorage14');
    description15.innerHTML = localStorage.getItem('textStorage15');
    description16.innerHTML = localStorage.getItem('textStorage16');
    description17.innerHTML = localStorage.getItem('textStorage17');
  };
  callText();
  // TODO: Add code to display the current date in the header of the page.
  var currentTime = dayjs().format('hh:mm:ss a');
  var dateEl = dayjs();
  $('#currentDay').text(dateEl.format('MMM D, YYYY'))


// past, present, and future

// ## Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar (Completed)

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm (09:00-17:00) (Completed)

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future (WIP)

// WHEN I click into a timeblock
// THEN I can enter an event (Completed)

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage (Completed)

// WHEN I refresh the page
// THEN the saved events persist (Completed)

// Use class for "past", "present", and "future" to apply styles to the
// time-block divs accordingly. The javascript will need to do this by
// adding/removing these classes on each div by comparing the hour in the
// id to the current hour. The html provided below is meant to be an example
// demonstrating how the css provided can be leveraged to create the
// desired layout and colors. The html below should be removed or updated
// in the finished product.