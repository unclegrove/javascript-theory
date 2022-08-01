// let hugeNumber = 10000000;
// console.log(hugeNumber);
// hugeNumber = 1e7;
// console.log(hugeNumber);

// let smallNumber = 0.000001;
// console.log(smallNumber);
// smallNumber = 1e-6;
// console.log(smallNumber);

// console.log(Math.round(Math.random() * (10 - 0) + 0));

/*let x = 6.35;
console.log(Number(x.toFixed(1))); // Wrong rounding;
console.log(Math.round(x * 10) / 10); // Correct rounding;
*/

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2);
//   console.log(i);
// }

// let randomString = 'Доброго вечора ми з України!';
// console.log(randomString);
// randomString = randomString.replace('Доброго вечора', 'Доброго ранку');
// console.log(randomString);

// let testWord = 'Samsung';
// console.log(testWord);
// let normalizedTestWord = testWord.charAt(0).toLowerCase();
// console.log(normalizedTestWord + testWord.slice(1, testWord.length));

// let indexWord = 'Welcome to the hell';
// console.log(indexWord.indexOf('t'));

// const welcomeMessage = 'Welcom my friend!';
// console.log(welcomeMessage.includes('my'));

// const letterToCompareOne = 'a';
// console.log(letterToCompareOne.codePointAt());
// const letterToCompareTwo = 'A';
// console.log(letterToCompareTwo.charCodeAt());
// console.log(letterToCompareOne > letterToCompareTwo);

// let stringUnicode = '';
// for (let i = 65; i <= 220; i += 1) {
//   stringUnicode += String.fromCodePoint(i);
// }
// console.log(stringUnicode);

// const stringExampleOne = `Hello
// * Anton
// * Vasyl
// * Yana`;
// console.log(stringExampleOne);

// const stringExampleTwo = 'Hello\n * Anton\n * Vasyl\n * Yana';
// console.log(stringExampleTwo);

// console.log('' + 1 + 0); //  '10'
// console.log('' - 1 + 0); // '-1'
// console.log(true + false); // 1
// console.log(6 / '3'); // 2
// console.log('2' * '3'); // 6
// console.log(4 + 5 + 'px'); // '9px'
// console.log('$' + 4 + 5); // '$45'
// console.log('4' - 2); // 2
// console.log('4px' - 2); // NaN
// console.log('  -9  ' + 5); // '  -9  5'
// console.log('  -9  ' - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(' \t \n' - 2); // -2

//console.log(!!'0'); // => !!  === Boolean('0')

// const userName = prompt("Who's there?");

// if (userName === 'Admin') {
//   let userPassword = prompt('Password?');

//   if (userPassword === 'Master') {
//     alert('Welcome!');
//   } else if (userPassword === '' || userPassword === null) {
//     alert('Cancelled');
//   } else {
//     alert('Wrong password!');
//   }
// } else if (userName === '' || userName === null) {
//   alert('Cancelled');
// } else {
//   alert("I don't know you");
// }

// const questionInput = prompt(
//   'What is the "official" appellation of Java Script?',
// );

// if (questionInput === 'ECMAScript') {
//   alert('Correct!');
// } else {
//   alert("Wrong! You don't know? It's ECMAScript!");
// }

// let userNumber = prompt('Enter the number');

// if (userNumber > 0) {
//   alert('1');
// } else if (userNumber < 0) {
//   alert('-1');
// } else {
//   alert('0');
// }

// let a = 2;
// let b = 1;
// let result = a + b < 4 ? 'Нижче' : 'Вище';
// console.log(result);

// let login = 'Працівник';
// let message =
//   login == 'Працівник'
//     ? 'Привіт'
//     : login == 'Директор'
//     ? 'Вітаю'
//     : login == ''
//     ? 'Немає логіну'
//     : '';

// console.log(message);
