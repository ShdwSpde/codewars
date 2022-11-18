// take a number and return a string that is a concatenation of each digit in the original number squared


function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}


// takes an empty string and adds the num, splits into array, then maps each val in the array to its square and joins that array back into a string. we then convert that string to a number
