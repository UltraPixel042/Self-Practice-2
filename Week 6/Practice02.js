// 💻 Functional Programming Practice in JavaScript
// ไฟล์นี้รวมโจทย์ทั้งหมด 8 ข้อ

// 🧠 ข้อ 1: Closure Counter
// เขียนฟังก์ชัน createCounter(start) ที่คืนฟังก์ชันนับเลขต่อไปเรื่อย ๆ โดยไม่ใช้ตัวแปร global
// ตัวอย่าง:
// const counter = createCounter(10);
// console.log(counter()); // 11
// console.log(counter()); // 12
// console.log(counter()); // 13
function createCounter(n) {
  let final = n;
  return function () {
    final++;
    return final;
  };
}

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

// 🔁 ข้อ 2: Nested Function – Power Calculator
// เขียนฟังก์ชัน power(base) ที่คืนฟังก์ชัน raise(exponent)
// ตัวอย่าง:
// const pow2 = power(2);
// console.log(pow2(3)); // 8
// console.log(pow2(5)); // 32
function power(base) {
  let total = base;
  return function (p) {
    return total ** p;
  };
}
const pow2 = power(2);
console.log(pow2(3));
console.log(pow2(5));

// ⚙️ ข้อ 3: Function Types
// เขียนฟังก์ชัน 3 แบบที่ให้ผลเหมือนกัน คือ "Hello <name>"
// ตัวอย่าง:
// console.log(greet("Alice"));
// console.log(greetExpr("Bob"));
// console.log(greetArrow("Charlie"));
function greet(name) {
  return `Hello ${name}`;
}

const greetExpr = function (name) {
  return `Hello ${name}`;
};
greetExpr();

function greetNested(name) {
  function hello() {
    return name;
  }
  return `Hello ${hello()}`;
}

console.log(greet("Alice"));
console.log(greetExpr("Bob"));
console.log(greetNested("Charlie"));

// 🧩 ข้อ 4: Higher-Order Function – Custom Filter
// เขียนฟังก์ชัน myFilter(arr, fn) ที่ทำงานเหมือน .filter()
// ตัวอย่าง:
// const nums = [1, 2, 3, 4, 5];
// console.log(myFilter(nums, n => n % 2 === 0)); // [2,4]
function myFilter(arr, fn) {
  let result = [];
  for (let item of arr) {
    if (fn(item)) {
      result.push(item);
    }
  }
  return result;
}
const nums = [1, 2, 3, 4, 5];
console.log(myFilter(nums, (n) => n % 2 === 0));

// ⚡ ข้อ 5: Function Composition
// เขียนฟังก์ชัน compose(f, g) ที่คืนฟังก์ชันใหม่ ซึ่งเมื่อเรียกจะได้ค่า f(g(x))
// ตัวอย่าง:
// const double = x => x * 2;
// const square = x => x * x;
// const doubleThenSquare = compose(square, double);
// console.log(doubleThenSquare(3)); // 36
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const double = (x) => x * 2;
const square = (x) => x * x;
const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3));

// 🧘 ข้อ 6: Pure Function & Immutability
// เขียนฟังก์ชัน addItemPure(list, item) ที่คืน array ใหม่ โดยไม่แก้ไขของเดิม
// ตัวอย่าง:
// const items = ["A", "B"];
// const newItems = addItemPure(items, "C");
// console.log(items);    // ["A", "B"]
// console.log(newItems); // ["A", "B", "C"]
function addItemPure(list, item) {
  return [...list, item];
}
const items = ["A", "B"];
const newItems = addItemPure(items, "C");
console.log(items);
console.log(items);
console.log(newItems);

// 🧮 ข้อ 7: Functional Programming
// เขียนโค้ดแบบ functional programming เพื่อ:
// - เลือกเฉพาะเลขคู่จาก array
// - คูณทุกตัวด้วย 3
// - หาผลรวมทั้งหมด
// ตัวอย่าง:
// const nums = [1,2,3,4,5,6];
// expected result = (2*3 + 4*3 + 6*3) = 36
function Programming(arr) {
  return arr
    .filter((n) => n % 2 === 0)
    .map((n) => n * 3)
    .reduce((sum, n) => sum + n, 0);
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(Programming(numbers));

// 🧱 ข้อ 8: Combine Everything (Challenge)
// เขียนฟังก์ชัน makeMultiplier(n) ที่:
// 1. เป็น closure
// 2. คืนฟังก์ชันที่รับ array
// 3. ใช้ functional programming (map, reduce)
// 4. คืนผลรวมของค่าทุกตัวหลังคูณด้วย n
// ตัวอย่าง:
// const times3 = makeMultiplier(3);
// console.log(times3([1,2,3,4])); // 30
function makeMultiplier(num) {
  return function (arr) {
    return arr.map((n) => n * num).reduce((sum, n) => sum + n, 0);
  };
} 
const times3 = makeMultiplier(3);
console.log(times3([1, 2, 3, 4]));
