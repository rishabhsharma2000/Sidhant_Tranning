//setTimeout
//clearTimeout
//setImmediate
//clearImmediate
//setInterval
//clearInterval


//setTimeout

printStatement = () => {
  console.log("Start printStatement function");
  setTimeout(() => {
    console.log("First Time Out");
  }, 2000);
  setTimeout(() => {
    console.log("Second Time Out");
  }, 3000);
  setTimeout(() => {
    console.log("Third Time Out");
  }, 4000);
};

printStatement();

///eg:2

for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(`Message ${i}`);
  }, i * 1000);
}

//setTimeout

console.log("Before the setTimeout call");
const timerID = setTimeout(() => {
  console.log("Hello, World!");
}, 1000);
console.log("After the setTimeout call");
timerID;
clearTimeout(timerID);

//setInterval

let count = 0;

const intervalId = setInterval(() => {
  console.log(`Count: ${count}`);
  count++;

  if (count > 10) {
    clearInterval(intervalId);
    console.log("Interval stopped.");
  }
}, 1000);

//setImmediate
function Operation(callback) {
  const immediateId = setImmediate(() => {
    callback();
  });

  setTimeout(() => {
    clearImmediate(immediateId);
    console.log("The scheduled immediate function has been canceled");
  }, 500);
}

const callbackFunction = () => {
  console.log("This callback function will be executed ");
};

Operation(callbackFunction);
