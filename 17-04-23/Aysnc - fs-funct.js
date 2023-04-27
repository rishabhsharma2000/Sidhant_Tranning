const fs = require("fs");

//ReadFile Function
fs.readFile("Text.txt", (err, data) => {
  if (err) {
    console.log("Can'tFound the File");
  }
  console.log("File Read Successfully", data.toString());
});

const fileName = "Createwritefile.txt";
const textData =
  "Hey Rishabh This is your first Write File Function File Example";
const encoding = "utf-8";

//WriteFile Function
fs.writeFile(fileName, textData, encoding, (err) => {
  if (err) {
    console.log("When We Write", err);
  }
  console.log("File Write Successfuly");
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.log("When We Read", err);
    }
    console.log("Your File is :", data.toString());
  });
});

//Append Data in Existing File
const appendData =
  "\n For Last 6 months you working as a System Traniee in Our Organization";
fs.appendFile(fileName, appendData, encoding, (err) => {
  if (err) {
    console.log("Append File :", err);
  }
  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.log("Read Append File", err);
    }
    console.log("Append Data :", data.toString());
  });
});

//exist

fs.exists(fileName, (exist) => {
  console.log(exist ? "FOund" : "Not Found");
});

//mkdir

fs.mkdir("Rishabh/ritika", { recursive: true }, (err) => {
  console.log(
    err
      ? console.log("Not Created Directory")
      : console.log("Created Directory")
  );
});

// //rename

// fs.rename("Text.txt","Text.js",(err)=>{
//     err?console.log(err):fs.readdir(__dirname,(err,data)=>{
//         err?console.log(err):console.log(data.forEach(file=>{
//             console.log("Rename",file);
//         }));
//     })
// })

//delete directory
fs.rmdir(
  "./Rishabh",
  {
    recursive: false,
    force: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Non Recursive: Directories Deleted!");
    }
  }
);

//open Directory

fs.open("Text.txt", "w+", (err, f) => {
  err ? console.log(err) : console.log(f);
  console.log("File opened!!");
});

//read directory

fs.readdir(__dirname, (err, files) => {
  err
    ? console.log(err)
    : files.forEach((file) => {
        console.log(file);
      });
});

