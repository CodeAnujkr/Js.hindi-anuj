//object leteral / singteton
// Object.create
const mysym = Symbol("key1")
const user = {
    name : "anuj",
    "full name" : "anuj kuamr prapapati",
    [mysym] : "mykey1" ,
    age :10,
    Email : "officalgameranuj@gmail.com",
    lastloginday : ["mondy","tuesday"]

}
//console.log(user);

//console.log(user["Email"]);
//console.log(user.Email);
//console.log(user["full name"]);
//console.log(user[mysym]);

user.greeting = function(){
    console.log("heloo user");
    
}
console.log(user.greeting());
user.greetingtwo = function (params) {
console.log(`hello user` ,$[this.name]);
    
}
console.log(user.greetingtwo());


//user.Email = "anujprajapati2011@gmail.com"

// Object.freeze(user)
//user.Email = "anujprajapati2011@gmail.com"









