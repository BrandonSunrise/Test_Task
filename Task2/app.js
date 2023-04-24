const fs = require('fs');
const input = JSON.parse(fs.readFileSync('./input.json'))

function findDuplicate(arr) {
    let slow = arr[0];
    let fast = arr[0];
    
    do {
      slow = arr[slow];
      fast = arr[arr[fast]];
    } while (slow !== fast);
    
    slow = arr[0];
    while (slow !== fast) {
      slow = arr[slow];
      fast = arr[fast];
    }
    
    return slow;
  }

const output = findDuplicate(input.array);
const obj = { output: output };
const jsonData = JSON.stringify(obj);
fs.writeFileSync('output.json', jsonData, 'utf8');