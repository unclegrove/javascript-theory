// 1. Напишіть скрипт порівняння двох масивів. Виводь у консоль true якщо вони ідентичні, та false якщо ні ( довжина обох массивів однакова )
// ([1, 2, 3], [1, 2, 3]) => true

//--------------------

// 2. Написати скрипт який буде видаляти з масиву елемент та виводити масив після видалення в консоль.
// Якщо такого елемента в масиві немає – виводь у консоль помилку

// const arr = [1,2,3,4,5,6,7]
// const elementToRemove = 2;

//--------------------

// 3. Напишіть скрипт який буде виводити в консоль фрагмент масиву, що містить перші 'n' елементів масиву.
// const arr = [1,2,3,4,5,6,7]
// const n = 2;

// Приклад
// n = 2 => [1,2]
// n = 4 => [1,2,3,4]

//--------------------

// 4. Модифікувати скрипт з задачі 3 щоб можна було працювати також з від'ємним значенням змінної n.
// ( В цьому випадку потрібно виводити останні елементи )

// Приклад
// n = -1 => [7]
// n = -3 => [7,6,5]

//--------------------

// 5. Напишіть скрипт, який створює масив елементів, що є сумою відповідних елементів заданих масивів.
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];

// Результат має бути таким масивом – [5,7,9,4,5]

//--------------------

// 6. Реалізувати скрипт фільтру масиву за вказаним типом даних.

// Змінна arr - масив, який міститиме будь-які дані, filterType - тип даних.
// Потрібно створити новий масив, який міститиме всі дані, які були в arr, за винятком тих, тип яких був записаний у змінній filterType.
// Тобто якщо arr = ['hello', 'world', 23, '23', null], і filterType = 'string', то нови масив має бути таким [23, null].

// const arr = ['hello', 'world', 23, '23', null]
// const filterType = 'string'

//==========================================================================================================================

// різні типи значень

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm('Батьки дозволили?');
// }

// console.log(checkAge(11));

// function checkAge(age) {
//   return age >= 18 || confirm('Батьки дозволили?');
// }

// console.log(checkAge(22));

// let min = function (a, b) {
//   return Math.min(a, b);
// };

// console.log(min(2, 5)); // 2;
// console.log(min(3, -1)); // -1;
// console.log(min(1, 1)); // 1;

// =====

// let pow = function (x, y) {
//   // return Math.pow(x, y)
//   let total = x;
//   for (let i = 1; i < y; i += 1) {
//     total *= x;
//   }
//   return total;
// };

// console.log(pow(3, 2)); // 3 * 3 = 9
// console.log(pow(3, 3)); // 3 * 3 * 3 = 27
// console.log(pow(1, 100)); // 1 * 1 * ...* 1 = 1

// const footballTeams = {
//   name: 'Manchester City',
//   tag: 'MANCITY',
//   location: {
//     country: 'England',
//     city: 'Manchester',
//   },
//   stats: {
//     titles: [
//       '8x - EPL Champions',
//       '9x - FA Cup',
//       'Runners Up - Champions League',
//     ],
//   },
// };

// for (const key in footballTeams) {
//   // console.log(key);
//   // console.log(footballTeams[key]);
// }

// footballTeams.tag = 'MCI';
// footballTeams.stats.titles.push('10x - League Cup');
// footballTeams.supporters = 'Best in the world!';
// footballTeams.teamTheme = 'Blue Moon';
// // console.log(footballTeams);

// const keys = Object.entries(footballTeams);
// console.log(keys);

// let someObject = {};

// let isEmpty = function () {
//   for (let key in someObject) {
//     return false;
//   }
//   return true;
// };

// console.log(isEmpty());

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let totalSalary = 0;

// for (let key in salaries) {
//   totalSalary += salaries[key];
// }

// console.log(totalSalary);

// // до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: "Моє меню"
// };

// multiplyNumeric(menu);

// // після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: "Моє меню"
// };
//===========
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'Моє меню',
// };

// const multiplyNumeric = function (obj) {
//   for (let key in obj) {
//     // console.log(menu[key]);
//     // console.log(typeof menu[key]);
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//     console.log(menu[key]);
//   }
// };

// multiplyNumeric(menu);

// let user = {
//   name: 'Іван',
//   age: 30,
// };

// let clone = Object.assign({}, user);

// console.log(user);
// console.log(clone);

// const footballTeams = {
//   firstTeam: 'Ajax',
//   secondTeam: 'Manchester City',
//   thirdTeam: 'Chelsea',
//   fourthTeam: 'Dynamo Kyiv',
// };

