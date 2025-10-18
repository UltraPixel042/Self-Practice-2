let el = document.getElementById("demo");
console.log(el.innerHTML);
console.log(el.innerText);
console.log(el.textContent);

// 1. append <p> under <div id="demo">
// 1.5 add format="italic" setAttribute
// 2. try to add three different text types
// 2.1 add <i>Sample Italic Text</i> with innerText
// 2.3 add <i>Sample Italic Text</i> with textContent

const pElement = document.createElement("p");
pElement.setAttribute("format", "italic");
// pElement.setAttribute[1].value = "italic";
console.log(pElement)

const iElement = document.createElement("i");
iElement.textContent = "Sample Italic Text";

const body = document.body
body.appendChild(iElement);

