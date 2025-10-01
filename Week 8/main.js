// insertBefore(newNode, referenceNode) //The node to insert becomes the previous sibling of the reference node
// replaceChild(newChild, oldChild)//replaces a child node within the given (parent) node
// removeChild(child)//removes a child node from the DOM and returns the removed node.

/* <ul id="soup">
<li class="meat">Spicy Bacon-Corn Soup</li>
<!-- 2. remove Vegetable Soup -->
<li class="vegan">Vegetable Soup</li>
<!-- 1. <li class="vegan">Cabbage Soup</li> -->
<li class="meat">Beef Soup</li>
<!-- 3. replace Beef Soup with Pork Soup -->
<li class="vegan">Coconut Soup</li>
</ul> */

// 2. remove Vegetable Soup
//2.1 get its parent
const soupUlElement = document.getElementById("soup")
//2.2 get ref node -Beef Soup
let refNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Vegetable Soup") refNode = element
})
//2.3 remove
soupUlElement.removeChild(refNode)

//  3. replace Beef Soup with Pork Soup
//3.1 get its parent
const soupsUlElement = document.getElementById("soup")
//3.2 get ref node -Beef Soup
let refsNode = null
Array.from(soupUlElement.children).forEach((element) => {
  if (element.textContent.trim() === "Beef Soup") refNode = element
})
//3.3 create new node <li class="meat">Pork Soup</li>
const newNode = document.createElement("li")
newNode.textContent = "Pork Soup"
newNode.setAttribute("class", "meat")
//3.4 replaceChild(newNode, refNode)
soupUlElement.replaceChild(newNode, refNode)