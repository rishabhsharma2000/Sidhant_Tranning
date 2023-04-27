const {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  isEqual,
  differenceWith,
  drop,
  dropRightWhile,
  dropRight,
  fill,
  find,
  findIndex,
  findLast,
  findLastIndex,
  head,
  indexOf,
  sortedIndex,
  sortedIndexBy,
  tail,
  zipObject,
} = require("lodash");

//Lodash Functionality for Array

const numberArray = [2, 4, 6, 8];
const numbArray2 = [3, 2, 4, 8, 9, 10];
const stringArray = ["eat", "work", "sleep"];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const compactArray = ["Banana", "Orange", false, "", 0, "Orange","work", "sleep"];
//chunk

console.log(chunk(fruits, 2));

console.log(chunk(numberArray, 3));

//compact

console.log(compact(compactArray));
console.log(compactArray, [[12, 45, 0, false, "rishabh"]]);

//concat

const arr1 = ["Cecilie", "Lone","Robin"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];

console.log(concat(arr2, arr1, arr3));

//difference determined by the first array.

console.log("difference is ", difference(numberArray, [3, 2, 4, 8]));
console.log(difference(numberArray), [8, 4, 2, 6]);

//differenceBy determined by the first array.
const array1 = [1, 2, 3, 4.2];

const val = [2, 3, 3, 5];
const val2 = [2, 3, 4, 5,5,6,5,4];
console.log("differnce By :", differenceBy(array1, val, Math.double));
console.log("differnce By :", differenceBy(array1, val, Math.floor));
console.log(":With out differnce funtion", differenceBy(array1, val2));

//differenceWith
console.log("differnce with ", differenceWith(numberArray, val, isEqual));
let x = [{ a: 1 }, { b: 2 }, 6];

let y = [{ a: 1 }, 7, 6];
console.log("differnce with ", differenceWith(x, y, isEqual));

//drop //dropRight(remove after the no) 

console.log("Drop :", drop(numberArray, 3));
console.log("Drop Right :", compact(dropRight(compactArray, 2)));

//fill (fill the value between the last  index)
console.log("Fill :",fill(val,2,0,2));

//findIndex (finding index after give index position )
console.log("findIndex",findIndex(compactArray,(e)=>{
    return e == "Orange";
}),3);

//findLast (find last occurance  of element from right at the gien index)
let array2 = [4, 2, 4,3, 1, 4, 2];
console.log("findlastindex",findLastIndex(array2,(e)=>{
    return e == 2
},1));

//head (get first element)

console.log("head",head(compactArray));

//indexof(get the first occurence )

console.log("indexOf:",indexOf(val2,4,2));

//sortedIndex( binary search on a sorted array)

console.log("sorted Index",sortedIndex(val2,4));

//sortedindexby("insert the value in array according to value size")

const obj = [
  {"a":3},
  {"a":5},
  {"a":7}
]

console.log("sortedIndexby",sortedIndexBy(obj,{"a":6},(e)=>{
  return  e.a;
}));

console.log("sortedIndexby",sortedIndexBy(obj,{"a":9},(e)=>{
  return  e.a;
}));

//tail(create new array which not contain first elemnent of existing array)

console.log("tailt",tail(array2));

//zipObject(create two or more array as object )

console.log("zip object ",zipObject(arr1,arr2));