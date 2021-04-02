function displayTime() {
  //Declare the variables
  var date = new Date();
  var hour = date.getHours(); //Hour ranges from 0 to 23.
  var minute = date.getMinutes(); // Minute ranges from 0 to 59.
  var second = date.getSeconds(); // Second ranges from 0 to 59.
  var period = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour -= -12; //For instance the 13th hour will be 13 - 12 resulting in 1.
    period = "PM";
  }
  // I want the time format in 2 digits for hours, minutes & seconds. This conditional (ternary) operator will add 0 in front of numbers less than 10.
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  //Save the values in a variable called time
  var time = `${hour}:${minute}:${second} ${period}`;
  document.getElementById("DigitalClock").innerHTML = time;

  setTimeout(displayTime, 1000);
}

displayTime();
