const myPet = {
    name: "woopa",
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}
console.log("5 objeto con metodo que recive parametros")
myPet.sayHelloToMyPet("Tomy")