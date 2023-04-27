const fs = require('fs');


const fileName = "Createwritefile.txt";
const textData = "Hey Rishabh This is your first Write File Function File Example";
const encoding = 'utf-8';
const fileData = "This is a file containing a collection"
           + "\n"
 + "1. js\n2. node.js\n3. express.js";
//readFile
const data = fs.readFileSync(fileName,encoding);

console.log(data);

//createAndWrite
fs.writeFileSync("Sync.txt",fileData);
const data2 = fs.readFileSync("Sync.txt",encoding);
console.log("data2: ",data2);

//exists or Not
fs.existsSync(fileName)?console.log("true") : console.log("false");

//appendFileSync
const sycFile = "Sync.txt";
const data3 = "\na: js is a  loosly type lanhuage."
fs.appendFileSync(sycFile,data3)?console.log("Data Append") : console.log("Something Wrong to Append");
const appendData = fs.readFileSync(sycFile,encoding);
console.log("Append Data : ",appendData);

//openSync
const file = fs.openSync(fileName,'r')
console.log(file);

mkdirSync

fs.mkdirSync("New/R/A/Files",{recursive:true})?console.log("Directory created") : console.log("Something Wrong to creation");

closeSync
fs.closeSync()?console.log("close fie"):console.log("not closed");

 fs.copyFileSync("Text.txt",__dirname)?console.log("copy file Successfully"):console.log("not copy");
