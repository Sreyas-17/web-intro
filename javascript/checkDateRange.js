// Read command line arguments
const day = parseInt(process.argv[2]);
const month = process.argv[3].toLowerCase();

let isValid = false;

// Check if the given date is between March 20 and June 20
if (
    (month === "march" && day >= 20 && day <= 31) ||
    (month === "april" && day >= 1 && day <= 30) ||
    (month === "may" && day >= 1 && day <= 31) ||
    (month === "june" && day >= 1 && day <= 20)
) {
    isValid = true;
}

console.log(isValid);
