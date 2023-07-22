function checkLeapYear(year) {
    const remainder = year % 4;

    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = checkLeapYear(2588);
console.log(myYear);