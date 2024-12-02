//if 

// const islogged = true
// const temputre = 41
// if (temputre === 40) {
    // console.log("less than 50");
    // 
// }
// else{
    // console.log("temputre greater than 50");
// 
// }
// console.log("excuted")

// scope

// const score = 200
// if (score >20) {
// let power = "fly"
// console.log(`user power: ${power}`);    
// }
// console.log(`user power: ${power}`);

const balabce = 1000

// if (balabce>500) console.log("text"),
// console.log("text2");

// if (balabce <500) {
    // console.log("less than");
    // 
// }
// else if (balabce <750){
    // console.log("less than 750");
    // 
// 
// }
// else if (balabce <900){
//    / // console.log("less than 750");
// 
// }
// 
// else{
    // console.log("less than 1200");
// 
// }



const userlogged = true
const debitcarb = true
const loggedfromgoogle = false
const loggedformemail = true 

if (userlogged&& debitcarb&&2==3 ) {
    // console.log("allow to buy course");
    
    
}
if (loggedfromgoogle|| loggedformemail) {
    // console.log("user logged in");
    
    }


    // new formation


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = "March"

switch (month) {
    case 1:
        console.log("january");
        break;

        case 2:
            console.log("feb");
            break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;
    default:
        console.log("default case match");
        
        break;
}


// trulty


const email = "emailgamil.com"

if (email) {
    console.log("got email ");
    
}
else {
    console.log("dont have user email")
}

// falsy valuse 

// false 0 -0 bignit 0n "" null unfined NaN 

// truely value

// "0" , true ,"false" , " " ,  [] , {} , funcation{ }

if (email.length === 0) {
console.log("arry is empty");

}

const obj = {}
if (Object.keys(obj).length===0) {
    console.log("object is empty");
    
    
}c

// nullish coalescing operators (??) : null ,underfined

let val1 ;
// val1 = 5??10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 10
console.log(val1);

// terinatry

// condition ? true : true

const icetea = 100 
iceteaprice<=80 ? console.log("less than 80") : console.log("more than 80")


