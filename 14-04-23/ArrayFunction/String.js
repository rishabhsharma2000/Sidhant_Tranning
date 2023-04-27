//Lodash String Functions

const { camelCase, capitalize, deburr, endsWith, escape, kebabCase, lowerFirst, lowerCase, pad, padEnd, repeat, replace, snakeCase, split, startsWith, trim, truncate } = require("lodash");

const str1 = "Welcome to Credex-Technology"
const str2="ÀÄÅÆÇÈÉ"
const str3 = "Rishabh << from >> Modinagar"
const str4 = "Good------2-----See___You"
//Camel case(remove underscore dash space and cretae in camel form)

console.log("camel:",camelCase(str1));

//capitalize(first letter UpperCase rest Lower)
console.log(capitalize(camelCase(str1)));

//deburr(remove  diacritical marks. and change to basic latin)
console.log("deburr:",deburr(str2));

//endWith (check whether string end with taget string or char)

console.log("endWith:",endsWith(str1,"ogy"));

//escape(convert  “&”, “<“, “>”, ‘”‘, and “‘” into html)
console.log("escape:",escape(str3));

//kebabCase(convert string into kebab string format)
console.log("Kebab Case:",kebabCase(str1));

//lowerCase(converted into lower case or space separated words)
console.log("LowerCase:",lowerCase(str4));

//pad(Padding the string from left side and right side according giving no of index with existing index)

console.log("Padding:",pad(deburr(str2),20,"_*_"));

//padEnd(Padding the string  right side according giving no of index with existing index)
console.log("PaddingEnd:",padEnd(str4,30,"*"));

//parseInt(parse string argument into integer)

const strInt = "19.35*32"
const strInt2 = "58Hello32world76";
console.log("ParsedInt:",parseInt(strInt,10));
console.log(parseInt(strInt2));

//repeat(repeat the given string n times.)

const hello = "Hello Credex"
console.log("Repeat:",repeat(hello,20));
console.log("Repeat2 :",repeat(hello,0));

//replace(replace the string by given string from the given removing string)

const repString ='Stay In';
console.log("Repolace:",replace(repString,"In","safe"));
const numString = ['3',' 2',' 4', '8', '9', '10'];
console.log(replace(numString,'4 8','58'));

//snakeCase(convert string to into combine words with underscore.)

console.log("snakeCase:",snakeCase(str1));
console.log("snakeCase:",snakeCase("rishi.kumar"));

//split( given string by the given separator and up to the given limit length.)

console.log("split:",split(str4,"-"));
console.log("split:",split(str4,"-",5));

//startsWith(find string start with or not)

console.log("startwith:",startsWith(str4,'Good'));

//trim(remove specfic characters and white spaces)
console.log("trim:",trim(str4));

//truncate( truncate the stated string if it is longer than the specified string length.)

const str6 = "Hi my name is rishabh sharma  i am a software engineer";
console.log("Truncate:",truncate(str6,{
    length:15,
    omission:'....'
}));