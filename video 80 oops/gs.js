class user{
    constructor(name){
        this.name = name
    }
    get name(){
        return this._name
}
set name(value){
    if(value.length < 4){
        console.log("Name is too short")
        return
    }
    this._name = value
}               
}
let user = new user ("John");
console.log(user.name);

user.name="Harry";
console.log(user);