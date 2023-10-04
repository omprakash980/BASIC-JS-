
/*-------------Invoking functions----------------------- */


// function a(){
//     function b(){
       
//         let myVar = 10;
   
//         console.log(myVar);
//     }
//     // var myVar = 2;
//     // console.log(myVar);
//     b();
//  } 
// let myVar = 10;
// a();
// // b();
// // console.log(myVar);
/* -------------------------------------------Hoisting---------------------------------------------------------------------*/
/* var a = 10;
function a() {
    console.log("Om");
} 
where in its first phase or creation phase , it only saves the variables  keys without values and  it save whole  function in memory space, 
In the second phase of execution phase , it gives values and it'll call the function if the function called in code , That is called "Hoisting" */
/* Coercien 
var a = 5; b = '6';
var c= a+b; ** 56In coerican , itll change the other value to string when the integer followed by string .
convert a value to another value is called coiercian
*/
// function greet(name){


//     name = name || "Omprakash"; // using or operator to give a value to name , if there i a value, if not execute omprakash
//     console.log("hello "+ name);
// }
// greet(1);


// //////--------------------------------------------------------OBJECTS--------------------------------------------------------- ///////////////////
// var biname = new Object();
// biname["firstname"] = "Omprakash";
// var fn = "firstname";
// biname.lastname = "reddi";
// console.log(biname["firstname"]);
// console.log(biname["lastname"]);
// biname.address = new Object();
// biname.address.street = "105,snm nagar,parvathipuram";
// console.log(biname.address.street);
// var ram = {
//     firstname : "Omprakash",
//     lastname : "reddi",
//     address : {
//         street : "105 ,snm nagar",
//         town : "Parvathipuram"
//     }
// }
// function greet(person){
//     console.log("Hi" + (person.firstname || "tony"));
// }
// greet({
//     firstname : "Remo",
//     lastname : "Aparchithadu"
// });
// 
/* --------------------------------------------Types of Functions ---------------------------*/
// function greet(){
//     console.log("Hi"); //greet included
// }
// greet();
// var anonymousgreet = function(a){ //only var included
//     console.log("Hey"); //called in execution phase
//     a.function(); // calling the object function
//     // a.secondname = "Sadhvi";
// }
// anonymousgreet({     // var anonymougreet creating memory and placing functions 
//     function(){
//         console.log("R WE REMO");

//     }
// }); 


///*--------------------------- Reference by value ------------------*///
// var a = 5;
// var b;

// b = a;

// a = b;
// console.log(b);
// console.log(a);
// console.log(b);
// var c = {
//     name : "Remo"
// }
// var d;
// d=c;

// c = {
//     age : 26
// }
// console.log(c);
// console.log(d);
// c.name = "Ramu";
// console.log(c);
// console.log(d);
// d = c;
// // c = {
// //     name : "Aparchithadu"
// // }
// d.name = "Nandhini";
// console.log(c);
// var Shyam = function(obj){
//     obj.Shyam = "Shyam";

// }
// console.log(c);
// console.log(d);
// Shyam(d);
// console.log(d);
// console.log(c);
// c = function(d){
//     d.c = "Hoyro";
// }
//  c(d);
// console.log(d);

// console.log(self);
// var newvariable;

//*--------------------------------------------This & Objects --------------------------------------------------------*//
// var num = 89;
// number = 55;
// function a(){
//     console.log(self);
//     var omo = "omu";
//     console.log(omo);
//     self.newvariable = "ram";
//     self.num = 90;
// }

// a();
// console.log(newvariable);
// console.log(num);
// console.log(number);

// var c = {
//     name : "ji",
    
//     log : function() {
//         var self = this;
//         self.name = "Shyam";
//          console.log(self.name);
//         console.log(self);
//          var setname = function(newname){
//             self.name = newname;
//         }
//         setname("name shyam changed to ram");
//         console.log(self.name);

//     },
//     set : function(){
//         var self = this;
//         self.name = "SHyam to ram";
//         console.log(this);
//         console.log(self.name);
//     },
//     v : function(){
//         console.log(this.name);
//     }
// }
// // c.log();
// // c.set();
// c;
// // c.v();
// c.log();
// c.set();

