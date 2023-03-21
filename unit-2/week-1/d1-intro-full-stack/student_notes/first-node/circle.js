function area(radius) {
  const result = (radius ^ 2) * Math.PI;
  return Number(result.toFixed(2));
}

function circumference(radius) {
  const result = radius * 2 * Math.PI;
  return Number(result.toFixed(2));
}

module.exports = {
  area,
  circumference,
};

console.log(module);
