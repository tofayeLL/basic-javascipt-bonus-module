
function add(num1, num2){
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[3]);
}
console.log(add(12, 13, 14, 15, 16));