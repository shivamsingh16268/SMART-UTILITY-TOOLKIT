const isEven = require("./modules/isEven");

const numbers = [6, 9, 12, 17, 20];

numbers.forEach((number) => {
    if (isEven(number)) {
        console.log(`${number} is Even`);
    } else {
        console.log(`${number} is Odd`);
    }
});