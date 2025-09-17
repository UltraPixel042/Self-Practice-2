function idGenerator(id){
    let num = 1;
    function id(){
        return num++
    }
    return id
}
const idGen = idGenerator()

console.log(idGen())        // 1
console.log(idGen())        // 2
console.log(idGen())        // 3

