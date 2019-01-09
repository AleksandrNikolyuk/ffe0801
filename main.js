
// -----------  вывести цифры от 1 до 10 ---------

for (let i = 1; i <= 10; i++) {
    console.log(i);
 };

// ----------- перебираем содержимое обьекта и выводим в консоль -----------

 let person = {
    name: 'Alex',
    surname: 'Nik',
    age: 20,
    phone: 38093,
    city: 'Kiyv',
  };
  
  for ( let key in person ) {
    console.log( key, person[key] );
  };

// ------------ перебираем массив и выводим в консоль ------------

let count = [1, 2, 3, 4, 5, 6, 7];

for ( let value of count ) {
  console.log( value );
}

// ------------ цикл в котором рандомно генерируются 10 чисел 
//              от 5 до 20 и выводится в консоль в виде массива   -------

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
   
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push( getRandomIntInclusive(5, 20) );
}
console.log( arr );