/* Question I
1. "" + 1 + 0 = 10
2. "" - 1 + 0 = -1
3. true + false = 1
4. !true = false
6. 6 / "3" = 2
7. "2" * "3" = 6
8. 4 + 5 + "px" = 45px (order of operations mistake, answer is 9px)
9. "$" + 4 + 5 = $45
10. "4" - 2 = 2
11. "4px" - 2 = NaN
12. " -9 " + 5 =  -9 5
14. " -9 " - 5 = -14
15. null + 1 = 1
16. undefined + 1 = NaN
17. undefined == null = True
18. undefined === null = false
19. " \t \n" - 2 = Nan (Wrong, its -2. \t creates a tab space. \n creates a line break. This means the string is empty, converting it to 0 when subtraction is used.)
*/
console.log("Question set I\n");
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(!true);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log("$" + 4 + 5);
console.log("4" - 2);
console.log("4px" - 2);
console.log(" -9 " + 5);
console.log(" -9 " - 5);
console.log(null + 1);
console.log(undefined + 1);
console.log(undefined == null);
console.log(undefined === null);
console.log(" \t \n" - 2);
console.log("Hello\tWorld");
console.log("Hello\nWorld");

/*Part II
1.	let three = "3"
2.	let four = "4"
3.	let thirty = "30"
Values
4.	let addition = three + four = 34
    Returns 34 but should return 7. Addition will conconate two strings resulting in 34. 
    Convert to numbers before the process and it will fix itself.
5.	let multiplication = three * four = 12
6.	let division = three / four = .75
7.	let subtraction = three - four = -1
8.	let lessThan1 = three < four = true
9.	let lessThan2 = thirty < four = false
    Returns True but is False. Strings compare first value, 4 being greater than 3 makes this True. 
    Convert to numbers to fix.
*/
console.log("\n\nQuestion set II\n");
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

/* 
1.	if (0) console.log('#1 zero is true')|| No log
2.	if ("0") console.log('#2 zero is true')|| Will Log
3.	if (null) console.log('null is true')|| No log
4.	if (-1) console.log('negative is true')|| Will log
5.	if (1) console.log('positive is true')|| Will Log
*/
console.log("\n\nQuestion set III\n");
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true");
if (null) console.log("null is true");
if (-1) console.log("negative is true");
if (1) console.log("positive is true");

/*Question set IV
    let a = 2, b = 3;
    let result = `${a} + ${b} is `;
    if (a + b < 10) {
        result += 'less than 10';
    } else {
        result += 'greater than 10';
}

*/
console.log("\n\nQuestion set IV\n");
let a = 2,
    b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
    result += "less than 10";
} else {
    result += "greater than 10";
}

const simpleResult =
    a + b < 10
        ? `${a} + ${b} is less than 10`
        : `${a} + ${b} is greater than 10`;
console.log(simpleResult);

const comparison = (a, b) => {
    return a + b < 10
        ? `${a} + ${b} is less than 10`
        : `${a} + ${b} is greater than 10`;
};
console.log(comparison(5, 7));

/*Quetion set V
 5. Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same.

function getGreeting(name) {
return 'Hello ' + name + '!';
}
*/
console.log("\n\nQuestion set V\n");
const getGreeting = function (name) {
    return `Hello ${name}!`;
};
const greeting2 = (name) => {
    return `Hello ${name}!`;
};
console.log(getGreeting("Thomas"));
console.log(greeting2("Tommy"));

/*Question set VI
6. a) Complete the inigo object by adding a lastName property and including it in the
    greeting.
    b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead
    prints his famous catch phrase to the console. HINT: see
    https://www.imdb.com/title/tt0093779/characters/nm0001597.
    c) Update getCatchPhrase to use arrow function syntax and a conditional operator. 
*/

