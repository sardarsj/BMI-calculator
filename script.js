const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const guide = document.querySelector("#guide");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height} `;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight ${weight} `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>BMI is ${bmi} </span>`;

    if (bmi < 18.6) {
      guide.innerHTML = `You are underweight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      guide.innerHTML = `Your BMI is normal`;
    } else {
      guide.innerHTML = `You are overweight`;
    }
  }
});
