// function factorial(number) {
//     let result = 1;
//     for(let i = 1; i <= 7; i++) {
//         result = result * i;
//     }
//     return result;
    
// }

// const myResult = factorial(7);
// console.log(myResult);


// function factorial(number) {
//     let result = 1;
//     for(let i = number; i >= 1; i--) {
//         result = result * i;
//         console.log(i);
//     }
//     return result;
    
// }
// const facnum = 5;
// const myResult = factorial(facnum);
// console.log('factorial of:', facnum, myResult);


// function factorial(number) {
//     let num = 1;
//     let result = 1;
//     while(num <= number) {
//         result = result * num;
//         num++;
//     }
//     return result;
// }
// let mynum = 10;
// let myResult = factorial(mynum);
// console.log(myResult);


function factorial(number) {
    let i = number;
    let result = 1;
    while(i >= 1) {
        result = result * i;
        i--;
    }
    return result;
}
let mynum = 10;
let myResult = factorial(mynum);
console.log(myResult);



