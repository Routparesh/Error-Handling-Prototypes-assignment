
try {
    function getPerson(person) {
        if(!person.name || !person.age) {
            return `Invalid parameter type`
        }else{
            return `{Name: ${person.name}, Age: ${person.age} }`
        }
    }
} catch (error) {
    return `Invalid parameter type`
}

console.log(getPerson({'name':'paresh', 'age': 29}))
console.log(getPerson({name:'paresh'}))
console.log(getPerson(['name', 'age']))
