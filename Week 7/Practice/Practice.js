    // 1️ Definition of DOM & <script> placement
    console.log("1️ Definition of DOM:");
    console.log(document.querySelector("p").textContent);

    // 2️ Document Children
    console.log("2️ Document Children:");
    console.log(document.children);
    console.log(document.children[0].children); // head, body

    // 3️ Node Types & Properties
    const title = document.getElementById("title");
    const bold = document.querySelector("b");
    console.log("3️ Node Types:");
    console.log(title.nodeName, title.nodeType, title.nodeValue); // H2, 1, null
    console.log(bold.nodeName, bold.nodeType, bold.nodeValue);   // B, 1, null

    // 4️ innerHTML vs innerText vs textContent
    const box = document.getElementById("box");
    console.log("4️ innerHTML vs innerText vs textContent:");
    console.log("innerHTML:", box.innerHTML);    // มีแท็ก <b> <i>
    console.log("innerText:", box.innerText);    // เฉพาะข้อความที่มองเห็น
    console.log("textContent:", box.textContent); // ข้อความทั้งหมด (รวม hidden)
