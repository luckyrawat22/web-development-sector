console.log ('This is Promise')
console.log('');

let prom1 = new Promise((resolve, reject) => {
    let a =Math.random();
    if(a>0.5){
        resolve("No random number was not supporting you ");
    }
    else{
    setTimeout(() => {
        console.log('Yes I am done');
        resolve("Harry");
    }, 3000);
}
})
let prom2 = new Promise((resolve, reject) => {
    let a =Math.random();
    if(a>0.5){
        resolve("No random number was not  the supporting you ");
    }
    else{
    setTimeout(() => {
        console.log('Yes I am done');
        resolve("Harry 2");
    }, 1000);
}
})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err);
// })
Promises.all([prom1, prom2])
p3.then(() => {
    console.log(a)
}).catch(err=>{
    console.log(err)
})