// 1- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, producer, year, maxSpeed, volume){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    this.info = function (){
        console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maxspeed - ${this.maxSpeed}, volume - ${this.volume}`);
    };
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue){
        this.year = newValue;
    };
    this.addDriver = function (driver){
        this.driver = driver;
    };
}

let car = new Car('Жигулі', 'СССР', 1971, 140, 1.2);
console.log(car);
console.log("***");
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(1980);
car.addDriver("Sasha");
console.log(car);
car.drive();
car.info();

console.log("**********");


// 2- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {

    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    };
    info (){
        console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maxspeed - ${this.maxSpeed}, volume - ${this.volume}`);
    };
    increaseMaxSpeed (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear (newValue){
        this.year = newValue;
    };
    addDriver (driver){
        this.driver = driver;
    };
}
let car1 = new Car('Жигулі', 'СССР', 1971, 140, 1.2);
console.log(car1);
console.log("***");
car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(1980);
car.addDriver("Sasha");
console.log(car1);
car.drive();
car.info();

console.log("**********");

// 3-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {


    constructor(herName, herAge, footSize) {
        this.herName = herName;
        this.herAge = herAge;
        this.footSize = footSize;
    }
}
let cinderellasArr = [
    new Cinderella('yulia1', 15, 31),
    new Cinderella('olia2', 17, 33),
    new Cinderella('clara3', 19, 27),
    new Cinderella('yana4',21, 30),
    new Cinderella('sveta5', 23, 33),
    new Cinderella('tania6', 25, 34),
    new Cinderella('fiona7', 29, 31),
    new Cinderella('roma8', 32, 34),
    new Cinderella('katia9', 35, 32),
    new Cinderella('lena10', 41, 33)
];
console.log(cinderellasArr);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {


    constructor(princeName, princeAge, foundShoes) {
        this.princeName = princeName;
        this.princeAge = princeAge;
        this.foundShoes = foundShoes;
    }
}
let prince = new Prince('Johnyyy', 32,27);
console.log(prince);

console.log("**********");

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let couple = (cinderellasArr, prince) =>{
    for (let element of cinderellasArr) {
        if (element.footSize === prince.foundShoes ){
            return `це вона : ${element.herName}`;
        }
    }
};
console.log(couple(cinderellasArr, prince));

console.log("**********");


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(cinderellasArr.find(value => value.footSize === prince.foundShoes));


console.log('*** THE END ***');

