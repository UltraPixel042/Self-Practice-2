let el = document.getElementById("demo");
console.log(el.innerHTML);
console.log(el.innerText);
console.log(el.textContent);
 
 
//<p format="italic"><i>Sample Italic Text</i></p>
//1. append <p> under <div id="demo">
//1.5 add format='italic' attribute to <p>
//2. try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
//2.2  add <i>Sample Italic Text</i> with innerText
//2.3 add <i>Sample Italic Text</i> with textContent
 
const pElement = document.createElement("p");
pElement.setAttribute("format", "italic");
 
const c = ['innerHTML', 'innerText', 'textContent'];
for (let i = 0; i < c.length; i++) {
    pElement.appendChild(document.createElement("li"))[c[i]] = "Sample Italic";
}
 
el.appendChild(pElement);