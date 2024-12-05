const mynum =[1,2,3,4,5,6,7,8,9,10]
//  const  newNums = mynum.map((num) => {  return num + 5})
// console.log(newNums);
const newNums = mynum
            .map((num) =>num * 10)
            .map((num ) => num +1)
            .filter((num) => num >= 40) 
// console.log(newNums);


/// new method

const num = [1,2,3]

//  const mytotal = num .reduce(function (acc, current){
//     console.log(`acc : ${acc} and cruent :${current}`);
    
//     return acc + current
//  },0)
const mytotal = num .reduce ((acc,current) => acc+current,0)
//  console.log(mytotal);
 

 const shooping_card = [
    {
        item :"js",
        price :2999
    },
    {
        item :"java",
        price :2999
    },
    {
        item :"html",
        price :2999
    },
    {
        item :"css",
        price :12999
    }
    
 ]

 const toprice =shooping_card.reduce((acc, item) =>item.price ,0)
 console.log(toprice);
 
