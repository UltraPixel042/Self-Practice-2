const fName = document.getElementById("fname")
const lName = document.getElementById("lname")
// const message = document.getElementById("message")

function checkEmpty(e) {
  console.log(e)
  if (e.target.value.trim().length === 0) {
    message.style.color = "red"
    message.textContent = `your ${e.target.id} is empty`
  }
}
// fName.addEventListener("blur", checkEmpty)
// lName.addEventListener("blur", checkEmpty)

const info = document.getElementById("info");
info.addEventListener("mouseout", () => {
  console.log("mouse out");
});
info.addEventListener("mouseover", () => {
  console.log("mouse over");
});
window.addEventListener("mousemove", (event) => {
  info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`;
});

const inputMessage = document.getElementById("message");
inputMessage.addEventListener("keyup", (event) => {
  //   if (event.key === 'Enter')
  console.log(event.key);
  console.log(event.code);
  console.log(event.target.value);
});
const message = document.querySelector('#message')
const display = document.querySelector('p')
message.addEventListener('input', function () {
display.textContent = message.value
})

