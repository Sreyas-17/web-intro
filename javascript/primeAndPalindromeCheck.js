// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(n) {
    let str = n.toString();
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return Number(reversedStr);
}

// Function to check if number and its palindrome are both prime
function checkPrimeAndPalindrome(n) {
    if (isPrime(n)) {
        let palindrome = getPalindrome(n);
        if (isPrime(palindrome)) {
            console.log(n + " is prime and its palindrome " + palindrome + " is also prime.");
        } else {
            console.log(n + " is prime but its palindrome " + palindrome + " is not prime.");
        }
    } else {
        console.log(n + " is not a prime number.");
    }
}

checkPrimeAndPalindrome(13);
checkPrimeAndPalindrome(23);
