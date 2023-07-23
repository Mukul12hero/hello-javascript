function sumOfary(numberary) {
    const oddNumber = [];
    for(let i = 0; i < numberary.length; i++) {
        let numInd = i;
        let element = numberary[numInd];
   
        if (element % 2 !== 0) {
            console.log(numInd, element)
            oddNumber.push(element);
        }
    }
}

let myAry = [54, 65, 75, 23, 456, 642, 345, 235];
sumOfary(myAry);