/* --------------------------------------------- Arrays---------------------------------------------------------------*/
// var arr = [
//     "hello",
//     function nam(name){
//         console.log("Hello + ",name);
//     },
//     {
//         name : "Omprakash",
//         age : 25,
//         symbol : console.log("*")
//     },
//     /*--------------------writing more paremeters using others ---------------------*/
//     function remo(firstname,age ,speed, memory,...other){
//         memory = memory || '25';
//         age = age || 55;
//         console.log(firstname);
//         console.log(age);
//         console.log(speed);
//         console.log(memory);
//         console.log(arguments);
//         console.log("arg[4]",+arguments[4]);
//         // console.log(spread);
//     },
//     94,
//     /*---------------semicolon after return automatically invoked, ----------------*/
//     function(){
//         return{
//             firstname : "Tony"
//         }
//     }
// ]
// arr[1](arr[2].name);
// arr[3](arr[2].name,"" ,"1 terahertz", "1 ZETA BYTE",65);
// console.log(arr[5]());
// console.log(arr.length);

/*------------IIFI IMmediately Invoked Functions ---------------*/

// var namee = 'Sundar';
// let rai = "rai";
// (function(name,...others){
//     console.log("hello " + " " +name );
//     var arg = arguments;
//     console.log("Hey" + " " + arg[1] + " "+ arg[2]);
   
//     console.log(arguments);
// }(namee,"Remo",rai));
// function bokka(name){
//     return `hello  ${name}`;
// }
// var bokkaji = bokka;
// function yer(func,arg){
//     return func(arg);
// }

// console.log(bokkaji("ni yamma"));

// console.log(bokka("ji"));
/* ----------------------------IIFI----------------------------------*/
// (function(name){
//     var greeting = "Hello";
//     console.log(window.greeting + " " + name);
// }('John'));
// console.log(this.greeting);

/*-------------------------------------------Closurs-------------------------------------------*/
/*function robo(){
    var arr = [];
    for(i=0;i<3;i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}
var ro = robo();
ro[0]();
ro[1]();
console.log("-------------------------------------");
function robo1(){
    var arr = [];
    for(i = 0; i < 3;i++){
        arr.push(
            (function(j){
                 console.log(j);
            }(i))
        )
    }
   
    return arr;
    
}
console.log(robo1());
var ro1 = robo1();

/*----------------------------new function Function Factories -------------------*/
/* function thepower(word){
    return function(){
    if (word === "High"){
        console.log("Dont touch it,25000 volts high");
    }
    if (word === "Low"){
        console.log("Danger, Current inside");
    }
}
}
var HDanger = thepower("high");
var HAlert = thepower("Low");

HDanger();
HAlert(); */
/*----------------- Testing FUnction Closures ------------- */

// function remo(){
//     var arr = [];
//     for(i = 0; i < 3; i++){
//         arr.push(
//             function(){
//                 console.log(i);
//             }
//         )
//     }return arr;
// }
//  var ramu = remo();
// ramu[0]();
/*----------------  call back functions --------------------*/
// function nim(callback){
//     setTimeout(function(){
//         alert("Time passed 3 seconds");
//     },3000);
//     callback();
// }
// nim(function(){
//     alert("Time passing 1 , 2 , 3");
// },3000);
// nim(function(){
//     alert("agaamanama samstha vidwavimasam");
// },5000);

/*--------------------- call/bind/apply functions ---------------------*/
// var dimple = {
//     firstname : "Omprakash",
//     lastname : "Reddi",
//     getFullName : function(){
//         var fullname = this.firstname + ' '+ this.lastname;
//         return fullname;
//     }
// }
// var dimple2 = (function(lang1 , lang2){
//     console.log("Logged : " + this.getFullName());
//     console.log("Languages :" + lang1 +  " " + lang2);
//     console.log('-------------------------------');
// }.bind(dimple,'en','tl'));
// var dimple3 = {
//     firstname: "Simham",
//     lastname :"puli"
// }
// // var dimple3 = dimple2.bind(dimple);
// dimple2();

// console.log(dimple.getFullName.apply(dimple3));

// console.log("-------------------------------");

