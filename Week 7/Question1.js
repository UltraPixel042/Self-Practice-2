// 1. What is the node type of first child of root node 
// 2. if node type is an element node, display "Hello, HTML node", otherwise, display "Hello, any node"

const divElement = document.firstChild
console.log(divElement.nodeType)
 
if(document.firstChild.nodeType){
    console.log("Hello , HTML node")
}
else{
    console.log("Hello ,any node")
}
 