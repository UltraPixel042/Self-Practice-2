const yourName = prompt("What is your name", "typing your name...")
console.log(yourName)

const nameConfirm = null
if(yourName?.trim().length !== 0 && yourName.trim() !== null) {
    console.log(yourName.length)
    nameConfirm = confirm(`Are you ${yourName}?`)
}  
nameConfirm ? alert(`Hello, ${yourName}`) : alert(`Hello, Guest`)
