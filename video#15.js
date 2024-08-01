// const tinderUser = new Object(); // it is singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Ali";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ayyaz",
            lastname: "Qadir"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2};

// console.log(obj3); // it will not merge the objects

// const obj4 = Object.assign(obj1, obj2, obj3) // both give the same results
// console.log(obj4);

// const obj5 = Object.assign({}, obj1, obj2, obj3) // both give the same results when adding brakets{} or new empty object

const obj4 = {...obj1, ...obj2, ...obj3} // this is the best way method
// console.log(obj4);

const user = [
    {
        id: 1,
        email: "A1@gmail.com"
    },
    {
        id: 2,
        email: "A2@gmail.com"
    },
    {
        id: 3,
        email: "A3@gmail.com"
    },
] // objects in the array 

console.log(user[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // it get the keys from given object and put into an array and show
console.log(Object.values(tinderUser)); // it get the values from given object and put into an array and show
console.log(Object.entries(tinderUser)); // it give the result one array in which key and value is give another array  
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // it will check the property in the given object 
