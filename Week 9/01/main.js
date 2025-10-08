const form = document.querySelector("form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const confirms = document.querySelector("#confirm-password")
const submit = document.querySelector("#submit")
const message = document.querySelector("p")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if(password.value !== confirms.value){
        message.textContent = "password and confirm do not match, check again"
        message.style.color = "red"
    }
    if(username.value === "" || email.value === "" || password.value === "" || confirms.value === ""){
        message.textContent = "missing some values, please try again!"
        message.style.color = "red"
    }
    if(username.value !== "" && email.value !== "" && password.value !== "" && confirms !== "" && password.value === confirms.value){
        message.textContent = "your data completed"
        message.style.color = "green"
    }
})

