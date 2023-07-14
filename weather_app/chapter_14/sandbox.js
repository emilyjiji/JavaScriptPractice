// class User {
//     constructor(username, email){
//         // set up properties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
// }
function User(username, email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} has logged in` );
    }
}

const userOne = new User('mario', 'mario@thenet.co.uk');
const userTwo = new User('luigi', 'luigi@co.uk');

//the 'new' keyword
//1- creates new empty objects
//2- binds the balue of 'this' to the new empty object
//3- it calls the constructor function to 'build' the object
console.log(userOne, userTwo);
userTwo.login();