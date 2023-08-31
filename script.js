//Example of promise
// const a = new Promise((resolve,reject) =>{
//     if(5>1)
//     {
//         resolve("Promise is resolved/fulfilled")
//     }
//     else
//     {
//         reject("Promise is rejected")
//     }
// })
// console.log(a);

// const b = parseInt(prompt("Enter the number"));
// const a = new Promise((resolve,reject) =>{
//     if(b%2==0)
//     {
//         resolve("Even Number")
//     }
//     else
//     {
//         reject("Odd Number")
//     }
// })
// console.log(a);

// const b = parseInt(prompt("Enter Your Age"));
// const a = new Promise((resolve,reject) =>{
//     if(b>18)
//     {
//         resolve("Eligible to vote")
//     }
//     else
//     {
//         reject("Not Eligible to vote")
//     }
// })

// a.then((data)=>console.log(data)).catch((error)=>console.log(error))

// Promise in function: Function returns the promise
// for a promise if there are both resolve and reject then it executes in the order.
// function foo(num){
//     return new Promise((resolve,reject)=>{
//         resolve("this is resolved"+" "+num);
//         reject("this is rejected"+" "+num);
//     });
// }
// foo(12).then((data)=>console.log(data)).catch((error)=>console.log(error))

//Promise Chaining
// function mul(num){
//     return new Promise((resolve,rejet)=>{
//     setTimeout(() => resolve(num * 2),2000);
//     });
// }
// mul(5).then((ele)=>{
//     console.log(ele); //10
//     return mul(ele); //return mul (10)
// }).then((ele1)=>{
//     console.log(ele1); //20
//     return mul(ele1); // return mul(20)
// }).then((ele2)=>console.log(ele2)).catch((error)=>console.log(error))

//promise.all()

