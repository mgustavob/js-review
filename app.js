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
