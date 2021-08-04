    
function calculateTotalWithTax(base, taxRate) {
    return base + base*taxRate;
}

const appleCostPerPound = 2.29;
const pearCostPerPound = 2.99;

const applePounds = prompt("How many pounds of apples?");
const pearPounds = prompt("How many pounds of pears?");

let total = appleCostPerPound*applePounds +
        pearCostPerPound*pearPounds;

total = calculateTotalWithTax(total, .10);
total = Math.floor(total);

const buyFruit = confirm(`The total is around $${total}. Should I buy it?`);
if (buyFruit) {
    alert("I bought the fruit.");
}
else {
    alert("I put it back.");
}

