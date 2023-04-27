var promise = new Promise(function (resolve, reject) {
  const x = "Rishabh";
  const y = "kaushik";
  if (x != y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are a human");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });

// Second Example

const callAsyncFunction = (status) => {
  return new Promise((resolve, reject) => {
    console.log("Please wait it's in process ");
    setTimeout(() => {
      if (status) {
        resolve("Succesfully Done");
      } else {
        reject("Something Wrong");
      }
    });
  });
};

callAsyncFunction(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

  //calculation

  const calculation =(a,b)=>{
    return new Promise((resolve,reject)=>{
      console.log("please wait....");
      let v = a/b;
      setTimeout(() => {
       if(v){
        resolve(`your answer is ${v}`);
       } 
       else{
        reject("failed to calculate");
       }
      }, 2000);
    })
  }

  calculation(2,3).then((result)=>{
console.log(result);
  }).catch((err)=>{
    console.log(err);
  })

  //Promise Channing

 const data = (value)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(value > 2){
        resolve(value)
      }
      else{
        reject(`${value} is not greater than 2`);
      }
    },2000);
  })
 }

 data(4).then((item)=>{
 
 return item*2;
 }).then((item)=>{
  console.log("First Square" ,item);
  return item*2;
 }).then((item)=>{
  console.log("Second Square" ,item);
 })
 .catch((err)=>{
  console.log(err);
 })


 ///Promise bu ALL function
let data2 = Promise.race([
  new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("Step 1 2 second wala");
    }, 2000);
  }),
  new Promise((resolve,reject)=>{
    setTimeout(() => {
      reject("Step 2 3 second wala")
    }, 3000);
  }),
  new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("Step 3 5 second wala");
    }, 5000);
  }),
]);

data2.then((result)=>{
console.log(result);
}).catch((err)=>{
  console.log(err);
})