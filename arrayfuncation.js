const user = {
    username : "anuj",
    price : 999,
    welcome : function(){
        console.log(`${this.username}, welcome to wedsite`);
        // console.log(this);
        
    }
}
//  user.welcome()
//  user .username ="Amit"
// user.welcome()
// console.log(this);

function one (){
    // let username = "anuj"
    // console.log(this);
    
}
// one()
// const two = function(){
    // let username = "anuj"
    //   console.log(this.username);
  
// }
const two  = () =>{
    let username = "anuj"
    console.log(this.username);
}
// two()
// const addtwo = (num1,num2) => {
// return num1 + num2
// }

// console.log(addtwo( 3, 4))

// const addtwo = (num1,num2) => num1 + num2
// const addtwo = (num1,num2) => (num1 + num2)
const addtwo = (num1,num2) => ({username:"anuj"})
console.log(addtwo( 3, 4))

// const myarray  = [ 2,4 ,4,5,67]

// myarray.forEach(()=>{})
