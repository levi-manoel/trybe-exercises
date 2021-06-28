function reverseWord(word){
    let intoArray = word.split("");
    let reverseArray = intoArray.reverse();
    let intoString = reverseArray.join("");
    return intoString;
}

function checkPalindrome(str){
    let reverse = reverseWord(str);
    if(str === reverse){
        return true;
    } else {
        return false;
    }
}

let test = checkPalindrome('arara');
console.log(test);

let testB = checkPalindrome('desenvolvimento');
console.log(testB);
