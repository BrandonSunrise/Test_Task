const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./31/input.json"));

const discs = input.kg
  .concat(discArrayUnificator(input.lbs))
  .sort(function (a, b) {
    return a - b;
  });

function discArrayUnificator(lbsArray) {
  const kgArray = [];
  for (let i = 0; i < lbsArray.length; i++) {
    kgArray.push(lbsArray[i] * 0.453592);
  }
  return kgArray;
}

function newRecordCounter(recordWeight, discs, barbell, discLimit) {
  let minWeight = Infinity;
  for (let i = 0; i < discs.length; i++) {
    for (let j = i + 1; j < discs.length; j++) {
      const totalWeight = barbell + discs[i] * 2 + discs[j] * 2;
      if (
        totalWeight > recordWeight &&
        totalWeight < minWeight &&
        totalWeight <= discLimit * discs[discs.length - 1] + barbell
      ) {
        minWeight = totalWeight;
      }
    }
  }

  return Number(minWeight.toFixed(2));
}

console.log(
  newRecordCounter(input.recordWeight, discs, input.barbell, input.maxDiscs)
);

const output = newRecordCounter(
  input.recordWeight,
  discs,
  input.barbell,
  input.maxDiscs
);
const obj = { output: output };
const jsonData = JSON.stringify(obj);
fs.writeFileSync("./31/output.json", jsonData, "utf8");
