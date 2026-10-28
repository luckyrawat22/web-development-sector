console.log("haaaryy")

// let boxes = document.getElementsByClassName("box") 
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"
// 
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
  e.style.backgroundColor = "red"
})