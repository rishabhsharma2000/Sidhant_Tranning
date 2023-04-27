 const fs = require("fs");

const encoding = "utf-8";
const fileName = "Createwritefile.txt";
//create a unique directory
fs.promises
  .mkdtemp("temp", encoding)
  .then((folder) => {
    console.log("Temp folder created", folder);
  })
  .catch((err) => {
    console.log(err);
  });

//promises.open

fs.promises
  .open(fileName, "r")
  .then((result) => {
    console.log("result", result);
  })
  .catch((err) => {
    console.log("Error", err);
  });

//create Directory
fs.promises
  .mkdir("test")
  .then(function () {
    console.log("Directory created successfully");
  })
  .catch(function () {
    console.log("failed to create directory");
  });

//readFile

fs.promises
  .readFile(fileName, encoding)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//
const obj = {
  name: "Rishabh Sharma",
  Address: "Modinagar",
  Contact: 8937022875,
};

// fs.promises.appendFile(fileName,obj).then(()=>{
//     fs.promises.readFile(fileName,encoding).then((data)=>{
//         console.log("Append File :" ,data.toString());
//     }).catch(err=>{
//         console.log("Inner ",err);
//     })
// }).catch(err=>{
//     console.log(err);
// })

//opendir

//openDir
fs.promises
  .opendir(fileName)
  .then((data) => {
    console.log("Promise Dir Open ", data);
  })
  .catch((err) => {
    console.log(err);
  });

//copoyfile

fs.promises
  .copyFile("Sync.txt", "promise.txt")
  .then(() => {
    console.log("Created a Copy");
  })
  .catch((err) => {
    console.log(err);
  });

//rename

fs.promises
  .rename("Syncronys", "Syncronys.txt")
  .then(() => {
    console.log("Rename changed");
  })
  .catch((err) => {
    console.log(err);
  });
