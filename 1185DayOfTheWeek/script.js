var dayOfTheWeek = function (day, month, year) {
    const d = new Date(`${month}, ${day}, ${year}`);
    const dayAnswer = d.getDay();
    if (dayAnswer === 1) return 'Monday'
    if (dayAnswer === 2) return 'Tuesday'
    if (dayAnswer === 3) return 'Wednesday'
    if (dayAnswer === 4) return 'Thursday'
    if (dayAnswer === 5) return 'Friday'
    if (dayAnswer === 6) return 'Saturday'
    else return 'Sunday'
};

console.log(dayOfTheWeek(31, 8, 2019))


// Input: day = 31, month = 8, year = 2019
// Output: "Saturday"