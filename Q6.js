class Calculator{
    static add(val1,val2){
        return val1 + val2;
    }
}

const calculatorInstance = new Calculator();

const result = Calculator.add(1,2)

console.log(result)