// 1. What is the node type of first child of root node 
console.log(document.firstChild.nodeType);

// 2. if node type is an element node, display "Hello, HTML node", otherwise, display "Hello, any node"
if(document.firstElementChild.nodeType === Node.ELEMENT_NODE){
    console.log("Hello, HTML node")   
}else{
    console.log("Hello, any node")
}