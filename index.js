// Initialize & 2-way data binding
const data = {};
let value = data.prop ?? 1;
const numberPara = document.getElementById("number");
numberPara.textContent = data.prop ?? 1;
// Unit Conversion
const lengthPara = document.getElementById("length");
const volumePara = document.getElementById("volume");
const massPara = document.getElementById("mass");

window.addEventListener("load", () => {
  runApp();
});

const inputNumber = document.getElementById("value");
inputNumber.value = value;

const setInputValue = (event) => {
  data.prop = event.target.value;
  value = data.prop;
  numberPara.textContent = data.prop;
  runApp();
};
inputNumber.addEventListener("change", setInputValue, false);
inputNumber.addEventListener("keyup", setInputValue, false);

// Dark Mode
const bottomDiv = document.querySelector(".bottom");
const toggleCheckbox = document.getElementById("darkMode");
toggleCheckbox.addEventListener("change", () => {
  bottomDiv.classList.toggle("darkMode");
  document.body.classList.toggle("darkMode");
});

// Length Units
const meterToFeet = (value) => {
  return (value * 3.28084).toFixed(3);
};

const feetToMeter = (value) => {
  return (value * 0.3048).toFixed(3);
};

// Volume Units
const literToGallons = (value) => {
  return (value * 0.264172).toFixed(3);
};

const gallonsToLiters = (value) => {
  return (value * 3.78541).toFixed(3);
};

// Volume Units
const kilogramToPound = (value) => {
  return (value * 2.20462).toFixed(3);
};

const poundToKilogram = (value) => {
  return (value * 0.453592).toFixed(3);
};

const runApp = () => {
  lengthPara.textContent = `${value} meters = ${meterToFeet(
    value
  )} feet | ${value} feet = ${feetToMeter(value)} meter`;

  volumePara.textContent = `${value} liters = ${literToGallons(
    value
  )} gallons | ${value} gallons = ${gallonsToLiters(value)} liters`;

  massPara.textContent = `${value} kilos = ${kilogramToPound(
    value
  )} pounds | ${value} pounds = ${poundToKilogram(value)} kilos`;
};
