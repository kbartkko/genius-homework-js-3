//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let newFruts = fruts.map((item) => item.name);
// console.log(newFruts);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i < 10; i +=2 ) {
//     console.log(i)
// }


//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.lpg( `цифра ${i}!` );
//   }

// let i = 0; 
// while (i < 5) {
//     console.log(`цифра ${i}!`);
//     i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let number 

// while (true) {
//     number = +prompt("Будь ласка, введіть число більше за 100");
//     if (!number) {
//         console.log("Будь ласка, введіть число");
//         break;
//     } else if (number >100) {
//         console.log(`Ви ввели ${number}!`);
//         break;
//     } else {
//         console.log("Будь ласка, введіть число")
//     }
// }

// while (number > 100) {
//     number = +prompt("Будь ласка, введіть число більше за 100");
//     if (!number) break;

// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let nameArr = girls.map((item) => item.age);
// console.log(nameArr);

// let summ = nameArr.reduce((sum, item) => sum + item) / nameArr.length
// console.log(summ);