const input = document.querySelector("#keyInput");
const div = document.querySelector("#keyLog");
div.style.color = "black"

input.addEventListener("keydown", function(event){
    let key = event.key
    let p = document.createElement("p")
    p.textContent = `You pressed: ${key}`
    console.log(key)
    result = div.appendChild(p)

    if(key === "Enter"){
        p.style.color = "blue"
    }
});