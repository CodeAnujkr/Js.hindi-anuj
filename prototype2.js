let myname = "anuj      "
console.log(myname.trim().length);
let myname1 = ["anuj","kumar"]
let herpower={
    thor:"hammer",
    spiderman:"sling",

    getsipderpower: function(){
// console.log(`spidy power is ${this.spiderman}`);

    }
}
Object.prototype.anuj = function(){
    // console.log(`Anuj is present in all object`);
    
}
// herpower.anuj()
myname1.anuj()  

//interitancve
const user ={
    username : "anuj",
    email : "anujprajapatigoogle@gmail.com"
}

const teacher ={
makevIDEO : true
}

const tecahersupport ={
    isavaliable :false
}
const TAsupport = {
    makeAssigment: 'JS assigrment',
    fulltime: true,
    __proto__:tecahersupport
}
teacher__proto__ = user

//morden sytnx

// Object.setPrototypeOf(tecahersupport,teacher)

let anotherusername ="anujcode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name});
    console.log(`TRue length is ${this.trim().length}`);

// "anuj".trueLength()    
}
anotherusername.trueLength()
"anuj".trueLength()    
"icetae".trueLength()
