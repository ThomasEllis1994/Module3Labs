/*Question I*/
console.log("\nQuestion I\n");
function titleCase(sentence) {
    let sentenceArray = sentence.split(" ");
    // console.log(sentenceArray);

    for (let i = 0; i < sentenceArray.length; i++) {
        sentenceArray[i] =
            sentenceArray[i][0].toUpperCase() + sentenceArray[i].substring(1);
    }
    console.log(sentenceArray.join(" "));
}
titleCase("Lets get down to business, and defeat the huns!");
titleCase(
    "life before death, strength before weakness, journey before destination."
);

/* Question II
    Create a function truncate(str, max) that truncates a given string of text if its total
    length is greater than the max length. It should return either the truncated text, with an
    ellipsis (...) added to the end if it was too long, or the original text otherwise.
    b) Write another variant of the truncate function that uses a conditional operator.
*/
console.log("\n\nQuestion set II\n");
function truncate(str, max) {
    if (str.length > max) {
        return `${str.slice(0, max)}...`;
    } else {
        return str;
    }
}
function betterTruncate(str, max) {
    // console.log(str.length);
    return str.length > max ? `${str.slice(0, max)}...` : str;
}
console.log(truncate("This text will be truncated if it is too long", 25));
console.log(
    betterTruncate(
        "My name is Giblishine, I am here for my revenge and you will listen to my unending speach: I was 7 when your emperor came to my planet. He decidmaded my people and I swore revenge on the people of the Human Empire.",
        100
    )
);
/* Question set III Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

    a) Add 2 new values to the end
    b) Add 2 new values to the beginning
    c) Sort the values alphabetically
    d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
    middle of the animals array with newValue
    e) Write a function findMatchingAnimals(beginsWith) that returns a new array
    containing all the animals that begin with the beginsWith string. Try to make it work
    regardless of upper/lower case.*/
console.log("\n\nQuestion set III\n");
const animals = ["Tiger", "Giraffe"];
console.log(animals);
animals.push("Triceratops", "Gorilla");
console.log(animals);
animals.unshift("Penguin", "Puffin");
console.log(animals);
console.log(animals.sort());

function replaceMiddleAnimal(animal) {
    const middle = animals.length / 2;
    animals[middle] = animal;
    return animals;
    //if statements to figure out if it has a middle
}
replaceMiddleAnimal("T-rex");
console.log(animals);
function findMatching(array, hunting) {
    console.log(`Searching for matches for ${hunting} in the ${array} array.`);
    return array.filter((animal) =>
        animal.toLowerCase().includes(hunting.toLowerCase())
    ); //could also use a == to get upper and lower case if searching whole words. Does not work for partial searching
}

console.log(findMatching(animals, "Penguin"));
console.log(findMatching(animals, "t"));
console.log(findMatching(animals, "e"));

/*Question set IV
Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
    b) Create variants of the camelCase function that use different types of for loops, and
    c) with and without the conditional operator. */
console.log("\n\n Question set IV\n");

