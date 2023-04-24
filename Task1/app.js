const fs = require('fs');
const input = JSON.parse(fs.readFileSync('./input.json'))

function canTransformNumber(num1 , num2)  {
    if (num1 === num2) {
        return true;
    }
    while (num2 > num1) {
        if (num2 % 2 === 0) {
            num2 /= 2;
        } else if (num2 % 10 === 1) {
            num2 = (num2 - 1) / 10;
        } else {
            return false;
        }
    }
    return num1 === num2;
}

const output = canTransformNumber(input.num1, input.num2);
const obj = { output: output };
const jsonData = JSON.stringify(obj);
fs.writeFileSync('output.json', jsonData, 'utf8');