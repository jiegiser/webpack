export function add (a, b) {
 return a + b;
}
export function minius (a, b) {
  return a - b;
}
export function multiply (a, b) {
  return a * b;
}
export function division (a, b) {
  return a / b;
}
// 
// const Person = (name, points) => {
//   this.name = name;
//   this.points = points;
// }
// const jelly = new Person ('Jelly', 5);
// Person.prototype.updatePoints = () => {
//   this.points ++;
//   console.count(this.points)
// }

// const button = document.querySelector('.zoom');
// button.addEventListener('click', () => {
//   this.classList.add('in');
//   setTimeout(() => {
//     this.classList.remove('in')
//   }, 2000);
// })

// const sum = () => {
//   return Array.from(arguments).reduce((prevSum, value) => prevSum + value,0)
// }
// function highLight(string, ...values) {
//   debugger;
//   return 'templa'
// }
// const user = 'jie';
// const topic = 'learn es6';
// const sentence = highLight`${user} has commented on your topic ${topic}`

// const Tom = {
//   name: 'tom',
//   age: 18,
//   family: {
//     mother: 'tom mother',
//     father: 'tom father'
//   }
// }

// for (let item of Tom) {
//   console.log(item)
// }


// const { name, age } =Tom
// console.log(name)
// console.log(age)
// const number = ['one', 'two', 'three', 'four'];
// const [one, two] = number;
// console.log(one, two)


// const number = ['one', 'two', 'three', 'four'];

// for ( let [index, fruit] of number.entries()){
//   console.log(index, number)
// }


// for (item of number) {
//   console.log(item)
// }


// const inventory = [
//   {name: 'apples', quantity: 2},
//   {name: 'bananas', quantity: 0},
//   {name: 'cherries', quantity: 5},
// ]
// const bananas = inventory.find(fruit => {
//   if (fruit.name === 'bananas') {
//     return true
//   }
//   return false
// })

// const youngers = ['george' , 'john', 'Thomas'];
// const olders = ['James', 'Adrew', 'Martin'];

// let members = [...youngers, ...olders];
// members = members.concat(youngers);
// members.push('Mary');
// members = members.concat(olders);


// const todos = [
//   {id: 1, name: 'Go to store', completed: false},
//   {id: 2, name: 'Wacth TV', completed: true},
//   {id: 3, name: 'Go Shopping', completed: false},
// ]
// // 要删除的项的id为2
// const id = 2;
// const todoIndex = todos.findIndex(todo => todo.id === id)

// const newTodos = [...todos.slice(0, todoIndex), ...todos.slice(todoIndex + 1)];

// const fruit = ['apple', 'bananas', 'pear'];
// const newFruit = ['orange', 'mongo'];
// fruit.push(...newFruit)

// const dateField = [2019, 6, 2];
// const data = new Date(...dateField)
// console.log(data);


// const name = 'jiegiser';
// const age = 18;
// const birthday = '0501';
// let id = 0
// const userIds = {
//   [`user-${++id}`]: id,
//   [`user-${++id}`]: id,
//   [`user-${++id}`]: id,
// }

// const keys = ['name', 'age', 'birthday'];
// const values = ['jiegiser', 18, '0501'];
// const jiegiser = {
//   [keys.shift()]: values.shift(),
//   [keys.shift()]: values.shift(),
//   [keys.shift()]: values.shift(),
// }





// let username;
// const usersPromise = axios.get('https://api.github.com/users');

// usersPromise
//   .then(response => {
//     username = response.data[0].login;
//     return axios.get(`https://api.github.com/users/${username}/repos`);
//   })
//   .then(response => {
//     console.log(response.data)
//   })
//   .catch(err => {
//     console.log(err)
//   })


// const p = new Promise((resolve, reject) => {
//   //请求成功执行
//   resolve('success');
//   // 请求失败的执行
//   reject(Error('error'))
// })
// //请求成功执行的回调
// p.then(data => {
//   console.log(data)
// })
// // 请求失败的执行的回调
//   .catch(err => {console.log(err)})


// Promise
//   .all([userPromise, movePromise])
//   .then(response => {
//     const [users, movice] = response;
//     console.log(users);
//     console.log(movice);
//   })

const one = Symbol('one')
const two = Symbol('two')

console.log(one === two)//false
const classRoom = {
  [Symbol('lily')]: {grade: 60, gender: 'female'},
  [Symbol('nina')]: {grade: 80, gender: 'female'},
  [Symbol('nina')]: {grade: 90, gender: 'female'},
}
Object.getOwnPropertySymbols(classRoom)