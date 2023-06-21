/*
const coding = ["JS", "KO", "PY", "JAVA", "CPP"];


const values = coding.forEach((item) => {
  return item;
});

console.log(values);
*/

/*
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
  return num > 4;
});
console.log(newNums);
*/
/*
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
*/
/*
//const userBooks = books.filter((book) => book.genre === "History");
const userBooks = books.filter(
  (book) => book.publish >= 1995 && book.genre === "History"
);
console.log(userBooks); 
*/

/*
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const newNums = myNumers.map((num) => num + 10);

const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
*/

const myNums = [1, 2, 3];
/*
const myTotal = myNums.reduce(function (acc, curval) {
  console.log(`acc:${acc} and currval:${curval}`);
  return acc + curval;
}, 0);
*/

const myTotal = myNums.reduce((acc, cur) => acc + cur, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 299,
  },
  {
    itemName: "py Course",
    price: 499,
  },
  {
    itemName: "Mobile Dev Course",
    price: 899,
  },
  {
    itemName: "DSA Course",
    price: 5999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);
