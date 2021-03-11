"use strict";

//1 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
//Функція яка виведе всю інформацію про тварину.

let animal = {
	name: 'Вовк',
	weight: '20kg',
	age: 10,
	midSpeed: 10
}

function showInfo(a){
	for(let key in a){
		console.log(key)
		console.log(a[key])
	}
}

showInfo(animal);

//Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день).

const WAY = 1000;
let howMuch = function getTime(n){
	let a = Math.floor(WAY/n.midSpeed)
	if(a > 12){
		a = a - 12 + a;
	}

	return(a)
}
console.log(howMuch(animal))

//   Функція яка зможе змінити назву тварини на більш детальну. 

let newName = function changeName(n){
	n.name = 'Мелвільский острівний вовк';
	return n;
}
console.log(animal.name)
newName(animal)
console.log(animal.name)

//2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне:
let sides ={
	a: 3,
	b: 5,

//рахувати площу фігури

square(){
	let n = this.a*this.b;
	return n;
},

//рахувати периметр фігури;

perimetr(){
	let n = (this.a*this.b)*2;
	return n;
},

//зроблять фігуру 3-д

pushThirdSide(){
	this.c = 15;
},
//зададуть назву фігури

pushFigureName(){
	this.name = "name";
},
//переведуть значення з сантиметрів у метри

translateToMetr(){
	let c = this.a/100
	let d = this.b/100

	return c, d;
}
}

console.log(sides.square())
console.log(sides.perimetr())
console.log(sides.pushThirdSide())
console.log(sides.pushFigureName())
console.log(sides.translateToMetr())
//T3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

let shoppingCart = {
  tomato: {

    count: 5,
    price: 50,
    buy: false,
    outOfstore: false

  } ,

  potato: {

	count: 3,
	price: 30,
	buy: true,
	outOfstore: false

 } ,

 orange: {

	count: 2,
	price: 70,
	buy: true,
	outOfstore: true

 } ,

 pineapple: {

	count: 1,
	price: 100,
	buy: false,
	outOfstore: false

 } ,

 apple: {

	count: 10,
	price: 35,
	buy: true,
	outOfstore: false

 } 

}
//  Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
let instore = {};
let outstore = {};

for(let key in shoppingCart){
	let a = (shoppingCart[key])
	if (a.outOfstore === false){
		instore[key] = key
	}else{
		outstore[key] = key
	}

}
	
	console.log(`є товари: ${Object.keys(instore)}`)
	console.log(`немає товарів: ${Object.keys(outstore)}`)

// Виводимо список покупок які ми купили.

let bought = {};

for(let key in shoppingCart){
	let a = (shoppingCart[key])
	if(a.buy === true){
		bought[key] = key 
	}
}
console.log(`Куплено: ${Object.values(bought)}`)

// Додаємо функцію яка дозволить купити продукт.

let buylist = {}
Object.assign(buylist, shoppingCart)
for(let key in shoppingCart){
	let a = buylist[key]
	let wonnabuy = confirm(`бажаєте купити ${key}?`)
	if (wonnabuy){
		a.buy =  true
	}else{
		a.buy =  false
	}
}
console.log(buylist)

// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)


let chek = 0;

for(let key in shoppingCart){
		if(shoppingCart[key].buy === true){
			chek += (shoppingCart[key].count * shoppingCart[key].price)
		}
	}
	console.log(`Вартість покупки: ${chek}`)

// Додаємо можливість збільшувати кількість товару.

let shopList = {}
let n ;
Object.assign(shopList, shoppingCart)
for(let key in shopList){
	let quest = confirm(`чи бажаєте збільшити кількість товару ${[key]}?`)
	if(quest === true){
		shopList[key].count += 1
		do{
			n = confirm(`чи бажаєте зільшити ще ${[key]}?`)
				if(n === true){
					shopList[key].count += 1
				}
		}while(n === true);
	}
}

console.log(shopList)

// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

let shopList = {}
let n ;
Object.assign(shopList, shoppingCart)
for(let key in shopList){
	let quest = confirm(`чи бажаєте зменшити кількість товару ${[key]}?`)
	if(quest === true){
		shopList[key].count -= 1
		do{
			n = confirm(`чи бажаєте зменшити ще ${[key]}?`)
				if(n === true && shopList[key].count > 0){
					shopList[key].count -= 1
				}
		}while(n === true);
	}
}

console.log(shopList)

// 4. Задана колекція

let users = [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"},
{name: "Kolya", age: 15, hobby: ["films", "football", "ski"], type: "user"},
{name: "Oleg", age: 20, hobby: ["football", "games", "reading"], type: "Admin"},
{name: "Misha", age: 19, hobby: ["games", "films", "floristics"], type: "user"}]

//Вивести всіх адмінів.

let adminArr = {};

for(let i = 0; i < users.length; i++){
		if(users[i].type === 'Admin'){
			adminArr[i] = users[i].name
		}
}
console.log(Object.values(adminArr))

//Вивести середній вік усіх працівників.
let ages = 0;

for(let i = 0; i < users.length; i++){
	ages += users[i].age
}

console.log(`середній вік працівників = ${Math.floor(ages/users.length)}`)

//Вивести тільки унікальні хоббі працівників.
let hobby = [];

for(let i = 0; i < users.length; i++){
	hobby = hobby.concat(users[i].hobby)
}
let specialHobby = hobby.filter((item) => 
	hobby.indexOf(item) === hobby.lastIndexOf(item)
);
 console.log(specialHobby)