function camelCase(cssProp) {
    let propArray = cssProp.split("-");
    let newProp = propArray[0];
    let propFor2 = propArray[0];
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    for (e = 1; e < propArray.length; e++) {
        newProp += capitalize(propArray[e]);
    }
    return newProp;
}
function camelCase2(cssProp) {
    let propArray = cssProp.split("-");
    let newProp = propArray[0];
    let propFor2 = propArray[0];
    function capitalize(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    for (let word in propArray) {
        propArray.length !== 1 && propArray[word] !== propArray[0]
            ? (newProp += capitalize(propArray[word]))
            : newProp;
    }
    return newProp;
}

console.log(camelCase("I-wanna-be-the-very-Best-like-no-one-ever-was."));
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display
console.log(camelCase2("display"));
console.log(camelCase2("I-wanna-be-the-very-Best-like-no-one-ever-was."));

//____________________________________________________________________________________________

/*Question set V Decimal number operations in JavaScript can lead to unexpected results, as in the
following:
    let twentyCents = 0.20
    let tenCents = 0.10
    console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
    // 0.2 + 0.1 = 0.30000000000000004
We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?
    a) Explain why the above code returns the wrong answer
    b) Create a function currencyAddition(float1, float2) which safely adds the two
    decimal numbers float1 and float2 and returns the correct float result.
    c) Create a function currencyOperation(float1, float2, operation) which
    safely performs the given operation (either +, -, / or *) on the two numbers and returns

    the correct float result. https://developer.mozilla.org/en-
    US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

    d) (Extension) Extend the above function to include a fourth argument numDecimals
    which allows the operation to support different amounts of decimal places from 1 to 10.
    HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
    different values as well as the below:
        console.log(0.3 == currencyAddition(0.1, 0.2)) // true
        console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true*/
console.log("\n\nQuestion set V\n");

let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
//The toFixed Method returns a string form of the decimal at the point chosen as an argument
//This results in string concanation when adding the two together

// function currencyAddition(float1, float2, decimals) {
//     let fixedFloat1 = float1.toFixed(decimals);
//     let fixedFloat2 = float2.toFixed(decimals);
//     let new1 = parseFloat(fixedFloat1);
//     let new2 = parseFloat(fixedFloat2);
//     const addition = new1 + new2;
//     return addition;
// }
// console.log(currencyAddition(12.405, 12.506, 2));

// function currencyOperation(float1, float2, numDecimals, operation) {
//     let fixedFloat1 = float1.toFixed(numDecimals);
//     let fixedFloat2 = float2.toFixed(numDecimals);
//     let new1 = parseFloat(fixedFloat1);
//     let new2 = parseFloat(fixedFloat2);
//     console.log(operation);
//     switch (operation) {
//         case "+":
//             console.log(new1 + new2);
//             break;
//         case "-":
//             console.log(new1 - new2);
//             break;
//         case "/":
//             console.log(new1 / new2);
//             break;
//         case "*":
//             console.log(new1 * new2);
//             break;
//         default:
//             console.log("Thats not an mathmatical operator");
//     }
// }
function currencyAddition(float1, float2, decimals) {
    let new1 = Number(float1.toFixed(decimals));
    let new2 = Number(float2.toFixed(decimals));
    const addition = new1 + new2;
    return Number(addition.toFixed(decimals));
}
console.log(currencyAddition(12.405, 12.506, 2));

function currencyOperation(float1, float2, numDecimals, operation) {
    let new1 = Number(float1.toFixed(numDecimals));
    let new2 = Number(float2.toFixed(numDecimals));
    console.log(operation);
    let result = 0;
    switch (operation) {
        case "+":
            result = new1 + new2;
            break;

        case "-":
            result = new1 - new2;
            break;
        case "/":
            result = new1 / new2;
            break;
        case "*":
            result = new1 * new2;
            break;
        default:
            console.log("Thats not an mathmatical operator");
    }
    console.log(result);
    finalResult = Number(result.toFixed(numDecimals));
    console.log(finalResult);
    return finalResult;
}
currencyOperation(15.605, 18.9549, 2, "+");
console.log(0.3 == currencyAddition(0.1, 0.2, 2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, 2, "+")); // true

//____________________________________________________________________________________________

/*Question set VI  
Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
    Test with the following arrays and create another one of your own.
        const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
        const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
        console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
        console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]*/

console.log("\n\nQuestion set 6\n");

const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "red",
    "blue",
    "yellow",
];
const herbs = [
    "Basil",
    "Red Basil",
    "Thyme",
    "thyme",
    "Oregano",
    "Basil",
    "Rosemary",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

function unique(duplicatesArray) {
    let abc = duplicatesArray.sort();
    console.log(abc);

    for (i = 0; i <= abc.length; i++) {
        if (abc[i] === abc[i - 1]) {
            abc.splice(i, 1);
        }
    }
    return abc;
}
console.log(unique(colors)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(herbs));

//try newABC = String(abc[i]), might need a function/forEach type thing to work

//does not catch capitalization changes to same words.
//tried using == || didnt catch it
//could write if statements to determine if array[i] is string and then lowercase them.
//tried using includes('"')
//tried using if (typeof(abc[i]=== string)){} || didnt like abc[i][0].toLowerCase()
// function lowerCase(str) {
//     return str[0].toLowerCase() + str.slice(1);
// } Nope
// if (typeof (abc[i] === "string")) {
//     lowerCase(abc[i]);
// } Nope
//TypeError: Cannot read properties of undefined (reading 'toLowerCase')

// if (typeof (abc[i] === "string"))
//     for (let i = 0; i < abc.length; i++) {
//         abc[i] = abc[i][0].toLowerCase() + abc[i].substring(1);
//     }/* nope

//____________________________________________________________________________________________

/*Question set VII 
Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.
        const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
        { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
        ];
    a) Write a function getBookTitle(bookId) that uses the find function to return the
    title of the book object with the matching id.
    b) Write a function getOldBooks() that uses the filter function to return all book
    objects written before 1950.
    c) Write a function addGenre() that uses the map function to add a new genre property
    to all of the above books, with the value ‘classic’.
    d) (Extension) Write a function getTitles(authorInitial) that uses map and
    filter together to return an array of book titles for books written by authors whose
    names start with authorInitial.
    e) (Extension) Write a function latestBook() that uses find and forEach to get the
    book with the most recent publication date.

*/

console.log("\n\nQuestion set VII\n");

const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
    },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
    },
];

