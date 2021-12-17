//
// 1 - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.addrres = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {lat: lat, lng: lng},
            phone: phone,
            website: website
        };
        this.company = {name: name, catchPhrase: catchPhrase, bs: bs}
    }


}

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556',
    'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net','harness real-time e-markets');

console.log(user);

console.log("*********");


// 2 -  Створити функцію конструктор / клас  який описує об'єкт тегу

// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function Tags(tagName, action, attributeArrName1, attributeArrAction1, attributeArrName2, attributeArrAction2) {
    this.tagName = tagName;
    this.action = action;
    this.attributeArr = [
        this.attributeArrName = attributeArrName1,
        this.attributeArrAction = attributeArrAction1,
    ];
    this.attributeArr2 = [
        this.attributeArrName2 = attributeArrName2,
        this.attributeArrAction2 = attributeArrAction2,
    ];
}



let tag_a = new Tags('a', ' предназначен для создания ссылок', 'href',
    'Задает адрес документа, на который следует перейти', 'name', 'Устанавливает имя якоря внутри документа');
console.log(tag_a);
console.log("***");

let tag_div = new Tags('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    'align', 'Задает выравнивание содержимого тега div', 'title', 'Добавляет всплывающую подсказку к содержимому');
console.log(tag_div);
console.log("***");

let tag_h1 = new Tags('h1', 'представляет собой наиболее важный заголовок первого уровня', 'align',
    'Oпределяет выравнивание заголовка','class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением');
console.log(tag_h1);
console.log("***");

let tag_span = new Tags('span', 'предназначен для определения строчных элементов документа', 'id',
    'Указывает имя стилевого идентификатора', 'contextmenu', 'Устанавливает контекстное меню для элемента');
console.log(tag_span);
console.log("***");

let tag_input = new Tags('input', "позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем",
    'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
    'form', 'Связывает поле с формой по её идентификатор');
console.log(tag_input);
console.log('***');

let tag_form = new Tags('form', 'устанавливает форму на веб-странице', 'action', 'Адрес программы или документа, ' +
    'который обрабатывает данные формы', 'target', 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат');
console.log(tag_form);
console.log('***');

let tag_option = new Tags('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера select', 'label',
    'Указание метки пункта списка', 'value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов');
console.log(tag_option);
console.log('***');

let tag_select = new Tags('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка', 'size',
    'Количество отображаемых строк списка', 'disabled', 'Блокирует доступ и изменение элемента');
console.log(tag_select);
console.log('***');

console.log('*** THE END ***');