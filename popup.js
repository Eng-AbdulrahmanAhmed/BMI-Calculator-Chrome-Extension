const weightLabel = document.querySelector('#weight-label');
const heightLabel = document.querySelector('#height-label');

function onUnitToggle() {
    const metricBtn = document.querySelector('.unit-toggle .unit:nth-child(1)');
    const imperialBtn = document.querySelector('.unit-toggle .unit:nth-child(2)');
    const weightHint = document.querySelector('.weight-hint');
    const heightHint = document.querySelector(".height-hint");
    metricBtn.addEventListener('click', () => {
        metricBtn.classList.add('active');
        imperialBtn.classList.remove('active');
        weightHint.textContent = 'kg';
        heightHint.textContent = 'cm';
        weightLabel.textContent = 'Weight (kg)';
        heightLabel.textContent = 'Height (cm)';
    });
    imperialBtn.addEventListener('click', () => {
        imperialBtn.classList.add('active');
        metricBtn.classList.remove('active');
        weightHint.textContent = 'lbs';
        heightHint.textContent = 'in';
        weightLabel.textContent = 'Weight (lbs)';
        heightLabel.textContent = 'Height (in)';
    });
}

function calculateBMI() {
    console.log('Setting up BMI calculation event listener');
   
   const calculate = document.querySelector('#calculate');
   calculate.addEventListener('click', () => {
        const weightInput = document.querySelector('#weight');
        const heightInput = document.querySelector('#height');
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);
        
        const resultDiv = document.querySelector('#result');
        const errorMsg = document.querySelector('#error-msg');
        const bmiValSpan = document.querySelector('#bmi-val');
        const bmiCatDiv = document.querySelector('#bmi-cat');
        const bmiPointer = document.querySelector('#bmi-pointer');

        resultDiv.style.display = 'none';
        errorMsg.style.display = 'none';

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            errorMsg.textContent = 'Please enter valid weight and height!';
            errorMsg.style.display = 'block';
            console.log('Invalid input: weight and height must be positive numbers.');
            return;
        }

        let bmi;
        if (document.querySelector('.unit-toggle .unit:nth-child(1)').classList.contains('active')) {
            // Metric BMI calculation
            bmi = weight / ((height / 100) ** 2);
            console.log(`Calculating BMI with metric units: weight: ${weight} kg, height: ${height} cm`);
        } else {
            // Imperial BMI calculation
            const weightInKg = weight * 0.453592;
            const heightInMeters = height * 0.0254;
            bmi = weightInKg / (heightInMeters ** 2);
            console.log(`Calculating BMI with imperial units: weight: ${weight} lbs, height: ${height} in`);
        }

        const bmiString = bmi.toFixed(2);
        bmiValSpan.textContent = bmiString;

        let category = '';
        let catClass = '';
        if (bmi < 18.5) {
            category = 'Underweight';
            catClass = 'category-underweight';
        } else if (bmi < 25) {
            category = 'Normal Weight';
            catClass = 'category-normal';
        } else if (bmi < 30) {
            category = 'Overweight';
            catClass = 'category-overweight';
        } else {
            category = 'Obese';
            catClass = 'category-obese';
        }

        bmiCatDiv.textContent = category;
        bmiCatDiv.className = 'bmi-category ' + catClass;

        const minBmi = 15;
        const maxBmi = 40;
        let percentage = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
        percentage = Math.max(0, Math.min(100, percentage));

        bmiPointer.style.left = `${percentage}%`;
        resultDiv.style.display = 'block';
   });
   
}

/* the goal is to switch between metric and imperial units by clicking the respective buttons */
document.addEventListener('DOMContentLoaded', () => {//explation: this event listener ensures that the code inside it runs only after the entire HTML document has been fully loaded and parsed, preventing any issues with trying to access DOM elements that may not yet exist.
    onUnitToggle();
    calculateBMI();
});