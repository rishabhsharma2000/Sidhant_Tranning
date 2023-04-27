var arr1 = [];

arr1.push(12, 23, 14);
console.log(arr1);

arr1.pop();

console.log(arr1);
console.log(arr1.length);
arr1.push(1,"Rishabh");
console.log(arr1);

arr1[2] = "kke";
console.log(arr1);


const newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}
];

console.log(newData[2]());

const numberArray = [ 2, 4, 6, 8];
const stringArray = [ 'eat', 'work', 'sleep'];

//unshift()

numberArray.unshift(1);
console.log(numberArray);

// shift()
stringArray.shift();
console.log(stringArray);

//concate

numberArray.concat(numberArray)
console.log("jcjds"+numberArray);

//array iterate with map function

const sArray = numberArray.map(item => {
    return item * 2
})
console.log(sArray);