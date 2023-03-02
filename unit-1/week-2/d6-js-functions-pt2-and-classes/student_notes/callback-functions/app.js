// console.log("hello");

// //callback function
// // colors.forEach(function (color, idx) {});

// const colors = ["blue", "green", "red"];
// const forEachColor = (color, idx) => {
//   console.log(color, idx);
// };
// colors.forEach(forEachColor);

// const cars = [
//   { make: "Toyota", yrsOld: 5, mileage: 92399 },
//   { make: "Ford", yrsOld: 12, mileage: 255005 },
//   { make: "Ferrari", yrsOld: 9, mileage: 12966 },
//   { make: "Subaru", yrsOld: 9, mileage: 111266 },
//   { make: "Toyota", yrsOld: 2, mileage: 41888 },
//   { make: "Tesla", yrsOld: 3, mileage: 57720 },
// ];

// // const wellDrivenCars = cars.filter((make, yrsOld, mileage) => {
// //   mileage.length > 20000;
// // });
// // const forEachCar = (make, yrsOld, mileage) => {
// //   console.log(make, yrsOld, mileage);
// // };
// // wellDrivenCars.forEach(cars);

// const filterCars = (car) => {
//   if (car.mileage / car.yrsOld > 20000) {
//     return car;
//   }
// };

// const wellDrivenCars = cars.filter(filterCars);

// wellDrivenCars.forEach((car) => console.log(car));

// const colors = ["red", "green", "blue"];

// console.log("Code BEFORE the forEach...");

// // setTimeout accepts a callback & how long to wait before calling the cb
// setTimeout(function () {
//   colors.forEach(function (color, idx) {
//     console.log(`${idx + 1} - ${color}`);
//   });
// }, 1000); // 1000 milliseconds (1 sec)

// console.log("Code AFTER the forEach...");

// Using a "lookup" data-structure
// minimizes code and increases flexibility
const lightSequence = [
  { color: "red", time: 3000 },
  { color: "green", time: 2000 },
  { color: "yellow", time: 1000 },
];
// Cache the divs for the lights
const lightEls = document.querySelectorAll("main > div");
// Variable to track the current light
let curLightIdx = 0; // Start with red object

function renderLight(cb) {
  // First, turn off all lights
  lightEls.forEach((el) => (el.style.backgroundColor = "black"));
  // Next, turn on the current light
  lightEls[curLightIdx].style.backgroundColor =
    lightSequence[curLightIdx].color;
  // Invoke the callback when this light's time has expired
  setTimeout(cb, lightSequence[curLightIdx].time);
}
function renderLightSequence() {
  renderLight(renderLightSequence);
  // Increment and reset to zero when 3 is reached
  curLightIdx = ++curLightIdx % 3;
}

// Make it start!
renderLightSequence();
