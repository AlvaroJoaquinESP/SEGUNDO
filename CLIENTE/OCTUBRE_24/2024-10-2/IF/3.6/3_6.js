let year = Number(prompt("Insert a year"));

const leapYear = (year) => {
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        document.write('Is a leap year');
    } else {
        document.write('Isnt a leap year');
    }
}

leapYear(year);





