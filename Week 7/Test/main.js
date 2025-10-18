const divElement = document.getElementById("exampleElement");
const divChild = divElement.childNodes
divChild.forEach((child) => {
    console.log(child.nodeName);
    console.log(child.nodeType);
    console.log(child.nodeValue);
})
console.log(divElement.attributes[0].ownerElement);
console.log(divElement.attributes.length);


let el = document.getElementById("demo");
el.innerHTML = "<b>Hello</b> World"
console.log(el.innerHTML)