let a= prompt (" Enter first number")

let b= prompt (" Enter second number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Invalid input: Please enter valid numbers.");
}

let sum = parseInt(a) + parseInt(b)
// try{
//     console.log("The sum is ", sum*x)
// }catch(error){
//     console.error("An error aa gya bhai", error.message)
// }
// finally{
//     console.log("Files are being closed a Db connection is being closed")
// }
function main(){
try{
    console.log("The sum is ", sum*x)
    return true
}catch(error){
    console.error("An error aa gya bhai", error.message)
    return false;
}
finally{
    console.log("Files are being closed a Db connection is being closed")
}
}
let c= main() 