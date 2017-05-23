console.log("*********************************************")
console.log("Hi,I'm a javascript app.")
console.log("*********************************************\n\n\n")

//Prime checker function
const Prime = function IsPrime(number){
    for(let i = 2;i < number;i++){
      if ( number % i === 0 ){
        return false
      }
    return true
  }
}

//number
const n = 100
console.log(Prime(n))
console.log("*********************************************")
