function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
       console.log(outerVariable);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();
innerFunc();

///

function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();
console.log(counter());
console.log(counter());
console.log(counter());
///


///
const  counter1=()=> {
    
    var counter = 0;

    setTimeout( function () {
        var innerCounter = 0;
        counter += 1;
        console.log("counter = " + counter);

        setTimeout( function () {
            counter += 1;
            innerCounter += 1;
            console.log();("counter = " + counter + ", innerCounter = " + innerCounter)
        }, 500);

    }, 1000);
};

counter1();