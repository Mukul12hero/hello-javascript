// function sumOfAnArray(numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum + element;
//         console.log(index, element, sum)
//     }
// }

// const myNumber = [12, 52, 55, 98, 97, 67];
// sumOfAnArray(myNumber);




// 1. get an array index with help function

// function sumArray(number) {
//     for(let i = 0; i < number.length; i++) {
//         let numIndex = i;
//         console.log(numIndex);
//     }
// }

// const numArray = [23, 45, 77, 86];
// sumArray(numArray);

// 2. get an array element with help function

// function sumArray(number) {
//     for(let i = 0; i < number.length; i++) {

//         let youIndex = i;
//         let element = number[youIndex];
//         console.log(element);
//     }
// }

// const numb = [23, 45, 77, 86];
// sumArray(numb);

// 3. sum arry element with function

function sumOfary(numberary) {
    let sum = 0;
    for(let i = 0; i < numberary.length; i++) {
        let numInd = i;
        let element = numberary[numInd];
        sum = sum + element;
        console.log(sum);
    }
    return sum;
    
}

let myAry = [54, 65, 75, 23];
sumOfary(myAry);
