function isPalindrome(num) {
    let str = num.toString();

    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    let reversedNum = Number(reversedStr);

    return num === reversedNum;
}

let number1 = 121;
let number2 = 131;

if (isPalindrome(number1) && isPalindrome(number2)) {
    console.log("Both numbers are palindromes.");
} else {
    console.log("Numbers are not palindromes.");
}
