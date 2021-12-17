// 1- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let newArray = [
    new User(1, "Olga", "Abrikosova", 'olgaAbrikos@gmail.com', '+380989898989'),
    new User(2, "Kolya", "Pupkin", 'pupa@gmail.com', '+380989898123'),
    new User(3, "Max", "Bukin", 'bukin@gmail.com', '+380989898124'),
    new User(4, "Petya", "Kolodiy", 'kolodpe@gmail.com', '+380989898125'),
    new User(5, "Andrey", "Abramov", 'andre@gmail.com', '+380989898126'),
    new User(6, "Yulia", "Galiy", 'dljgogjod@gmail.com', '+380989898127'),
    new User(7, "Sasha", "Makar", 'mak@gmail.com', '+380989898128'),
    new User(8, "Vitia", "Kmin", 'kokos@gmail.com', '+380989898129'),
    new User(9, "Genia", "Sukovskiy", 'sukov@gmail.com', '+380989898130'),
    new User(10, "Oksana", "Ruda", 'oksRuda@gmail.com', '+380989898131'),
];
console.log(newArray);

console.log("*****");

// 2- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUsers = newArray.filter(value => value.id % 2 === 0);
console.log(filterUsers);

console.log("*****");

// 3- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUsers = newArray.sort((a, b) => a.id - b.id);
console.log(sortUsers);

// 4- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname, email, phone, order){
        this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
    }
}

let emptyArr = [
    new Client(1,'Dima', 'Gogiashvily', 'chort@gmail.com', '+380991212312', [1,2,3]),
    new Client(2,'John', 'Smit', 'smit@gmail.com', '+380676766609', [4,5,6]),
    new Client(3,'Ivan', 'Bilan', 'balan@gmail.com', '+380671010101', [4,5,6,7,8]),
    new Client(4,'Luba', 'Bear', 'fara@gmail.com', '+380670000000', [4,5,6,true,false,'milk']),
    new Client(5,'Yana', 'Farhudova', 'bears@gmail.com', '+380678888888', [4,5,]),
    new Client(6,'Semen', 'Bartolom', 'bartod@gmail.com', '+380677777777', [4,5,6,78,96,4564,123,4,56,4]),
    new Client(7,'Roman', 'Gryvach', 'gryva@gmail.com', '+380676777777', [4,5,6,'smith',1, true]),
    new Client(8,'Peter', 'Voldemor', 'voldemor@gmail.com', '+380980066609', [4,5,6]),
    new Client(9,'Vova', 'Paziuk', 'rewer@gmail.com', '+380676766666', [4,5,6,7]),
    new Client(10,'Zorian', 'Baliandos', 'sjfo@gmail.com', '+380676766610', [4,5]),
];
console.log(emptyArr);

// 5- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClients = emptyArr.sort((a, b)=> a.order.length - b.order.length);
console.log(sortClients);

console.log("*** THE END ***");