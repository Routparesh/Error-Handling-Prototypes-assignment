class Car{
    constructor(company,model,year){
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription(){
        console.log(`This is a ${this.year} ${this.company} ${this.model}`)
    }
}

const myCar = new Car('Skoda', 'Rapid', 2022)

myCar.getDescription()