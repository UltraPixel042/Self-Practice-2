const greet = (name, formatter) => formatter(name)
const shout = text => text.toUpperCase() + '!!!'
const whisper = text => text.toLowerCase() + '~~~'
const hello = text => 'Hello' +' ' + text

console.log(greet('Alice', shout))
console.log(shout("Siwat"))
console.log(greet('Wannawat', whisper))
console.log(greet('Simon', hello))