function bookTitle(bookID) {
    return books.find(({ id }) => id === bookID).title;
}
function getBookTitle2(bookID) {
    const book = books.find((book) => book.id === bookID).title;
    return book;
}
//I had this working and decided to test things and couldnt figure if out again.

console.log(bookTitle(2));

console.log(getBookTitle2(5));
function getOldBooks(published) {
    return books.filter(({ year }) => year < published);
}
console.log(getOldBooks(1950));

function addGenre(genre) {
    return books.map((book) => ({ ...book, genre: genre }));
}
console.log(addGenre("classic"));

function getTitles(authorInitial) {
    const newInitial = authorInitial.toLowerCase();
    const bookList = books.filter(
        (book) => book.author[0].toLocaleLowerCase() === newInitial
    );
    const titles = bookList.map((book) => book.title);
    return titles;
}
console.log(getTitles("a"));

function latestBook() {
    let latestRelease = 0;
    books.forEach((book) => {
        if (book.year > latestRelease) {
            latestRelease = book.year;
            // console.log(latestRelease);
        }
    });

    return books.find((book) => book.year === latestRelease).title;
}
console.log(latestBook());

/*Question set VIII 
    8. The following code creates a new Map object for storing names beginning with A, B, or C
    with their phone numbers.
    const cells = new Map() //an empty map to begin with
    phoneBookABC.set('Annabelle', '0412312343')
    phoneBookABC.set('Barry', '0433221117')
    phoneBookABC.set('Caroline', '0455221182')
    a) Create a new phoneBookDEF Map to store names beginning with D, E or F
    b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
    c) Update the phone number for Caroline
    d) Write a function printPhoneBook(contacts) that prints the names and phone
    numbers in the given Map
    e) Combine the contents of the two individual Maps into a single phoneBook Map
    f) Print out the full list of names in the combined phone book
*/
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");
console.log(phoneBookABC);

const phoneBookDEF = new Map();
// PhonebookDEF.set(
//     { Danielle: 8043601000 },
//     { Ellis: 8045167157 },
//     { Ferro: 1046428677 }
// );
cellsArr = [
    { name: "Danielle", num: "8043601000" },
    { name: "Ellis", num: "8045167157" },
    { name: "Ferro", num: "1046428677" },
];
cellsArr.forEach((person) => {
    phoneBookDEF.set(person.name, person.num);
});
// console.log(phoneBookDEF);

