let a = 1 //global scope
function doSomething(x) {
  let a = 10 //local scope
  let greet = "Hello"
  function echo() {
    let a = 555
    let b = "Bob"
    console.log(a, b)
  }
  echo()
  return `${greet}, ${x}, a=${a}`
}


console.log(doSomething("guest"))
a = 100
console.log(`a= ${a}`)


function doSth(x){
    function echo(){
        return `Hello, ${x}`
    }
    return echo
}
console.log(doSth("guest")())       // console.log(echo()) มันคือ () ของ echo



function doSomething(x) {
  function echo() {
    return `Hello,${x}`
  }
  return echo
}
doSomething("guest")
 
const fn = doSomething("guest")
console.log(fn())

