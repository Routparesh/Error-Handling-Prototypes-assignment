
try {
    function getPerson(person){
        this.name = person.name;
        this.age = person.age ;     
        if(person.name || person.age){
            return `Invalid Parameter`
        }else{
            return `{${person.name}, ${person.age}}`
        }    
    } 
} catch (error) {
    console.log(`Invalid Parameter`)
}

const person = new getPerson([])

console.log(person)