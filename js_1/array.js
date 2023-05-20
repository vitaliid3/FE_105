// let arr = [];
// let arr2 = new Array();
//
//
// let arr3 = [123, 'string', true];


// let arr4 = [
//   [1,3,5],
//   ['string', 'string2', true, {key: 'value'}],
// ]
//
// console.log(arr4[1][3]["key"]);

// let arr5 = [1, 2, 3, 5];
// console.log(arr5[2]);
//
// let arr6 = [1,2,3,4,5,6]
// console.log(arr6);
// console.log(arr6.length);
//
//Перезаписування значення елемента
// let arr7 = [1,2,3,4,5,6];
// arr7[4] = 123;
// console.log(arr7);

//Додавання елемента..тів в кінець
// let arr8 = [1,2,3,4,5,6]
// arr8.push(123);
// console.log(arr8);
//
//Видалення першого елемента
// let arr9 = [1,2,3,4,5,6];
// let w = arr9.shift();
// console.log(arr9);
// console.log(w);
//
//Видалення останього елемента
// let arr10 = [1,2,3,4,5,6];
// arr10.pop();
// console.log(arr10);
//
//Додавання елемента..тів на початок
// let arr11 = [1,2,3,4,5,6];
// arr11.unshift(123, 321);
// console.log(arr11);
//
//Видалення елементів
// let arr12 = [1,2,3,4,5,6];
// arr12.splice(2, 3);
// console.log(arr12);
//
//Заміна елемента
// let arr13 = [1,2,3,4,5,6];
// arr13.splice(1, 2, 123, 321);
// console.log(arr13);
//
//Додавання елемента
// let arr14 = [1,2,3,4,5,6];
// arr14.splice(1, 0, 123);
// console.log(arr14);
//
//Видалення елемента з кінця
// let arr15 = [1,2,3,4,5,6];
// arr15.splice(-1, 1,);
// console.log(arr15);
//
//Копіювання масива
// let arr16 = [1,2,3,4,5,6];
// let arr17 = arr16.slice(-4,-3);
// console.log(arr17);
//
//Коміювання масива з доповненням
// let arr18 = [1,2,3,4,5,6];
// let arr19 = arr18.concat(7);
// console.log(arr19);
//
// //Пошук елемента
// let arr20 = [1,2,3,4,5,6];
// console.log(arr20.indexOf(7));
// console.log(arr20.includes(7));
//
// //Сортування елементів
// let arr21 = [2,1,4,6,5,3];
// console.log(arr21.sort());
//
// //Дії над елементами масиву
// let arr22 = ['String1', 'Hello', 'Red'];
// let arr22map = arr22.map(function (m) {
//   return "Color: " + m.substr(2)
// })
// console.log(arr22map);
//
//Перетворення рядка в масив
// let arr23 = 'red, green, blue';
// console.log(arr23.split(','));
//
//Перетворення масива в рядок
// let arr24 = ['red','green','blue'];
// console.log(arr24.join(', '));
//
//Цикл FOR
// let arr25 = [2,1,4,6,5,3];
// for (let i = 0; i < arr25.length; i++) {
//   console.log(arr25[i])
// }
//
// //Цикл FOR OF
let arr26 = [2,1,4,6,5,3];
arr26.sort();
for (let item of arr26) {
  console.log(item);
}
