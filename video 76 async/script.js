// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 6500);
//     })
// }
async function getData() {
//    let x= await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   let data=await x.json()
//   console.log(data)
let x = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "POST",
  body: JSON.stringify({ username: "example" }),
});
  headers: {
    "Content-Type": "application/x-www-form-urlencoded";
  };
}),
let data = await x.json()
return data
}
async function main(){
    console.log("Loading modules")
    console.log("Do something else")
    console.log("Load data")
    let data = await getData()
    
    console.log(data)
    
    console.log("Process data");
    console.log("Display data");
}
main()
// data.then((v) => {   
// console.log(data)

// console.log("Process data");
// console.log("Display data");
// })
// settle means rresolve or reject
// resolve means promise has settled successfully 
// reject means promise has not snttled successfully