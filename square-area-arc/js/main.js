function squareArea(A){
 const circum = 4 * A;
 const radius = circum / (2 * Math.PI);
 const area = Math.pow(radius, 2);
 return Math.round(area*100)/100
}
