//Literal Form

var obj1 = {
    "Rishabh":8937022875,
    "Mohit":3265986532,
    "Ritika":784521365,
    "Kushagra":7845659878,
  };

  console.log(obj1.Kushagra);
  console.log(obj1);


  //Object Constructor Function

  function obj2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

const fn = new obj2("Rishabh","Kauhsik",21,"Blck");
console.log(fn);
  


//object with function

const obj3 ={
    Company:"Credex",
    Address:"Noida 62",
    myName:"Ritika",
    Contact:9865326598,
    dispalyInfo:function(){
        console.log(this.Company + this.Address + this.myName + this.Contact);
    }
 
}

console.log(obj3.dispalyInfo());