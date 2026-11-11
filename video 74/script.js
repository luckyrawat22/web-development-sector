 let button = document.getElementById("btn")

 button.addEventListener("dblclick",()=>{
     document.querySelector(".box").innerHTML ="<b> Yayy you are clicked </b> Enjoy your click!"
 })
 button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click PLease")
 })
 button.addEventListener("mouseover",()=>{
    document.querySelector(".box").innerHTML ="<b> Yayy you are hovered </b> Enjoy your hover!"
 })
 button.addEventListener("mouseout",()=>{
    document.querySelector(".box").innerHTML ="<b> Yayy you are out </b> Enjoy your out!"
 })
 document.addEventListener("keydown",(e)=>{
 console.log(e,e.key,e.keyCode)
 })