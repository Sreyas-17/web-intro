let numbers = [];

for (let i = 1; i <= 5; i++) {
    let num = Math.floor(Math.random() * 900) + 100; 
    numbers.push(num);
}

console.log("Random 3-digit numbers:", numbers);

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    } else if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Minimum value:", min);
console.log("Maximum value:", max);
