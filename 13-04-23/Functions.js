//Function declaration

function myFunction(g1, g2) {
  return g1 / g2;
}
const value = myFunction(8, 2);

console.log(value);

function calcAddition(number1, number2) {
  return number1 + number2;
}
console.log(calcAddition(6, 9));

//Function Declaration

const square = function (number) {
  return number * number;
};
const x = square(4);
console.log(x);

//Arrow Function

const val = (a, b) => a * b;
console.log(val(3, 5));

const num = (a, b) => {
  c = 5;
  return (a + b) * c;
};
console.log(num(2, 3));

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a3 = a.map((s) => s.length);

console.log(a3);

//Anonymous function

const func = function (a, b) {
  return a ** b;
};

console.log(func(3, 5));

//Anonymous function by setTimeout function
setTimeout(function () {
  console.log("I Execute this function  later after 3 second");
}, 3000);


//IIFE Functions

(function(){
    let name = [ "Rishabh" , "Kush ","Mohit","Yash ","Dhuruv"];
    if(name != name.length+1){
        setTimeout(name.forEach(element => {
            console.log(element);
        }), 2000);
    }
})();

