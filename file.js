let Person = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

let a = new Person('ayush',1999)
// console.log(a)

// console.log(a.prototype)

Person.prototype.calAge = function () {
    return console.log(2022 - this.birthYear)
}

// console.log(Person.prototype.isPrototypeOf(a))

// a.calAge()

// console.log(Person.prototype)

let aConFunc = function(make, speed) {
    this.make = make
    this.speed = speed
}



aConFunc.prototype.accelerate = function(){
    this.speed += 10
    console.log(`${this.make} is going with speed ${this.speed}`)
}


aConFunc.prototype.greet = function() {
    console.log(`Hey ${this.make}`)
}


// let b = new aConFunc('BMW',10)

// // b.accelerate()

// // b.greet()

// let obj = {
//     owner:'Mohit',
//     FruitsArr : ['apple','banana', 'mango'],

//     get fruits(){
//         let [apple, ,] = this.arr
//         return apple
//     },

//     set addFruit(fruit) {
//         this.arr.push(fruit)
//     }
// }

// console.log(obj.addFruit ='CHERRY')

// let arr = ['apple','banana', 'mango']




//------------------------> Getter & Setter JS

let obj = {
    name:'Mohit',
    mobiles:['Redmi note 9','Redmi note 10','Redmi note 11'],

    get letestMobile(){
        return this.mobiles.slice(-1).pop()
    },

    set setLetestMobile(mob){
        this.mobiles.push(mob)
    }

}

obj.setLetestMobile = 'Redmi note 11'


// console.log(obj.letestMobile)


let steven = Object.create({calAge(){
    return 2022 - this.birth
}})

steven.name='mohit'
steven.birth = 1999

// console.log(steven.calAge())

//ES6 Classes

// class Car {
//     constructor(make, speed){
//         this.make = make,
//         this.speed = speed
//     }

//     accelerate(){
//         this.speed += 10
//         console.log(`${this.make} is running on speed ${this.speed} km/h`)
//     }


//     break(){
//         this.speed -= 5
//         console.log(`${this.make} is running on speed ${this.speed} km/h`)
//     }

//     get SpeedUs(){
//         return console.log(this.speed/1.6,'mi/h')
//     }

//     set SpeedUs(speed){
//         return console.log(speed*1.6)
//     }

// }

// let ford = new Car('ford',100)
// ford.accelerate()
// ford.break()
// ford.accelerate()
// ford.SpeedUs = 100


// console.log(ford)


// const Teacher{
//     constructor(name,birth){
//         this.name = name,
//         this.birth = birth
//     }

// }

// Teacher.prototype.calAge = function() {
//     console.log(2022 - this.birth)
// }

// class Student{
//     constructor(name,birth,course){
//         // this.name = name,
//         // this.birth = birth,
//         Teacher.call(this.course,name,birth)
//         this.course = course
//     }
// }

// Student.prototype = Object.create(Teacher.prototype)

// Student.prototype.introduce = function(){
//     console.log(`I'm ${this.name} and I'm student of ${this.course}`)
// }

// let Mike = new Student('Mike',1999,'CS')
// // Mike.calAge()
// console.log(Mike.calAge())

// let Teacher = function(name,birth){
//     this.name = name,
//     this.birth = birth
// }

// Teacher.prototype.calAge = function(){
//     console.log(2022 - this.birth)
// }

// let Student = function(name, birth,course){
//     // this.name = name,
//     // this.birth= birth,
//     Teacher.call(this,name,birth)
//     this.course = course
// }

// Student.prototype = Object.create(Teacher.prototype)

// let mike = new Student('Mike',1999, 'CS')

// console.log(mike)

let Car = function(make, speed){
    this.make = make,
    this.speed = speed
}


Car.prototype.accelerate = function(){
    this.speed += 20
    // this.battery -= 1
    console.log(`${this.make} is goint with the speed of  ${this.speed} with a charge of ${this.battery}` )
}

let EV = function(make,speed,battery){
    Car.call(this, make,speed),
    this.battery = battery
}


EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeTo = function(batt){
    this.battery = batt
}

EV.prototype.accelerate = function(){
    this.speed += 20
    this.battery -= 3
    console.log(`${this.make} is goint with the speed of  ${this.speed} with a charge of ${this.battery}` )
}



EV.prototype.break

let c = new EV('BMW',200,50)
c.chargeTo(70)
console.log(c)
c.accelerate()










