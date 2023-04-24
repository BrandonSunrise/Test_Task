const fs = require('fs');
const input = JSON.parse(fs.readFileSync('./input.json'))

function countGoodPositions(plan) {
    let n = plan.length;
    let m = plan[0].length;
    let count = 0;
  
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (plan[i][j] === '.') { 
          if (i > 0 && plan[i-1][j] === '*') { 
            count++;
            continue;
          }
          if (j > 0 && plan[i][j-1] === '*') { 
            count++;
            continue;
          }
          if (i < n-1 && plan[i+1][j] === '*') {
            count++;
            continue;
          }
          if (j < m-1 && plan[i][j+1] === '*') {
            count++;
            continue;
          }
        }
      }
    }
  
    return count;
  }

  
const output = countGoodPositions(input.plan);
const obj = { positionCount: output };
const jsonData = JSON.stringify(obj);
fs.writeFileSync('output.json', jsonData, 'utf8');