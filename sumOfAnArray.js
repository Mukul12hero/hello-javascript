function sumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum)
    }
}

const myNumber = [12, 52, 55, 98, 97, 67];
sumOfAnArray(myNumber);