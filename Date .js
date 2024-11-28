/// date

let mydate = new Date()
//console.log(mydate);
//console.log(mydate.toDateString())
//console.log(mydate.toLocaleDateString())
//console.log(typeof mydate);
// let mycreate = new Date (2024 , 0 ,24)
let mycreate = new Date ("2024 -01 -14")
//console.log(mycreate.toLocaleString());


let mytime = Date.now()

//console.log(mytime);
//console.log(mycreate.getTime());
//console.log(Math.floor(Date.now()/1000));

// 3`${mytime.getDay()}` and the time 
 let newDate = new Date()

 newDate.toLocaleString('default', {
    weekday : "long",
 })
