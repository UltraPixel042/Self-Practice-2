let x = 10;
let y = 20;
function impureFunc(arg) {
  arg = arg + x * 2;
  return arg;
}
console.log(impureFunc(y));
console.log(x);
console.log(y)


const pureFunc = (a, b) => a * b;

console.log(pureFunc(2, 3));
console.log(pureFunc(2, 3));
console.log(pureFunc(2, 3));
console.log(pureFunc(2, 3));
