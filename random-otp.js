// Function to generate a random number 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let randomInt = getRandomInt(1000, 9999); // Add range according to the requirement , this returns a 4 digit number
 
  module.exports = randomInt;
 
