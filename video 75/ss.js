
console.log("Hello World"); 
console.log("Hallo Welt"); 

setTimeout(() => {
    console.log("I am insinde setTimeout");
}, 2000);
setTimeout(() => {
    console.log("I am insinde setTimeout 2");
},0);
console.log("The End");
const fn= () => {
    console.log("Nothing")
}
const callback = (arg , fn) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
 let sc = document.createElement("script");
 sc.src = src;
 sc.onload = callback("Harry");
 document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg,fn) => {
    console.log(arg)
    fn("firstarg",() =>{
    arg("secondarg",() => {
    })
    })
})