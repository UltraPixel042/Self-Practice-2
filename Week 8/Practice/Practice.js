    // 1 Traversing Nodes
    const menu = document.getElementById("menu");
    console.log("5️ Traversing Nodes:");
    console.log("First child:", menu.firstElementChild.textContent);
    console.log("Last child:", menu.lastElementChild.textContent);
    console.log("Count:", menu.childElementCount);
    console.log("Next sibling of first:", menu.firstElementChild.nextElementSibling.textContent);
    console.log("Previous sibling of last:", menu.lastElementChild.previousElementSibling.textContent);

    // 62 Selecting Nodes
    const cards = document.getElementsByClassName("card");
    const info = document.getElementById("info");
    const queryCards = document.querySelectorAll(".card");
    console.log("6️ Selecting Nodes:");
    console.log("HTMLCollection:", cards); // สด
    console.log("NodeList:", queryCards);  // คงที่
    console.log("getElementById:", info.textContent);

    // 3 Manipulating Nodes
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

    // 4 System Dialogs
    alert("Welcome to DOM Practice!");
    const name = prompt("Enter your name:");
    const confirmBox = confirm("Are you sure?");
    const result = document.getElementById("result");
    result.textContent = `Name: ${name} | Confirm: ${confirmBox}`;
    console.log("8️ System Dialogs:", { name, confirmBox });

    // 5 Bonus Challenge: Note Creator
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