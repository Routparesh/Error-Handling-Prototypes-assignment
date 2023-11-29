const arr = [1,2,3,4,5,]

function numberChecker(arr){
    return function isAvalible(number){
        if (arr.includes(number)){
            return true;
        }else{
            return false;
        }
}}

const checkNum = numberChecker(arr)

console.log(checkNum(3))
console.log(checkNum(6))