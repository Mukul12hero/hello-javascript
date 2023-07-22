
// sumit saha

function sleep(name, time) {
   console.log(name + " is sleeping from " + time);
}
sleep("mukul", "10 pm");
sleep("nazim", "12 pm");
sleep("naim", "9 pm")


// jankhar bai  return method

1.
function exam(bangla, eng) {
    var sum = bangla + eng;
    return sum;
}
var myNumber = exam(20, 50);
console.log("my number is : " + myNumber);
var karimNumber = exam(50, 80);
console.log("karim number is : " + karimNumber);
var totalNumber = exam(myNumber, karimNumber);
console.log("our total number is : " + totalNumber);

2.
function number(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return sum;

}
var mynum1 = 100;
var mynum2 = 200;
var mynum3 = 500;

var iGetNumber = number(mynum1, mynum2, mynum3);
console.log(iGetNumber);






