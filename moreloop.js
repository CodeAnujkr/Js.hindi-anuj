 const arr = [1,2,3,4,5]
 for (const num of arr) {
    // console.log(num);
    
 }

 const greeting = "hello"
 for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
    
    
 }

 // map

 const map = new Map()
 map.set('IN',"INDIA")
 map.set('IN',"UNITED STATE OF AMERICA")
 map.set('FR',"FRANCE")
// console.log(map);
for (const [key,value] of map) {
    console.log(key,'-:' , value);
    
}

const myobject = {
    'game': 'NFS',
    'game2': 'sipderman'
}

// for (const [key,value] of myobject) {
//     console.log(key,'-:' , value);
   
// }

const myboject1 = {
    js : "javascript",
    html :"hyper text markupo language",
    rd : "rudy"
}

// for (const key in myboject1) {
//     // console.log(myboject1[key]);
    
    
// }
// const progrm = ["js",  "html ", "CSS"]
// for (const key in progrm) {
//     // console.log(progrm[key]);
    
// }

// for (const key in map) {
//     console.log(key);
    
// }

const js = ["js ", "html", "css", "java"]

// js.forEach( function (item) {
//     console.log(item); 
// } )

// js .forEach ( (item) => {
//     console.log(item);
    
// })

// function printme(item) {
//     console.log(item);
    
// }
// js.forEach(printme)


// js.forEach ((item, index, array)=>{
//     console.log(item, index,array);
    
// })
const my = [
    {
        name : "Anuj",
        lauguage : "javascript"
    },
    {
        name : "Anuj",
        lauguage : "javascript"
    },
    {
        name : "Anuj",
        lauguage : "javascript"
    }
]
my.forEach((item)=>{
console.log(item.lauguage);

})
