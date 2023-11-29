class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        if (!this.name || !this.age){
            return(`Name: "Unknown", Age: 0`);
        }else{
            return(`Name:${this.name}, Age:${this.age}`)
        }
    }
}


const person1 = new Person('Paresh',29);
console.log(person1.getDetails())

const person2 = new Person();
console.log(person2.getDetails())