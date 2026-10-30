 let button = document.getElementById("btn")

 button.addEventListener("dblclick",()=>{
     document.querySelector(".box").innerHTML ="<b> Yayy you are clicked </b> Enjoy your click!"
 })
 button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click PLease")
 })
 button.addEventListener("context")