phoneBookABC.set("Caroline", "1234657981");
console.log(phoneBookABC);

function printPhoneBook(contacts) {
    for (let [name, number] of contacts) {
        console.log(`${name}: ${number}`);
    }
}
printPhoneBook(phoneBookABC);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
console.log(phoneBook);

/*Question set IX
Given the below salaries object, perform the following tasks.
        let salaries = {
        "Timothy" : 35000,
        "David" : 25000,
        "Mary" : 55000,
        "Christina" : 75000,
        "James" : 43000
        };
    a) Write a function sumSalaries(salaries) that calculates and returns the total of all
    salaries
    b) Write a function topEarner(salaries) that calculates and returns the name of the
    person earning the highest salary
 */
console.log("\n\nQuestion set IX");
let salaries = {
    Timothy: 35000,
    David: 25000,
    Mary: 55000,
    Christina: 75000,
    James: 43000,
};

function sumSalaries(salaries) {
    let total = 0;
    for (let salary in salaries) {
        total += salaries[salary];
    }
    return console.log(total);
}

// function getBookTitle2(bookID) {
//     const book = books.find((book) => book.id === bookID).title;
//     return book;
sumSalaries(salaries);

function topEarner(moneyMade) {
    let top = 0;
    let bling = "";
    for (sal in moneyMade) {
        if (top < moneyMade[sal]) {
            top = moneyMade[sal];
            bling = sal;
        }
    }
    return console.log(`${bling} earns the most with $${top}`);
}
topEarner(salaries);

/*Question set X 
10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:
        const today = new Date();
        console.log('Current time is ' + today.toLocaleTimeString())
        console.log(today.getHours() + ' hours have passed so far today')
    a) Print the total number of minutes that have passed so far today
    b) Print the total number of seconds that have passed so far today
    c) Calculate and print your age as: 'I am x years, y months and z days old'
    d) Write a function daysInBetween(date1, date2) which calculates and returns the
    amount of days in between the two given dates.
*/
console.log("\n\nQuestion set X\n");
const today = new Date();

console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

let totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(`Today has been ${totalMinutes} minutes long so far.`);

let totalSeconds = totalMinutes * 60 + today.getSeconds();
console.log(`${totalSeconds} seconds have passed today`);

const birthDay = new Date("1994-11-23");

// console.log(
//     `I am ${
//         today.getFullYear() - birthDay.getFullYear()
//     } years, ${birthDay.getMonth()} months, ${birthDay.getDate()} days old`
// ); //need to check if bday has passed this year and subtract months and days if it has not
//figured out a funciton
function bDay(date1, date2) {
    const day1 = new Date(date1);
    const day2 = new Date(date2);

    const differenceDays =
        (day1.getTime() - day2.getTime()) / (1000 * 60 * 60 * 24);
    years = Math.abs(Math.floor(differenceDays / 365));
    days = Math.floor(differenceDays % 365);

    return console.log(`I am ${years} years and ${days} days old`);
}
function daysBetween(date1, date2) {
    const day1 = new Date(date1);
    const day2 = new Date(date2);
    const difference =
        (day1.getTime() - day2.getTime()) / (1000 * 60 * 60 * 24);
    return console.log(
        `There have been ${Math.abs(
            Math.round(difference)
        )} days between the two dates`
    );
    // const years = day1.getFullYear() - day2.getFullYear() - 1;
    // console.log(years);
    // const days = day1.getDate() - day2.getDate();
    // console.log(days);
    // return Math.abs(years * 365 + days);
} //going to be off on days. would need a for loop and if statement to iterate through the months not in
//either date to add those days. would need month array then if (month != month in date1/2)
bDay("2024-5-17", "1994-11-23");
daysBetween("2024-5-17", "1994-11-23");
