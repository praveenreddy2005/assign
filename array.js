// let users=["sai krishna","mohan","harsha","balu","praveen"];
// console.log(users[0]);

// let users=["sai krishna","mohan","harsha","balu","praveen"];
// users.map((user)=>{
//     //console.log(user);
//     return user
// })


// let x=users.forEach((user)=>{
//     // console.log(user);
//     return user;
// });
// console.log(x);  //undefined

// let userDetails = {
//     name:Praveen,
//     age:22,
//     company:amazon,
//     sal:55000,
//     details:function(){
//         return 'my name is $(this.name) and i am working $(this.company)'; 
//     }
// };
// console.log(userDetails);
// console.log(userDetails.name);



// let userDetails = [
//     {
//         name:"Praveen",
//         city:"hyd",
//     },
//     {
//         name:"Harsha",
//         city:"knc",
//     },
//     {
//         name:"Krishna",
//         city:"vizag",
//     },
//     {
//         name:"Balu",
//         city:"Mac",
//     },
// ]

// userDetails.map((x)=>{
//     console.log(x);
// });

//!JSON

let userDetails={
    name:"Praveen",
    age:25,
    city:"Hyd"
}
let x= JSON.stringify(userDetails);
console.log("JSON object"+x);

let y=JSON.parse(x);
console.log(y);


