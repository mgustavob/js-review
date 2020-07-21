# Java Scipts Functions
This is part of a General Assembly Project that uses Functions in different methods

## Steps:
1. Create a HTML, CSS and JavaScript file;
2. Read the problems and solve them using JavaScript methods

## Method
most of the problems were easy resolve by using simple for() loops splitting the strings into array, edit them and put them back together
```javascript
function evenCaps(sentence) {
    const result = [];
    for ( let i = 0; i < sentence.length; i++){
        if (i % 2 == 0){
            arrayOne.push(sentence[i].toUpperCase());
        } else {
            arrayOne.push(sentence[i]);
        }
    }
    return result.join('');
}
```
