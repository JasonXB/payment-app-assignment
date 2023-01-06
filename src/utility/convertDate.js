// Turns a date object into [MM, DD, YYYY] array
function monthDayYear(dateObject) {
  const pad = (s) => (s < 10 ? "0" + s : s);
  var d = new Date(dateObject);
  return [pad(d.getMonth()), pad(d.getDate()), d.getFullYear()];
}

export function convertRawDateToString(dateObject) {
  // Extract variables from [MM, DD, YYYY] array output from monthDayYear
  let [month, day, year] = monthDayYear(dateObject);
  // Convert variables into readable string format
  // Ex. [10, 28, 2022] → → → Nov 28 2022
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // prettier-ignore
  month = monthNames[+month];
  return month + " " + day + " " + year;
}

//# Run Jest test on the stringDate function
