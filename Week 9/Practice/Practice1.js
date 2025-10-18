const message = document.querySelector("#message");
const display = document.querySelector("p");
const input = document.querySelector("#text")
const div = document.createElement("div")

message.addEventListener("input", function() {
    for(let i = 0; i < message.value.length; i++) {
        let text = `You pressed: ${message.value[i]}`
        display.textContent = text
    }
})

input.addEventListener("keydown", (event) =>{
    const p = document.createElement("p")
    if (event.key === "Enter"){
        p.textContent = "You pressed: Enter"
    }
})

div.appendChild(p)