console.log("\n\nQuestion set VI\n");
const westley = {
    name: "Westley",
    numFingers: 5,
};
const rugen = {
    name: "Count Rugen",
    numFingers: 6,
};
const inigo = {
    firstName: "Inigo",
    lastName: "Montoya",
    numFingers: 6,
    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => {
        return person.numFingers === 6
            ? "You killed my father. Prepare to die."
            : "Nice to meet you.";
    },
};
inigo.greeting(westley);
inigo.greeting(rugen);
/* Question set VII
7. The following object represents a basketball game and keeps track of the score as the
game progresses.
    a) Modify each of the methods so that they can be ‘chained’ together and the last line of
    the example code works
    b) Add a new method to print the full time final score
    c) Add a new object property to keep track of the number of fouls and a method to
    increment it, similar but separate to the score. Include the foul count in the half time and
    full time console messages
    d) Test your object by chaining all the method calls together in different combinations.

*/
console.log("\n\nQuestion set VII\n");
const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    foul() {
        this.fouls++;
        return this;
    },
    halfTime() {
        console.log(
            "Halftime score is " +
                this.score +
                ` with a total of ${this.fouls} fouls`
        );
        return this;
    },
    finalScore() {
        console.log(
            `Final Score is ${this.score} with a total of ${this.fouls} fouls.`
        );
        return this;
    },
};
//modify each of the above object methods to enable function chaining as below:
basketballGame
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .halfTime()
    .finalScore();
basketballGame
    .basket()
    .threePointer()
    .threePointer()
    .foul()
    .halfTime()
    .foul()
    .foul()
    .foul()
    .freeThrow()
    .basket()
    .finalScore();

/* Question set VIII

8. The object below represents a single city.
    a) Write a function that takes an object as an argument and uses a for...in loop to access
    and print to the console each of those object properties and their values. Test it using
    the sydney object below.
    b) Create a new object for a different city with different properties and call your function
    again with the new object.

*/
console.log("\n\nQuestion set VIII\n");
const sydney = {
    name: "Sydney",
    population: 5_121_000,
    state: "NSW",
    founded: "26 January 1788",
    timezone: "Australia/Sydney",
};
const candyland = {
    name: "Candyland",
    population: 8_000_000_000,
    state: "Skittles",
    founded: "The day of the Sweet Tooth",
    timezone: "Just before bed",
};

const cityInfo = (city) => {
    for (info in city) {
        console.log(`${info}: ${city[info]}`);
    }
};
cityInfo(sydney);
cityInfo(candyland);

/*Question set IX 
9. Use the following variables to understand how JavaScript stores objects by reference.
    a) Create a new moreSports variable equal to teamSports and add some new sport
    values to it (using push and unshift)
    b) Create a new dog2 variable equal to dog1 and give it a new value
    c) Create a new cat2 variable equal to cat1 and change its name property
    d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
    changed? Why?
    e) Change the way the moreSports and cat2 variables are created to ensure the
    originals remain independent
*/
console.log("\n\nQuestion set IX\n");
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };
let moreSports = teamSports.slice();
moreSports.push("WaterPolo");
moreSports.unshift("Sharks and Menos");
let dog2 = dog1;
let cat2 = { ...cat1 };
cat2.name = "Theseus";
dog2 = "Quinn";
console.log(moreSports);
console.log(teamSports);
console.log(dog1);
console.log(cat1);
/*The values of the object and arrays changed because they were
the same thing. Need to create a shallow copy using .slice()
and the spread operator to fix this 
*/

/*Question Set X 
The following constructor function creates a new Person object with the given name and
age values.
    a) Create a new person using the constructor function and store it in a variable
    b) Create a second person using different name and age values and store it in a separate
    variable
    c) Print out the properties of each person object to the console
    d) Rewrite the constructor function as a class called PersonClass and use it to create a
    third person using different name and age values. Print it to the console as well.
    e) Add a canDrive method to both the constructor function and the class that returns true
    if the person is old enough to drive.*/

console.log("\n\n Question set X\n");
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = () => {
        return Boolean(age >= 16);
    };
    this.license = this.canDrive();
}
const Thomas = new Person("Thomas", 29);
const Madison = new Person("Madison", 6);
console.log(Thomas);
console.log(Madison);

class totallyHuman {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
        this.license = this.canDrive(this.age);
    }
    canDrive() {
        return Boolean(this.age >= 16);
    }
}
const synthShawn = new totallyHuman("synthShawn", 2);
const Glorbinshine = new totallyHuman("Glorbinshine", 8011);
//look into how to write checks for strings (synth inclusion) and age (8011) to check if this.human is actually true.

console.log(synthShawn);
console.log(Glorbinshine);
