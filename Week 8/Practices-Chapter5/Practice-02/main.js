const box = document.getElementById("box")
const button = document.getElementsByTagName("button")
console.log(button)

Array.from(button).forEach((btn) => {
    btn.addEventListener("click", () => {
        box.style.backgroundColor = btn.getAttribute("data-color")
    })
})