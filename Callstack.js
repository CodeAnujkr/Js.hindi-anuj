let anjali1 = 10
let anjal2 = 5
addnum =(num1 ,num2)=> {
    let total = num1+num2 
    return total

}

let reault = addnum (anjali1,anjal2)
let reault2 = addnum(10,3)

function one (){
    console.log("one");
    two()
    
}
function two (){
    console.log("two");
    third()
}
function third (){
    console.log("third");
    one()
}
one()
two()
third()
/*
what is call stacik?
ChatGPT said:
ChatGPT
It seems like you might be referring to "call stack," which is a term commonly used in programming. The call stack is a data structure that keeps track of function calls in a program. It works by adding (pushing) function calls onto the stack when they are invoked and removing (popping) them when they are completed. This helps to manage the order of function execution and enables proper memory management.

When a function is called, an entry is pushed onto the call stack that contains information about the function's execution context (such as local variables and the return address). As functions complete, their corresponding entries are popped off the stack.
*/
function functionA() {
    console.log("Function A is starting.");
    functionB();  // Call functionB from within functionA
    console.log("Function A is ending.");
}

function functionB() {
    console.log("Function B is starting.");
    functionC();  // Call functionC from within functionB
    console.log("Function B is ending.");
}

function functionC() {
    console.log("Function C is starting.");
    console.log("Function C is ending.");
}

// Start the execution by calling functionA
functionA();
