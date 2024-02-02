
/* let name = "Abhi Raghav"
console.log(name);
x=34;
y=45;
z=x+y;
console.log(z);  
{
    let a =10;
    console.log(a);
}
{
    let a=67;
    console.log(a);
}

const student = {

     Name : "Abhishek Raghav",
     class : "Btech Cse",
     Roll : 2014306812,
     Marks : 354, 
     Cgpa : 8.6,
     IsPass: true, 
     Age : 23


};
student ["Age"] = student ["Age"] + 1;

const Insta ={
    Id: "Shradha Mam",
    Isfollow: true,
    Message : "yes",
    Posts : 195,
    followers : "569K",
    following : 4,
    Name : "Shradha Khapra",
    Tag : "@shradhakhapra",
    Designation:"Enterprenour",
    Expreiance : "Apna College | Ex-Microsoft | DRDO",
    Thought : "To educate someone is the highest privilege"


    //this is variable in Javascript
} */

//Arithmetic operator in JAvaScript


// let a=5;
// let b=2;

// console.log("a = ",a  ," & b = ",b);
// console.log("a+b = " ,a+b );
// console.log("a-b = ",a-b);
// console.log("a*b = ",a*b);
// console.log("a/b = ", a/b);
// console.log("a%b = ",a%b);  //modulus operator
// console.log("a ** b = ",a ** b);


//Unary operator

// let a=5;
// let b=2;

// console.log("a = ",a  ," & b = ",b);

// a--;
// console.log("decreament a = ",a);

// b++;
// console.log("increament b = ",b);



// Assingment Operator

// let a=5;
// let b=2;

// console.log("a = ",a  ," & b = ",b);

//  a += 4;
//  console.log(" a = ",a);

// a -= 4;
// console.log(" a = ",a);

// a *= 4;
// console.log(" a = ",a);

// a %= 4;
// console.log(" a = ",a);

// a /= 4;
// console.log(" a = ",a);

// a **= 4;
// console.log(" a = ",a);

// Comparision operator
// let a=5;
// let b=6;

// console.log(" a == b",a==b);
// console.log("a!=b",a!=b);

// logical operator

// let a=5;
// let b=6;

// let cond1 = a < b;
// let cond2 = a == 5;

// console.log("cond1 && cond2 =  ", cond1 && cond2);

// conditional ststement ;

// let age =10
// if (age>18){
//       console.log("You are eligible for vote ");
// }
// else{
//     console.log("You are not eligible for vote");
// }


// odd or even check

// let a=13;
// if (a%2===0){
//     console.log(a,"is Even");
// }
// else{
//     console.log(a," is Odd");
// }

// let mode ="light";
// let  color

// if(mode=== "black"){
//     color ="white";
// }
// else if(mode=== "dark"){
//     color = "Yellow";
// }

// else if(mode === "light"){
//     color =" blue"
// }

// else{
//     color = "green"
// }
// console.log(color);

// if (mode==="light") console.log(mode);


// ternary operator 

// let age=13;

// let result =age >=18 ? "Adult " : "Not adult";
// console.log(result);

//switch case

// let expr= "Apple";

// switch (expr) {
//      case "Mango" :
//         console.log("Mango price is 100 Rs per kg ");
//      break;

//      case "Apple" :
//         console.log("Apple price is 1000 Rs per kg ");
//      break ;

//      case "Orange" :
//         console.log("Orange price is 10 Rs per kg ");

//         default:
//             console.log("Sorry Not Available")

//     }

// Prompt and Alert 

//alert("HELLO TO USER");

// let result = prompt("Enter Your Name ");
// console.log(result);

// let num =prompt("Enter a Number");

// if (num%5===0){
//     console.log(num,"   is multiple of 5");
// }
// else{
//     console.log(num," is not multiple of 5");
// }

// Practice Question

// let score =prompt("Enter Your Percentage :  ");
// let Grade;

// if(score >= 90 && score <= 100){
//     Grade ="A";
// }
// else if(score >= 70 && score <= 89){
//     Grade ="B";
// }
// else if(score >= 60 && score <= 69){
//     Grade ="C";
// }
// else if(score >= 33 && score <= 59){
//     Grade ="D";
// }
// else {
//     Grade = "Fail"
// }
// console.log("According to your Score :! Your Grade is = ", Grade);

// for loop in JavaScript

// for(let i=1; i<=10; i++)
// {
//     console.log(" i = ", i);
// }

// calculate sum of 1 to n

// let sum=0;

// for(let i =1; i <=99; i++){
//     sum = sum+i;
// }
// console.log(sum);
// console.log("loop has ended")

// WHile loop in JavaScript

// let i=1;
// while(i<=10){
//     console.log("I = ",i);
//     i++;
// }

// do while loop in JavvScript


