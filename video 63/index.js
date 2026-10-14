let arr=[1,2,4,5,7]
console.log(arr)
console.log(arr.length )
console.log(arr[0])
console.log(arr[2])
console.log(arr.toString())
console.log(arr.join(" and "))


// let obj={
//     a: 1,
//     b: 2,
//     c: 3,
// }
// for(const key in obj){
//     if( Object.hasOwnProperty.call(Object, key)){
//         const element = object[key];
//         console.log(element)
//     }
// }
for(const iterator of arr){
    console.log(iterator)
}