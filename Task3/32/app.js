const fs = require("fs");
const input = JSON.parse(fs.readFileSync("./32/input.json"));

function resetCount(obj) {
  for (key in obj) {
    obj[key] = 0;
  }
  
  return obj;
}

function sizeAvailabilityCheck(persons, tshirts) {
  let tshirtCounts = resetCount({...tshirts});
  const storage = [];

  for (let i = 0; i < persons.length; i++) {
    const sizes = persons[i].size;

    for (let j = 0; j < sizes.length; j++) {
      const size = sizes[j];

      if (tshirts[size] > 0) {
        tshirtCounts[size]++;
        tshirts[size]--;
        break;
      } else if (j === sizes.length - 1) {
        storage.push(`Not enough t-shirts for ${persons[i].name}.`);
      }
    }
  }
  return storage.length < 1 ? tshirtCounts : storage;
}

 const output = sizeAvailabilityCheck(input.persons, input.tshirts);
const obj = { output: output };
const jsonData = JSON.stringify(obj);
fs.writeFileSync("./32/output.json", jsonData, "utf8");
