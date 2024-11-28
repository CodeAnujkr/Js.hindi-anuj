//console.log("h");
//console.log("h");
//console.log("h");
//console.log("h");
//console.log("h");
//console.log("h");
//console.log("h");
//console.log("h");

function myname() {
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
    console.log("h");
}
// myname()

/*function addtwonumber (number1 , number2){
    console.log(    number1 +number2
    );
    

}*/
function addtwonumber(number1, number2) {
    // let  result = number1 + number2
    //  return result
    //  console.log();
    //  return number1+ number2
}

const result = addtwonumber(2, 4)
//  console.log("result" , result);

function login(username = "sam") {
    if (!username) {
        // console.log("please enter a username");
        return


    }
    return `${username} just login`
}
console.log(login("anuj"))


// ******************+++++++++++++++++++++++++++++++++++++++++++



function addcard(...number1) {
    return number1
}
// console.log(addcard(200,300,400));

const user = {
    username: "anuj",
    prine: 199
}
function hand(anyobject) {
    console.log(`username is ${anyobject.username} and price id ${anyobject.prine}`);


}
// hand(user)
hand({
    username :"anuj",
    price : 199
})
 const returnmy = [200,300,400,200]

function returnmysecond(getarray){
    return getarray[1]
 }
// console.log(returnmysecond(returnmy));
// console.log(returnmysecond([200,300,400]));
