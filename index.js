// const value_el = document.getElementById("value");
// let number = value_el.value ?? 0;
let value = 20;
const bottomDiv = document.querySelector(".bottom");
const toggleCheckbox = document.getElementById("darkMode");

toggleCheckbox.addEventListener("change", () => {
  bottomDiv.classList.toggle("darkMode");
  document.body.classList.toggle("darkMode");
});

const numberSpan = document.getElementById("number");
const lengthPara = document.getElementById("length");
const volumePara = document.getElementById("volume");
const massPara = document.getElementById("mass");

numberSpan.textContent = value;
// Length Units
const meterToFeet = (value) => {
  return (value * 3.28084).toFixed(3);
};

const feetToMeter = (value) => {
  return (value * 0.3048).toFixed(3);
};

lengthPara.textContent = `${value} meters = ${meterToFeet(
  value
)} feet | ${value} feet = ${feetToMeter(value)} meter`;

// Volume Units
const literToGallons = (value) => {
  return (value * 0.264172).toFixed(3);
};

const gallonsToLiters = (value) => {
  return (value * 3.78541).toFixed(3);
};

volumePara.textContent = `${value} liters = ${literToGallons(
  value
)} gallons | ${value} gallons = ${gallonsToLiters(value)} liters`;

// Volume Units
const kilogramToPound = (value) => {
  return (value * 2.20462).toFixed(3);
};

const poundToKilogram = (value) => {
  return (value * 0.453592).toFixed(3);
};

massPara.textContent = `${value} kilos = ${kilogramToPound(
  value
)} pounds | ${value} pounds = ${poundToKilogram(value)} kilos`;
