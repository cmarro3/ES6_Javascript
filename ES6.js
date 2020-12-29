// Old Javascript

/*var name = ['Eddy', 'Jhon', 'Sam'];

var counter = 10;

var counter = 5;

console.log(counter);*/

/*var counter = 5;
function sayName(){
    var name = "Chirs";
    console.log(name);
}
sayName();*/

//ES6

// let & const
const todolist = ["Milk", "Eggs"];

//todolist = ["Milk"];

/* Remember you can't change const at all unless you change it using
* index notation or bracket notation. I have notes on how to change it.
* */

let counter = 10;

// let counter = 5;
/* you can't change let unless you write it as
* counter = 5;
* */
console.log(counter);

const list = [1,2,3,4,5];

for( let i = 0; i < list.length; i++){
    console.log(i);
}
// console.log(i)
/* You can't console.log(i) outside of the function because
* let and const are block scopes and can only be printed to
* the console via within the function or what have you. */


// Old Javascript
var name = 'ed'
console.log("hi my name is " + name)
//stopped on 8:05

// ES6
const name1 = 'Chirs';
const age = 22;
console.log('hello, my name is ' + name1 + ' and my age is ' + age);
// you can also write it as ${name1} and ${age}
//ex: console.log('hello, my name is ${name1} and my age is ${age}');


// Old Javascript
function Book(title,author){
    return{
        title:title,
        author:author
    }
}
var getbook = Book('Harry Potter', 'JK');
console.log(getbook);

// ES6

function Book(title,author){
    return{
        title,
        author
    }
}
var getbook = Book('Harry Potter', 'JK');
console.log(getbook);

// Old Javascript

var user = {
    name: "Ed",
    age: 25
}
var myname = user.name;
console.log(myname);

// ES6

const list1 = {
    names: "Shopping list",
    iteams: ["cheese", "candy"]
}

const {names, iteams} = list1;
console.log(names, iteams);

// Old Javascript

/*function sayname(){
    console.log("Hello, I am Chris");
}
var sayage = fucntion(){
    console.log("my age is 22");
}
sayage();
sayname();*/

// ES6

const saylocation = location => console.log("my location is " + location);

saylocation('china');

//you hace to add a bracket when your parmeters are more than one
//ex const saylocation = (location, name) => {}
// you can also getrid of the curly braces if you're returning one thing
// ex const saylocation = location => console.log("my location is " + location);
// if you have multiple lines of code than you cant just get rid the {}

const area = zip => {
    console.log( 'my area is ' + zip);
}
area('chicago');

// Old Javascript

var ux = {
    name: "chris",
    age: 77,
    sayname: function (){
        console.log("my name is " + this.name);
        var that = this;
        var fullname = function (){
            console.log('my name is ' + that.name + ' and my age is ' + that.age);
        };
        fullname();
    }
};
ux.sayname();

// ES6

const uy = {
    name: "Christopher",
    age: 22,
    sayName1: function (){
        console.log('my name is ' + this.name);
        const fullname = () => {
            console.log('my name is ' + this.name + " and my age is " + this.age)
        };
        fullname();
    }
};
uy.sayName1();

/* basic with es6 we get rid of the that = this and much cleaner code*/

// example of something in real life

/*button.addEventListener('click', function (){

    var fade = () => {
here we can see with the arrow indication is for the fade function so we
can use this fun
    }
});*/



// Old Javascript
function multip(x,y){
    var a = x || 1;
    var b = y || 1;
    console.log(a*b);
}
multip(5,10);
multip();

// ES6

const add = (c = 1,d = 1) => {
    console.log(c+d);

};
add(5,6);
add();

// Old Javascript


// ES6
const SHOPPINGLIST = ['pudding', 'milk', 'cheese', 'candy'];
//foreach

/*SHOPPINGLIST.forEach((prop,index) => {
    console.log('The index is ' + index + ' and the product is ' + prop);
});*/

// map

const newlist = SHOPPINGLIST.map(item => item + "new");

console.log(newlist);

//filter

const filterlist = SHOPPINGLIST.filter(item => item === 'cheese');
console.log(filterlist);


// Old Javascript

function Person(name, age, haircolor){
    this.name = name;
    this.age = age;
    this.haircolor = haircolor;
}
Person.prototype.myname = () => console.log("My name is " + this.name + " My age is " + this.age + " my hair color is " + this.haircolor)

function Chris(job, hobby, name, age, haircolor){
    this.job = job;
    this.hobby = hobby;
    Person.call(this, name, age, haircolor);

}

Chris.prototype = Object.create(Person.prototype);

const person = new Chris('Dev', 'Dancing', 'Jackie', 22, 'red')
console.log(person)

person.myname();

// ES6

class ShoppingList{
    constructor(items, num) {
        this.items = items;
        this.num = num;
    }
    sayList(){
        console.log(this.items)
    }
}

const myList = new ShoppingList(['Redbull, Milk, Bread, Candy'],4 )
console.log(myList);
myList.sayList();


class product extends ShoppingList{
    constructor(items, num, amount, cost) {
        super(items,num);
        this.amount = amount;
        this.cost = cost;
    }
}

const product1 = new product(['Redbull, Candy'],2,20, 3.45)
console.log(product);

/*
* When inheriting a class within a class you must have have the 'extend'
* keyword with the class name, along with the parameters and in the
* constructor and add the keyword 'super' plus the parameters.
* */

// Old Javascript
//promise
function getData(data, callback){
    setTimeout(()=>{
        console.log('reading data from database');
        callback({ data: data});
    },1000 )
}
getData(5, (data) => {
    console.log(data);
});

// ES6

const prom = new Promise((resolve, reject) => {
    // here we can is async
    setTimeout(() => {
        //resolve({user: 'Chris', pass: "osakaloop"});
        reject (new Error("it aint working, chief"));
    }, 2000);
});

prom.then(data => {
    console.log(data);
})
.catch(err => console.log(err))
