const mark = {
    firstName: 'Mark',
    secondName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    firstName: 'John',
    secondName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

console.log(`(${mark.calcBMI() > john.calcBMI() ? `Mark BMI ${mark.calcBMI()} is higher then John BMI ${john.calcBMI()}` : `John BMI ${john.calcBMI()} is higher then Mark BMI ${mark.calcBMI()}`})`);