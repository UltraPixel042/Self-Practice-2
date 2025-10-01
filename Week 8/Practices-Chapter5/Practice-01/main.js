// 036
// 16272936
// add bordered
const addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  // add event
  console.log(box.classList);
  box.classList.add("bordered");
  console.log(box.classList);
});

//remove bordered
const removeButton = document.getElementById("remove");
removeButton.addEventListener("click", () => {
  console.log(box.classList);
  box.classList.remove("bordered");
  console.log(box.classList);
});

// toggle bordered
const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
  console.log(box.classList);
  box.classList.toggle("bordered");
  console.log(box.classList);
});