// var multiply = function(a,b){
//     return a * b;
// }
// var multiplyby2 = multiply.bind(this,2);
// console.log(multiplyby2(3));
/*----------------------------------------------------------------------------------------------*/
// function mapForEach(arr , fn){
// var newArray = [];
// for(var i = 0 ; i < arr.length;i++){
//     newArray.push(
//         fn(arr[i])
//         );
// }; return newArray;
// }
// var arr1 = [1,2,3];
// var arr2  = mapForEach(arr1 , function(item){
//     return item * 2;
// })
// console.log(arr1);
// console.log(arr2);
// var arr3 = mapForEach(arr2 , function(item){
//     return item > 2;
// });
// console.log(arr3);
// var checkPastLimit = function(limiter, item){
//     return item * limiter;
// }
// var arr4 = mapForEach(arr1, checkPastLimit.bind(this,1));
// console.log(arr4);

// var checkPastSimplified = function(limiter){
//     return function(limiter,item){
//         return item > limiter;
//     }.bind(this,limiter);
// }
// var arr5 = mapForEach(arr1,checkPastSimplified(1));
// console.log(arr5);

//  function name(){
//     document.write("R\n");
//  };
//  name();
// (
//     function(num1 , num2){
//         var x = num1*num2;
//         document.write(x);
//     }
//  )(2,7);

//  var nam = (num1,num2) => {
//     return num1 * num2;
//  };
// document.write("\n"+nam(2,3));
// var greet = (num) => console.log(num*num);
// greet(3);
// var numm = 90;
// {
//     var x = 4;
// }/ ***************** scope level,(global, local variables) _____________________________*************/

// function ni(){
//     console.log(numm);
//     // var x = 10;
//     console.log(c);
// };{
//     var b = "sunami"
// }
// var c = "jimf";
// ni();

// document.greet(greet());
//-------------------------------------rest parameters------------------------//
// function onam(num = 2 , num1  = 5, num2 = 9,...rest){
//     var result = num1* num2* num;
//     console.log(arguments)
//     for(num in rest){
//         result =  rest[num] + result;
//     }
//     console.log(result);
// }
// onam(5,0,8);
//-------------------------------foeach - in - arrays-------------------------//
// var sal = [30,400,490,2100];
// sal.forEach(sali);
// function sali(salary,index,sal) {
//     function sa(){
//         if(index=== 0){
//         return sal.push(sal[3]/10);
//         }
//     }

//     sa();
// };
// console.log(sal)
// //------------------------------Set-----------------------------------------------//
// var sal = [30,49,59,930,20,30,50,59,930,56];
// var salary = new Set();
// for(i of sal){
//     salary.add(i)

// //     salary.add(1);
// //     salary.add(3000);
// //     salary.add(34000);
// }
// console.log(salary);
// var s = salary.entries();
// console.log(typeof(s));
// // console.log(s.length());
// for(i=s.next(); !i.done ;i++ ){
//     console.log(i.value);
// }
//____________________________________________Object Begining story____________________________________________________//

// we can create objects in four ways 
//****** we can create a constructor function and and create other objects with attributes , we can add more if we want */
/*
function obj(name,color,region) {
    this.name = 'rom',
    this.color = 'brown',
    this.region = 'india',
    this.login = function(){
        console.log("Hey" + " " + this.name  + "," + "Welcome man");
    }
}
var o = new obj();
console.log(typeof(o));
var b = new obj('obc', 'red','ind');

b.budget = '400 crores';
// console.log(b);
//create method
/*-------------------- the other way is creating the object in OBJect.create method --------------------------*/
/*
var bob = Object.create(o,{
    budget:{
        value : 50000
    }
});
// console.log(bob);
bob.name = "simham";
bob.color =  "shine red";
bob.region="remo";
console.log(bob);
b.login();
// bob.login();
// // o.login();
for( i in bob ){
    console.log(i ,":" , bob[i]);
}


// we can create objects by object literals
var imo = {
    name : "remo",
    fn : function(){
        console.log("swamy");
    }
}
imo.fn();

//we can objects by constructors
*/

// console.timeEnd("loop time : ");

//   function ck(obj){
//     for(let i in obj){
//       if(obj.hasOwnProperty(i)){
//         console.log("elements were there");
//       }else{
//         console.log("No elements were there");
//       }
//   }
//   }
//   ck(obj);
console.log(77);
var c = document.getElementById("first");
console.log(c);