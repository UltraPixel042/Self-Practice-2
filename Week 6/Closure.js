function counter() {
  let count = 0;
  function increment() {
    return ++count;
  }
  function decrement() {
    return --count;
  }
  function getCount() {
    return count;
  }
  return {
    increment: increment,
    decrement: decrement,
    getCount: getCount
  };
}

const c = counter()
console.log(c.increment())
console.log(c.increment())
console.log(c.decrement())
console.log(c.getCount())

