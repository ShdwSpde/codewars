/*

Find the difference of the volumes of two sets of 3 nums

*/


function find_difference([a,b,c], [d,e,f]) {
  return Math.abs(a*b*c-d*e*f)
}

/*

function find_difference(a, b) {
  return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}

*/
