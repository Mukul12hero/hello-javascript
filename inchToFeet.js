// const myInches = 75;
// const myFeet = myInches / 12;
// console.log(myFeet);


// const karimInches = 65;
// const karimFeet = karimInches / 12;
// console.log(karimFeet);


// const nazimInches = 85;
// const nazimFeet = nazimInches / 12;
// console.log(nazimFeet);

// easy way to code this with a function

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}

const myInches = 67;
const myFeet = inchToFeet(myInches);
console.log(myFeet);

const nazimInches = 88;
const nazimFeet = inchToFeet(nazimInches);
console.log(nazimFeet);
