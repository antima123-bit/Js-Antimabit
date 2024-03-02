//let score = true
//console.log(typeof score);

//let valueintNumber = Number(score)
//console.log(typeof valueintNumber);
//console.log(valueintNumber);


//"33" = 33
//"33abc" => NaN
//true=>1 , false=>0

//let isloggedIn = ""
//let booleanisLoggedIn= Boolean (isloggedIn)
//console.log(booleanisLoggedIn);

//let isloggedin= ""
//let BooleanisLoggedIn = Boolean(isloggedin)
//console.log(booleanisLoggedIn);

// let someNumber = 33
//  let StringNumber = String(someNumber)
//  console.log(StringNumber);
//  console.log(typeof StringNumber);

 //****************************** Operations **************************** *//

 let value = -2.3
 let negvalue = 1003 * value
 console.log(negvalue);

 let string1 = "antima"
 let string2 = "punnu" 
 let concatstring = string1 + string2
 console.log(concatstring);

 console.log("1" + 2+ 2);
 console.log(2+2+"1");
 console.log(3 + (3*4) + 8 % 7 );

 let gamecounter=110;
 --gamecounter;
 console.log(gamecounter);

 console.log("2" > 3);
 console.log("02" < 1);
 //reason for the operators called ==, >=,<=,<< where the == sign should work differently whereas ><= works differently 
 //comparison convert null to numbers treating it as a 0 that why null >= 0 is true and null> 0 is false
 
 //primitive data types
 // there are 7 caterogy in primitive they are call by values 
 // string , number , boolean , null,undefined,symbol,bigint

const score =100
const scorevalue = 100.3

//to declare the variable we should used the let keyword
const isloggedin= false
const outsidetemp= null
let userEmail;
const Id= Symbol('123')
const anotherid = Symbol('123')
console.log(Id === anotherid);




const id = Symbol('123')
  

 //Reference (non-primitve) there memory are directly allocated 
 //arrays , object , functions

 //typeof undefined = undefined , Null= object , Boolean=boolean,Number=number,
 //String=string 
 const heros =["iron man" , "c.america "];
 let myobj={
    name: "antima",
    age : 19,
 }

 const myfunction = function(){
    console.log("hello world");

 }
 console.log(typeof anotherid);