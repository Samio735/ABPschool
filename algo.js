const names = ["Samy Rahim","Manel Lakrouz","Oussama Aliouchene","Lotfi Belmedrek","Malak Mehdaoui"]

class Person {
    constructor(name){
        this.name = name
    }
}
let rnd = Math.random() * 5 
let Samy = new Person(names[Math.floor(rnd)])

console.log(Samy.name)