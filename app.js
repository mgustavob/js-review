let name = 'Martin Briceno';
let age = 42;
let isCool = true;
const friends = ['Sam','Nea', 'Nataliia', 'Rome'];

const tesla = {
    industry: 'Electric Cars',
    CEO: 'Elon Musk',
    yearFound: 2003,
    foundingMembers: ['Elon Musk', 'JB Straubel', 'Martin Eberard'],
    stockTicker: 'TSLA',
    vehicles: {
        vehicleOne: 'Modes S',
        vehicleTwo: 'Model X',
        vehicleThree: 'Model 3'
    },
    print: function() {
            console.log('Hello, this works with objects');
            console.log("The CEO of Tesla is " +this.CEO);
    }
}

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);
console.log(tesla.vehicles.vehicleThree);
console.log(tesla['vehicles']['vehicleThree']);

tesla.stockPrice = 1643.00 ;
console.log(tesla);

tesla.print();

// let name = "Sam";
// let age = 7;
// let samIsCool = true;
// const samFriends = ['Lulu', 'Mason', 'Gigi', 'Angel'];
// const myDog = {
//     breed: 'Yorkshire Terrier',
//     colors: ['Caramel', 'White', 'Tan'],
//     weight: '5lb',
//     placesVisited: {
//         inUsa = ['New York', 'Missouri', 'Main', 'Vermont'],
//         inCanada =['Toronto', 'Quebec']
//     },
//     print: function() {
//         console.log("I Sam,my dads favorite dog and I am a: " +this.breed);
//     }
// }

// myDog.print();

function printFriends(array) {
    array.forEach(friend => {
        console.log(friend);
    })
}

printFriends(friends);
printFriends(tesla.foundingMembers);

function addNumbers(num1, num2) {
    return num1 + num2;
};

const multiplyNumbers =function (num1, num2) {
    return num1 * num2;
};

const subtractNumbers = (num1, num2) => {
    return num1 - num2;
};

//DOM
const container = document.querySelector('.container');
console.log(container);

const headerTwo = document.createElement('h2');
headerTwo.textContent = 'My First JS review';
console.log(headerTwo);

container.appendChild(headerTwo);


// add a class
headerTwo.classList.add('subtitle', 'header-two');
//headerTwo.setAttribute('class', 'header-two');
headerTwo.classList.remove('headerTwo');

headerTwo.addEventListener('click', function() {
    headerTwo.textContent = 'Martin';
});

// make another element
const haderThree = document.createElement('h2');
haderThree.textContent = 'Friends';

container.appendChild(haderThree);

console.log(haderThree);

const list = document.createElement('ul');

// iterate through my friends array
for (let i = 0; i < friends.length; i++) {
    // reference each friend
    let eachFriend = friends[i];
    console.log(eachFriend)
    // create a li
    const listItem = document.createElement('li');
    // add textContent to li
    listItem.textContent = eachFriend;
    console.log(listItem);
    //append that to a ul (unorder list)
    list.appendChild(listItem);

}
console.log(list);


haderThree.addEventListener('click', function() {
    container.appendChild(list);
 });


 // problem solving
//  - [ ] Do I understand what the prompt is asking?
//  - [ ] Am I able to break the problem down?
//  - [ ] What is my strategy for solving the problem?
//  - [ ] Do I understand what my code is doing?
//  - [ ] Am I able to foresee any edge cases?
//  - [ ] Am I able to track the order of the code that is being executed?
//  - [ ] Am I able to track the values of the variables?
//  - [ ] Am I able to walk through my code line by line with an example?
//  - [ ] Do I have a working solution?


// fizzBuzz
// write a function that does the following
    //takes ann array
    //check each number in the array
    // if number is divisable by 5 and 3  === FizzBuzz
    // if number is divisible by 3 === Fizz
    // if number is divisable by 5 === Buzz
// return an array

//example    [3, 5, 15, 20, 9, 7]
// ['Fizz', 'Buzz', 'FizzBuzz', 'Buzz', 'Fizz', 7];

function fizzBuzz (array1) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
        let num = array1[i];
        console.log(num);
        if (num % 5 === 0 && num % 3 === 0) {
            result.push('FizzBuzz');
        } else if (num % 3 === 0) {
            result.push('Fizz');
        } else if (num % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(num);
        }


    }
    return result;

};

console.log(fizzBuzz([3, 5, 15, 20, 9, 7]));
// setup an empty array
// iterate through array that going to be pass in
// check the remainder of each element
// push the result of each element inside the result array
// push that result array

