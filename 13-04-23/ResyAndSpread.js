//Spread operator
var array1 = [10, 20, 30, 40, 50];
var array2 = [60, 70, 80, 90, 100];
var array3 = [...array1, ...array2];
console.log(array3);

//spread on object
const obj = {
  firstname: "Divit",
  lastname: "Patidar",
};
const obj2 = { ...obj };
console.log(obj2);

//Rest operator
function display(first, ...other) {
    console.log(first);
    console.log(other);
}

display(1, 2, 3, 4, 5, 6);