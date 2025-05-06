let total = 0;

for (let i = 1; i <= 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10; // random 2-digit number
    console.log(`Random ${i}: ${num}`);
    total += num;
}

let average = total / 5;
console.log("Sum:", total);
console.log("Average:", average.toFixed(2));
