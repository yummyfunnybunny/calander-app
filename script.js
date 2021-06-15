// start off by getting the current full date info for the current day
const date = new Date();
// console.log(date);

const renderCalendar = () => {
  // set the date to the first day of the current month before begining
  date.setDate(1);
  console.log(date);

  const monthDays = document.querySelector(".days");

  // get the last day of this month
  // if june: 30
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  console.log(`lastDay: ${lastDay}`);

  // get the last day of the previous month
  // if june: 31
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  console.log(`prevLastDay: ${prevLastDay}`);

  // get the calendar column position of the first day of the current month
  // if june: 2 - tuesday
  // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thr, 5 = Fri, 6 = Sat
  const firstDayIndex = date.getDay();
  console.log(`firstDayIndex: ${firstDayIndex}`);

  // get the calandater column position of the last day of the current month
  // if june: 3 - wednesday
  // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thr, 5 = Fri, 6 = Sat
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  console.log(`lastDayIndex: ${lastDayIndex}`);

  // get the number of days needed to finish filling the end of the calander with non-current-month days
  // so if the last day of the month is a wednesday, than this will be 3 (Thr, Fri, Sat)
  const nextDays = 7 - lastDayIndex - 1;
  console.log(`nextDays: ${nextDays}`);

  // create an array with all month names to use for rendering
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // render the name of the current month as the header for the calander
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  // render the current date as a string below the header
  document.querySelector(".date p").innerHTML = new Date().toDateString();

  // create the variable that we will use to fill with innerHTML for rendering the proper days for the current month in the calander
  let days = "";

  // add the non-current-month days from the begining of the calander to let 'days' (if the first day of the month is not a sunday)
  for (let x = firstDayIndex; x > 0; x--) {
    // console.log("non-current-month days at begining of month");
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  // add all current-month days to let 'days'
  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  // add all non-current-month-days to the end of the calander (if the last day of the month is not a saturday)
  for (let j = 1; j <= nextDays; j++) {
    console.log("boom");
    days += `<div class="next-date">${j}</div>`;
  }

  // finally, fill the monthDays HTML node with all of the innerHTML from let 'days'
  monthDays.innerHTML = days;
};

// switch to the previous month
document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

// switch to the next month
document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

// render the calander
renderCalendar();
