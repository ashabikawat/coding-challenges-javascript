let mark = {
  fullName: "Mark miller",
  height: 1.69,
  weight: 78,
  bmi: function () {
    const bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};

let john = {
  fullName: "John smith",
  height: 1.95,
  weight: 92,
  bmi: function () {
    const bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};

if (mark.bmi > john.bmi) {
  console.log(
    `Marks BMI (${mark.bmi()}) is greater than johns BMI (${john.bmi()})`
  );
} else {
  console.log(
    `Johns BMI (${john.bmi()}) is greater than marks BMI (${mark.bmi()})`
  );
}
