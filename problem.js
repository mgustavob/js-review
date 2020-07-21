function isInside(array, ele) {
    if (array.includes(ele)) {
        return true;
    } else {
        return false;
    }

}

console.log(isInside(['taylor', 'rome', 'adam'], 'rome'));

// function reverseStr(str) {
//     const revStri = '';
//     for(let i = 0; i < str.length; i++) {
//         let numb = str.pop();
//         revStri.push();
//     }
//     return revStri
// }

function reverseStr(str) {
    return str.split("").reverse().join("");
}

console.log(reverseStr('bootcamp'));

function luckySevens(max) {
    const array = [];
    let numb = Math.floor(max/7);
    for (let i = 0; i < numb; i++) {
        numb2 = (i + 1) * 7;
        array.push(numb2);

    }
    return array;
}

console.log(luckySevens(25));

function copyMachine(element, num) {
    const result = [];
    for (let i = 0; i < num; i++) {
        result.push(element);
    }
    return result;
}

console.log(copyMachine('bread', 4));

function everyOtherWord(sentence) {
    const array1 = sentence.split(" ");
    const result = [];

    for (let i = 0; i < array1.length; i+=2) {
        result.push(array1[i]);
    }
    return result;
}
console.log(everyOtherWord('hello how are you doing on this lovely day?'));


function wordYeller(sentence) {
    //setting a result string
    const result = [];
    //splits sentences in a array1
    const array1 = sentence.split(" ");
    // second array to compare
    const array2 = ['.', ',', '!', '?', ';', ':'];
    //loops last item from each index
    for (let i = 0; i < array1.length; i++) {
        // finds the last item in the index
        var numb1 = array1[i].length;
        var numb2 = numb1 - 1;
        const array3 = array1[i];
        //compares it to the items on array2

        if (array2.includes(array3[numb2])) {

            result.push(array3);

        } else {
            //result = array3+"!";
            var str1 = array3+ "!";
            result.push(str1);
        }

    }

    return result.join(' ')

}


console.log(wordYeller("Go to the store and grab the following: milk, bread, run, and cake"));



function arraySubstring(words, str) {
    const result = [];
    for( let i = 0; i < words.length; i++) {
        if (words[i].includes(str)) {
            result.push(true);
        } else {
            result.push(false);
        }


    }
    return result;

}

 console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"));


 function evenCaps(sentence) {
    const result = [];
    for ( let i = 0; i < sentence.length; i++){
        if (i % 2 == 0){
            result.push(sentence[i].toUpperCase());
        } else {
            result.push(sentence[i]);
        }
    }
    return result.join('');
}
evenCaps("Tom got a small piece of pie")
