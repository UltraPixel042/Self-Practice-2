let x = 10;
let y = 20;
function impureFunc(arg) {
  arg = arg + x * 2;
  return arg;
}
console.log(impureFunc(y));
console.log(x);

//pure function
const datas = { value: 10 };
function pureFunc(arg) {
  let z = 2;
  arg = arg * z + 1;
  return arg;
}
console.log(pureFunc(datas.value)); // 21
console.log(pureFunc(datas.value)); // 21
console.log(pureFunc(datas.value)); // 21
console.log(pureFunc(datas.value)); // 21
console.log(pureFunc(datas.value)); // 21
console.log(pureFunc(datas.value)); // 21
console.log(pureFunc(datas.value)); // 21

//impure function
const data = { value: 10 };
function impureFunc2(arg) {
  let z = 2;
  arg.value = arg.value * z + 1; // อ้างไปที่ value
  return arg.value;
}
console.log(impureFunc2(data)); // 21
console.log(impureFunc2(data)); // 43
console.log(impureFunc2(data)); // 43

console.log("=============================================");

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log(addSquares(2, 5));
// console.log(typeof addSquares(2, 5));

function a() {
  return sum;
}
function b() {
  return sum(2, 5);
}
function c(x) {
  return x;
}
function sum(n1, n2) {
  return n1 + n2;
}
function str(n1, n2) {
  return n1 + n2 + "";
}

console.log(typeof a()); // return function
console.log(typeof b()); // return number
console.log(typeof c()); // return undefined
console.log(typeof c(x)); // return number
console.log(typeof c(sum)); // return function
console.log(typeof sum()); // return number
console.log(typeof c(str)); // return function
console.log(typeof str()); // return string

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
console.log(addSquares("wsffw", 5))                     // NaN
console.log(addSquares("dwdwdwdwd", "efefefefef"))      // NaN
console.log(addSquares(2, 2))                           // 8


let nums = 1       // global scope
function doSomething(x){
    let nums = 10  // local scope
    let greet = "Hello"
    return `${greet} , ${x}, nums = ${nums}`
}
console.log(doSomething("guest"))
console.log(`nums = ${nums}`)