// const newFootballTeam = Object.create(footballTeams);

// newFootballTeam.fifthTeam = 'Liverpool';
// newFootballTeam.sixTeam = 'Tottenham';

// console.log(footballTeams);
// console.log(newFootballTeam);

// for (let key in newFootballTeam) {
//   if (newFootballTeam.hasOwnProperty(key)) {
//     console.log(newFootballTeam[key]);
//   }
// }

// console.log('------------------');

// for (let key in footballTeams) {
//   console.log(footballTeams[key]);
// }

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смішної людини',
//     author: 'Федір Достоєвський',
//     rating: 7.75,
//   },
// ];

// let booksCollection = [];

// for (const book of books) {
//   booksCollection.push(book.title);
// }
// console.log(booksCollection);

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// let averageRating = Number((totalRating / books.length).toFixed(1));

// console.log(averageRating);

//Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += object.hasOwnProperty(key);
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values);

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   // Change code above this line

//   let arrayToAdd = [];
//   for (const product of products) {
//     if (propName === 'name') {
//       arrayToAdd.push(product.name);
//     } else if (propName === 'quantity') {
//       arrayToAdd.push(product.quantity);
//     } else if (propName === 'price') {
//       arrayToAdd.push(product.price);
//     }
//   }
//   return arrayToAdd;
// }

// console.log(getAllPropValues('name')); //повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); // повертає [4, 3, 7, 9]
// console.log(getAllPropValues('price')); // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); // []

//Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   // Change code above this line

//   let total = 0;

//   for (const product of products) {
//     if (productName === 'Radar') {
//       total = products[0].price * products[0].quantity;
//     } else if (productName === 'Scanner') {
//       total = products[1].price * products[1].quantity;
//     } else if (productName === 'Droid') {
//       total = products[2].price * products[2].quantity;
//     } else if (productName === 'Grip') {
//       total = products[3].price * products[3].quantity;
//     }
//   }
//   return total;
// }

// console.log(calculateTotalPrice('Blaster')); // повертає 0
// console.log(calculateTotalPrice('Radar')); // повертає 5200
// console.log(calculateTotalPrice('Droid')); // повертає 2800
// console.log(calculateTotalPrice('Grip')); // повертає 10800
// console.log(calculateTotalPrice('Scanner')); // повертає 8100

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const newData = {
//     completed: false,
//     category: 'General',
//     priority: 'Normal',
//     ...data,
//   };
//   return newData;
//   // Change code above this line
// }

// console.log(makeTask({}));
// //повертає { category: "General", priority: "Normal", completed: false }
// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   }),
// );
//повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

//Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// Change code below this line
// function add(...args) {
//   let total = 0;
//   for (const arg of arguments) {
//     total += arg;
//   }
//   return total;
//   // Change code above this line
// }

// console.log(add(15, 27)); // повертає 42
// console.log(add(12, 4, 11, 48)); // повертає 75

//Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27)); // повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // повертає 218

//Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.
//Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.
//Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arr of args) {
//     console.log(arr);
//     if (array.includes(arr)) {
//       matches.push(arr);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // повертає [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // повертає [17, 89, 2]
// //console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // повертає [24, 9, 41]
// //console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // повертає []

//Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };

// //console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles')); // значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook('The last kingdom', 'Dune')); // значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

//Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line

//     for (let i = 0; i < this.potions.length; i += 1) {
//       console.log(this.potions[i]);
//       if (potionName === this.potions[i]) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return this.potions;

//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion('Dragon breath')); // у властивості potions буде масив ["Speed potion", Stone skin"]
// console.log(atTheOldToad.removePotion('Speed potion')); // у властивості potions буде масив ["Stone skin"]

//=======================================================================

//Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

//Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);

//     return this.potions;
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (potionName === this.potions[i].name) {
//         this.potions.splice(i, 1);
//       }
//     }
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (oldName === this.potions[i].name) {
//         this.potions[i].name = newName;
//       } else if (oldName !== this.potions[i].name) {
//         `Potion ${oldName} is not in inventory!`;
//       }
//     }

//     return this.potions;
//   },
//   // Change code above this line
// };

//console.log(atTheOldToad.getPotions()); // для вихідного об'єкта повертає [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
//console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
//console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
//console.log(atTheOldToad.removePotion('Dragon breath')); // у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
//done - console.log(atTheOldToad.removePotion('Speed potion')); // у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
//console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')); // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
//done - console.log(
// atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'),
// ); // у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]
//done - console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })); // в масиві potions останнім елементом буде цей об'єкт
