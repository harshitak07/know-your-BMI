const unitSelection = document.getElementById("unitSelection");
const metricInputs = document.getElementById("metricInputs");
const imperialInputs = document.getElementById("imperialInputs");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");
const bmiForm = document.getElementById("bmiForm");

// Initially hide all input fields
metricInputs.style.display = "none";
imperialInputs.style.display = "none";

// Handle form submission (Enter key or button click)
bmiForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  if (unitSelection.value === "metric") {
    const heightCm = parseFloat(document.getElementById("heightCm").value);
    const weightKg = parseFloat(document.getElementById("weightKg").value);

    if (heightCm > 0 && weightKg > 0) {
      const heightM = heightCm / 100; // Convert cm to meters
      const bmi = (weightKg / (heightM * heightM)).toFixed(2);
      result.textContent = `Your BMI is ${bmi}`;
    } else {
      result.textContent = "Please enter valid height and weight values.";
    }
  } else if (unitSelection.value === "imperial") {
    const heightFeet = parseInt(document.getElementById("heightFeet").value) || 0;
    const heightInches = parseInt(document.getElementById("heightInches").value) || 0;
    const weightLbs = parseFloat(document.getElementById("weightLbs").value);

    if ((heightFeet > 0 || heightInches > 0) && weightLbs > 0) {
      const totalInches = (heightFeet * 12) + heightInches; // Convert feet to inches
      const bmi = ((703 * weightLbs) / (totalInches * totalInches)).toFixed(2);
      result.textContent = `Your BMI is ${bmi}`;
    } else {
      result.textContent = "Please enter valid height and weight values.";
    }
  } else {
    result.textContent = "Please select a unit system to calculate your BMI.";
  }
});

// Handle unit selection
unitSelection.addEventListener("change", () => {
  if (unitSelection.value === "metric") {
    metricInputs.style.display = "block";
    imperialInputs.style.display = "none";
  } else if (unitSelection.value === "imperial") {
    metricInputs.style.display = "none";
    imperialInputs.style.display = "block";
  } else {
    metricInputs.style.display = "none";
    imperialInputs.style.display = "none";
  }
});
