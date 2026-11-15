let obj ={
    a: 1,
    b: "Harry"
}
console.log(obj)



class Animal{
    constructor(name){
        this.name =name
        console.log("object is created..")
    }
    eats(){
    console.log("Kha rahan hu")
    }
    jumps(){
        console.log("kood raha hu")
    }
}

class Lion extends Animal{
constructor(name){
    super(name)
    console.log("Lion object is created..")
}

let a = new Animal("bunny")
console.log(a)

let l = new Lion("Simba")
console.log(l)