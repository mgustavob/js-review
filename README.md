# js-review
review JS

## Examples of Data Types
```javascript
let name = "Sam";
let age = 7;
let samIsCool = true;
const samFriends = ['Lulu', 'Mason', 'Gigi', 'Angel'];
const myDog = {
    breed: 'Yorkshire Terrier',
    colors: ['Caramel', 'White', 'Tan'],
    weight: '5lb',
    placesVisited: {
        inUsa = ['New York', 'Missouri', 'Main', 'Vermont'],
        inCanada =['Toronto', 'Quebec']
    }

}

```

## Ways to make a function
```javascript
function addNumbers(num1, num2) {
    return num1 + num2;
};

const multiplyNumbers =function (num1, num2) {
    return num1 * num2;
};

const subtractNumbers = (num1, num2) => {
    return num1 - num2;
};

```

DOM Manipulation
``` JavaScript
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

```
