// object literail

const user = {
    username: "anuj",
    loginCount: 8,
    signIn: true,
    getuserdetail: function () {
        // console.log("got user detail from datebase")
        // console.log(`username is :${this.username}`);
        // console.log(this);
        
        
    }
}

// console.log(user.username);

// console.log(user.getuserdetail);
console.log(this);

// const promiseone = new promise()
// const date = new Date() 

function users(username,logincount , isloggedIn){
    // gkjhdf = Uint8ClampedArray(8)set         ygdgjsgghfshgfgghggdhhgfhdg
this.myusername= username;
this.loginCount = logincount;
this.isloggedIn = isloggedIn;

return this;
this.greeting = function(){
    console.log(`welcome $(this.username`);
    
}
};


const userone = new  users("anuj",12,true);
const usertwo = new users("kumar",11,false);
console.log(userone.constructor);
// console.log(usertwo);
