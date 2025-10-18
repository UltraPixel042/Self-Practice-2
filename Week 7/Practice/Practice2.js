// 1. create <p></p>
const pElement = document.createElement("p");
// 2. create = id="p5"
    // Solution 1
        // const idAttr = document.createAttribute("id");
        //idAttr.value = "p5";
    // Solution 2
pElement.setAttribute("id", "p5");
// 3. binding id="p5" to <p>
        // pElement.setAttributeNode(idAttr); // <p id="p5"></p>
// 4. create text value = $5
    // Solution 1
        // const pText = document.createTextNode("#5");
    // Solution 2
pElement.textContent = "#5"
// 5. binding "#5" to <p>
        // pElement.appendChild(pText) // <p id="5">#5</p>
// 6. binding <p> id="p5">#5</P> to <body>
const body = document.body
body.appendChild(pElement); // <body>... <p id="p5">#5</p></body>




