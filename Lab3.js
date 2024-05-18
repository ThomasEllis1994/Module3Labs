/*Question set I
1. makeCounter below is a decorator function which creates and returns a function that
increments a counter.
    a) Create a second counter counter2 using the makeCounter function and test to see if
    it remains independent to counter1
    b) Modify makeCounter so that it takes an argument startFrom specifying where the
    counter starts from (instead of always starting from 0)
    c) Modify makeCounter to take another argument incrementBy, which specifies how
    much each call to counter() should increase the counter value by.

 */
console.log("\n\nQuestion set I\n");
//1.A-C
function makeCounter(start, incrementBy) {
    let currentCount = start;
    return function () {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}
let counter1 = makeCounter(3, 3);
let counter2 = makeCounter(2, 16);
counter2();
counter2();
counter1(); // 1
counter1(); // 2

/*Question set II 
    2. The following delayMsg function is intended to be used to delay printing a message until
    some time has passed.
        a) What order will the four tests below print in? Why?
        b) Rewrite delayMsg as an arrow function
        c) Add a fifth test which uses a large delay time (greater than 10 seconds)
        d) Use clearTimeout to prevent the fifth test from printing at all.
    */

//A.) The messages will Print in order 3,2,1. This is because setTimeout does not pause the run of the program, it only delays that lines execution.
//Delay 0ms< Delay 20ms <Delay 100ms
//B.)
console.log("\n\nQuestion set II\n");
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

//C-D.)
const dontPrint = setTimeout(delayMsg, 11000, "#5 Delayed by 11000ms");
clearTimeout(dontPrint);

/*Question set III 
    3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
    similar requests until there's a brief pause, then only executing the most recent of those
    requests. See https://www.techtarget.com/whatis/definition/debouncing
    It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
    requests being initiated if a user clicks repeatedly on a button.
    Using the following code to test and start with:
        a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
        suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
        pause, the most recent call to func should be executed and any others ignored.
        b) Extend the debounce decorator function to take a second argument ms, which defines the
        length of the period of inactivity instead of hardcoding to 1000ms
        c) Extend debounce to allow the original debounced function printMe to take an argument
        msg which is included in the console.log statement.
    */
console.log("\n\nQuestion set III\n");

function printMe(msg) {
    console.log("printing debounced message: " + msg);
}
function debounce(func, ms) {
    let delay;
    return function (...arguments) {
        if (delay) {
            clearTimeout(delay);
        }
        delay = setTimeout(() => {
            func(...arguments);
        }, ms);
    };
}
printMe = debounce(printMe, 1000); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls
setTimeout(printMe, 100, "message 1");
setTimeout(printMe, 200, "message 2");
setTimeout(printMe, 300, "message 3");

/* Question set IV
    The Fibonacci sequence of numbers is a famous pattern where the next number in the
    sequence is the sum of the previous 2.
    e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
        a) Write a function printFibonacci() using setInterval that outputs a number in
        the Fibonacci sequence every second.
        b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
        calls to do the same thing
        c) Extend one of the above functions to accept
    */

//let tickId = setInterval( () => console.log('tick'), 2000 ) // 'tick' every 2s
//setTimeout( () => clearInterval(tickId), 10*1000 ) // after 10s ticking stops
console.log("\n\n Question set IV\n");

function printFibonacci(limit) {
    let count = 0;
    let [prev, curr] = [0, 1];
    let sequence = setInterval(() => {
        console.log(`[Interval] ${curr}`);
        [prev, curr] = [curr, prev + curr];
        if (count > limit) {
            clearInterval(sequence);
        }
    }, 1000);
    setTimeout(() => clearInterval(sequence), 10000);
    return sequence;
}

printFibonacci(10);

function printFibonacciTimeouts(delay, limit) {
    let counter = 1;
    let [prev, curr] = [0, 1];
    setTimeout(
        function iterate() {
            if (counter > limit) {
                return;
            }
            console.log(
                `Timeout: repeated ${counter} out of ${limit} times. Current Iteration of Fibonacci: ${curr}`
            );
            [prev, curr] = [curr, prev + curr];
            counter++;
            setTimeout(iterate, 1000);
        },

        delay,
        counter
    );
}

printFibonacciTimeouts(1000, 20);

/* Question set V 
    5. The following car object has several properties and a method which uses them to print a
    description. When calling the function normally this works as expected, but using it from
    within setTimeout fails. Why?
    
        a) Fix the setTimeout call by wrapping the call to car.description() inside a
        function
        b) Change the year for the car by creating a clone of the original and overriding it
        c) Does the delayed description() call use the original values or the new values from
        b)? Why?
        d) Use bind to fix the description method so that it can be called from within
        setTimeout without a wrapper function
        e) Change another property of the car by creating a clone and overriding it, and test that
        setTimeout still uses the bound value from d)*/
console.log("\n\nQuestion set V\n");

let car = {
    make: "Porsche",
    model: "911",
    year: 1964,
    description() {
        console.log(
            `This car is a ${this.make} ${this.model} from ${this.year}`
        );
    },
};
car.description(); //works
setTimeout(car.description, 200); //fails

/*
    
    
    
    
    
                                                                */
//
//
//
//
/*Question set 9*/
console.log("\n\nQuestion set IX\n");
function randomDelay() {
    const delay = Math.ceil(Math.random() * 20) * 1000;
    return new Promise((resolve, reject) =>
        //delay % 2 === 0 ? setTimeout(resolve, delay) : setTimeout(reject, delay)
        setTimeout(delay % 2 === 0 ? resolve : reject, delay, delay)
    );
}

randomDelay()
    .then((delay) => console.log(`There seems to be a delay of ${delay}`))
    .catch(() => console.log("failed Delay"));
