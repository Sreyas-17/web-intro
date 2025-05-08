// UC1 - Check if employee is present or absent using random
const IS_PRESENT = 1;
let empCheck = Math.floor(Math.random() * 2);
if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

// UC2 - Calculate wage based on full-time/part-time/no work
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HOUR = 20;

let empHours = 0;
empCheck = Math.floor(Math.random() * 3);

switch (empCheck) {
    case IS_PART_TIME:
        empHours = 4;
        break;
    case IS_FULL_TIME:
        empHours = 8;
        break;
    default:
        empHours = 0;
}

let empWage = empHours * WAGE_PER_HOUR;
console.log("Daily Wage: " + empWage);

// UC3 - Refactor to function that returns working hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return 4;
        case IS_FULL_TIME:
            return 8;
        default:
            return 0;
    }
}

empCheck = Math.floor(Math.random() * 3);
empHours = getWorkingHours(empCheck);
empWage = empHours * WAGE_PER_HOUR;
console.log("Daily Wage using Function: " + empWage);

// UC4 - Wage for 20 working days in a month
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHours = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 3);
    totalEmpHours += getWorkingHours(empCheck);
}

let totalEmpWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Total Monthly Wage: " + totalEmpWage);

// UC5 - Wage until 160 hours or 20 days
const MAX_HRS_IN_MONTH = 160;
let totalHours = 0;
let totalDays = 0;

while (totalHours <= MAX_HRS_IN_MONTH && totalDays < NUM_OF_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 3);
    let empHrs = getWorkingHours(empCheck);
    totalHours += empHrs;
    totalDays++;
}

let totalWage = totalHours * WAGE_PER_HOUR;
console.log("Total Wage with constraints: " + totalWage);

// UC6 - Store daily wages in an array
let dailyWageArr = [];
totalHours = 0;
totalDays = 0;

while (totalHours <= MAX_HRS_IN_MONTH && totalDays < NUM_OF_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 3);
    let empHrs = getWorkingHours(empCheck);
    totalHours += empHrs;
    dailyWageArr.push(empHrs * WAGE_PER_HOUR);
    totalDays++;
}

console.log(dailyWageArr);

// UC7a - Total wage using reduce
let totalWageReduce = dailyWageArr.reduce((total, daily) => total + daily, 0);
console.log("Total Wage using reduce: " + totalWageReduce);

// UC7b - Day with daily wage using map
let dayWageMap = dailyWageArr.map((wage, index) => `Day ${index + 1} = ${wage}`);
console.log("Day Wise Wages:", dayWageMap);

// UC7c - Days with Full Time Wage (160)
let fullTimeDays = dailyWageArr.filter(wage => wage === 160);
console.log("Full Time Days:", fullTimeDays);

// UC7d - First full time wage day
let firstFullTime = dailyWageArr.find(wage => wage === 160);
console.log("First Full Time Wage Day: ", firstFullTime);

// UC7e - Every full time wage is truly full time
let allFullTime = dailyWageArr.every(wage => wage === 160);
console.log("All Full Time?:", allFullTime);

// UC7f - Is there any part time wage
let hasPartTime = dailyWageArr.some(wage => wage === 80);
console.log("Has Part Time?:", hasPartTime);

// UC7g - Count number of days worked
let workedDays = dailyWageArr.filter(wage => wage > 0).length;
console.log("Days Worked:", workedDays);

// UC8 - Store and compute using Map
let dailyWageMap = new Map();
totalHours = 0;
totalDays = 0;

while (totalHours <= MAX_HRS_IN_MONTH && totalDays < NUM_OF_WORKING_DAYS) {
    let empCheck = Math.floor(Math.random() * 3);
    let empHrs = getWorkingHours(empCheck);
    totalHours += empHrs;
    dailyWageMap.set(++totalDays, empHrs * WAGE_PER_HOUR);
}

console.log("Day-wise Wages in Map:", dailyWageMap);

// Compute total wage using Map values
let totalWageMap = 0;
for (let wage of dailyWageMap.values()) {
    totalWageMap += wage;
}
console.log("Total Wage from Map:", totalWageMap);
