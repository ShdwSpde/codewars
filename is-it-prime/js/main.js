function divisors(num) {
  let divisors = []
  for(let i=2;i < num;i++) {
    if(num % i === 0){
      divisors.push(i)
    }
  }
  if (divisors.length === 0){
    return(`${num} is prime`)
  } else {
  return divisors
  }
