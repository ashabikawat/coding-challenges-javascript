let johnHeight = 1.95;
let johnWeight = 92;

let markHeight = 1.69;
let markWeight = 78;

let johnBmi = johnWeight / (johnHeight * johnHeight);
console.log(johnBmi);

let markBmi = markWeight / (markHeight * markHeight);
console.log(markBmi);

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is greater than (${johnBmi})`);
} else {
  console.log(`Mark's BMI (${johnBmi}) is greater than (${markBmi})`);
}
