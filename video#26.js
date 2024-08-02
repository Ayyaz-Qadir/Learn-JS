/******  Filter Map & Reduce  ******/

// const coding = ["js", "rb", "py", "java", "cpp"];

// const values = coding.forEach((item) => {
//     console.log(item); 
//     // return item;
// });
//// NOTE: ForEach loop not return the value even we use return keyword it will return undefined
// console.log(values);

const  myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNumbers = myNumbers.filter((num) => num > 4 ) // filter method return the value & in () it automaticaly return the value without using return
// const newNumbers = myNumbers.filter((num) => { // if we use curly brakets then we use return 
//     return num > 4;
// } ) 
// console.log(newNumbers);

// const newNums = []

// myNumbers.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// });
// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2007},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2010},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2014},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2010},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
]

let userBooks = books.filter( (bk) => bk.genre == 'History' );
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre == "History";
});

// console.log(userBooks);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => num + 10 );
// const newNums = myNums.map((num) => { return num + 10} );
// console.log(newNums);

// const addTen = []
// myNums.forEach((num)=>{
//     addTen.push(num + 10)
// });
// console.log(addTen);

// NOTE: Two time use map method

const twoMaps = myNums
                .map( (num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40);

// console.log(twoMaps);

const userNumbers = [1, 2, 3]

// const addArray = userNumbers.reduce((acc, curr_value) => {
//     console.log(`Accumelator Value ${acc} & Current Value  ${curr_value}`);
//     return acc + curr_value;
// } ,0);
// console.log(addArray);

// const addArray = userNumbers.reduce(function (acc, curr_value){
//   console.log(`Accumelator Value ${acc} & Current Value  ${curr_value}`);
//       return acc + curr_value;
// },0);
// console.log(addArray);

const shoppingCart = [
    {
        item: "js course",
        price: 999
    },
    {
        item: "py course",
        price: 3999
    },
    {
        item: "mobile dev course",
        price: 1999
    },
    {
        item: "data science course",
        price: 2999
    },
]

const totalprice = shoppingCart.reduce((acc, item)=>{
    return acc + item.price
}, 0);

console.log(totalprice);




