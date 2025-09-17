function outerFunction(a){
    function innerFunction(b){
        return a + b
    }
    return innerFunction
}

const addFive = outerFunction(5)
console.log(addFive(3))

const addTen = outerFunction(10)
console.log(addTen(2))