// let i=prompt("Enter value of i");
// do{
//     console.log("I = ",i);
//     i++;
// }while(i<=10);

// For of Loop in Java Script

// let str = "HELLO JAVASCRIPT";

// let size =0; // check   size of the String /line 266,269,272 these line are used for calculate size of string 
// for(let i of str){
//     console.log("str = ", i);
//     size++;

// }
//      console.log(" Size of String = ",size);

// For in loop in java Script 

// let student = {
//     Name : "Abhishek Raghav",
//     Age : 21,
//     IsPass : false ,
//     Cgpa : 7.9,

// };
// for(let key in student){
//     console.log("Key = ",key , "value" ,student[key]);
    
// }

// let student;
 
// for(i=1;i<=10;i++){
//     console.log(i)
// }

//practice Question

// for(i=0;i<=100;i++){
//     if(i%2===0){
     
//         console.log("num = ",i);
//     }
    
// }

//practice Question 2

// let gamenum=45;

// let usernum=prompt("Guess the GAME  NUMBER ")

// while(gamenum != usernum){

//    usernum=prompt("Sorry You Guess Wrong Number ! Please Try Again !")
   
// }
// console.log("Congratulation You Are The Winner! ")


// string in javascript

// let obj={
//     item:"Pen",
//     price : 10,

  
// };
// console.log("The cost of  " ,obj.item,"is",obj.price,"Rupees.");

//template literal

// let obj={
//     item:"Pen",
//     price : 10,
// };
//    let output=`The cost of ${obj.item} is ${obj.price} rupees `;
//    console.log(output); 

// let str = "Hello Javascript";
// let str2="First.JS";

// console.log(str,str2);
// console.log(typeof str);
// console.log(str.length);

//if else statement using promp(input from user)

// let x= prompt("enter your Age ");
// if (x>=18){
//     console.log("You are eligible for Vote \n Now go to csc and apply for voter id card ");
// }
// else{
//     console.log("You are Not eligible for Vote \n Please ensure Your age ");
// }


// let try some example on JavaScript 

// let x;
// for(x=0;x<=10;x++){
//     console.log(x);
// }


// change string to upper case also we use many like str.tolowercase,trim,replace etc

// let str="Hello";

// console.log(str.replace("H","y")); // replace the letter of string 

// let str="Hello";
// let str1="JavaScript";

// let str2= str.concat(str1);
//  console.log(str2);
//also we add with one more type

// let str2= str+str1;
// console.log(str2);

// find chracter on index

// let str = "Hello";
// console.log(str.charAt(0));


// exercise

// let str=prompt("Enter your name to Get Your user Name");
// let str1="@"+str+str.length;
// // let str2=str.length;
// // let str3=str1.concat(str2);
// console.log(str1);

// let string =prompt("hello to js ");
// console.log(string );

//arrays in javascript (Arrays is a collectio of item )

// let marks=[34,56,67,89,89];
// console.log(marks);

// let state=["rajasthan","haryana ", "delhi","goa","Up"];
// console.log(state);

//looping in array 

// let arr=["heroes","superman","zeroes ","robot","Ai"];

// for(let id=0;id<=arr.length;id++){ //for loop
//     console.log(arr[id]);
// }

//for of 

// for(let hero of arr){
//     console.log(hero.toUpperCase());
// // }


//// PRactice  question on array 


// let arr=[85,97,44,37,76,60];
// sum=0;
// for (let val of arr){
//     sum = sum+val;
// }
//   let avg=sum/arr.length;
//   console.log('Average of arr is = ',avg);

// let price=[250,645,300,900,500];

// for(let i=0;i<=price.length;i++){
//     console.log("The price of items : ",price[i]);

//     let offer = price[i]/10;
//     let offerprice=price[i]-offer;
//     console.log("Price after 10% discount : ",offerprice);
// }

//// methods in array(push, pop , convertto String )

// let items=["pizza ", "burger", "chips"];
//  items.push("apple", "guava");//add item 
// items.pop();//delete item
//  console.log(items);


//// convert to string
// let arr=[85,97,44,37,76,60];
// console.log(arr);

// console.log(arr.toString());

//// add two array

// let arr=[43,78,79];
// // let arr2=[56,67];

// // let addarr=arr.concat(arr2);
// // console.log(addarr);
//// add for unshift and delete for shift from start 
// let val= arr.shift();
// console.log(val);

////slice method 

// let items=["Apple","orangre", "guava","Grapes","date"];
// console.log(items);
// console.log(items.slice(1,4));

//// splice(add and delete item at given index)

// let array=[67,89,67,46,78,68,65];
// array.splice(1,2,67,78,89,89,78);
// console.log(array);

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
//let val= companies.shift(1);
//let val =companies.splice(2,1,"ola");
companies.push("Amazon");
console.log(companies);




