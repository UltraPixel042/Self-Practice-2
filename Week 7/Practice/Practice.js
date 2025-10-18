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

    // 5️ Traversing Nodes
    const menu = document.getElementById("menu");
    console.log("5️ Traversing Nodes:");
    console.log("First child:", menu.firstElementChild.textContent);
    console.log("Last child:", menu.lastElementChild.textContent);
    console.log("Count:", menu.childElementCount);
    console.log("Next sibling of first:", menu.firstElementChild.nextElementSibling.textContent);
    console.log("Previous sibling of last:", menu.lastElementChild.previousElementSibling.textContent);

    // 6️ Selecting Nodes
    const cards = document.getElementsByClassName("card");
    const info = document.getElementById("info");
    const queryCards = document.querySelectorAll(".card");
    console.log("6️ Selecting Nodes:");
    console.log("HTMLCollection:", cards); // สด
    console.log("NodeList:", queryCards);  // คงที่
    console.log("getElementById:", info.textContent);

    // 7️ Manipulating Nodes
    const addBtn = document.getElementById("add");
    const list = document.getElementById("list");
    addBtn.addEventListener("click", () => {
      const li = document.createElement("li");            // สร้าง element
      const text = document.createTextNode("New Item");   // สร้างข้อความ
      li.appendChild(text);                               // เพิ่มข้อความเข้า li
      li.setAttribute("class", "item");                   // ตั้ง class
      list.appendChild(li);                               // เพิ่มใน ul
      console.log("Added:", li.textContent);
    });

    // 8️ System Dialogs
    alert("Welcome to DOM Practice!");
    const name = prompt("Enter your name:");
    const confirmBox = confirm("Are you sure?");
    const result = document.getElementById("result");
    result.textContent = `Name: ${name} | Confirm: ${confirmBox}`;
    console.log("8️ System Dialogs:", { name, confirmBox });

    // 9️ Bonus Challenge: Note Creator
    const addNote = document.getElementById("addNote");
    const noteInput = document.getElementById("noteInput");
    const noteList = document.getElementById("noteList");

    addNote.addEventListener("click", () => {
      const text = noteInput.value.trim();
      if (text === "") return; // ป้องกันว่าง
      const li = document.createElement("li");
      li.textContent = text;
      noteList.appendChild(li);
      noteInput.value = "";
      console.log("Added note:", text);
    });