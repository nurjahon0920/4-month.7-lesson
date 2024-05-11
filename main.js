//////////*Array-1*//////////
/*
let getLevel2(n)=;
function getLevel2(n) {
  let newarray = [];
  let t = 2;
  for (let i = 0; i < n; i++) {
    newarray.push(t);
    t *= 2;
  }
  return newarray;
}
let n = 5;
console.log(getLevel2(n));
*/
//////////*Array-3*//////////
/*
let word = prompt("1 nechta so'z kiriting").split(" ");
console.log(word.reverse());
*/
//////////*Array-4*//////////
/*
function number(n) {
  let numberArr = [];
  let y = 0;
  let n=n.length;
  for (let i = 1; i < n; i += 2) {
    numberArr.push(i);
    y += 1;
  }
  console.log(numberArr);
}

let n = 497865;
number(n);
*/
//////////*Array-5*//////////
/*
function evenOrOdd(ARRAY) {
  ARRAY.forEach((element, index) => {
    console.log(
      `${
        element % 2 === 0 ? "Juft" : "Toq"
      } sonning indeksi: ${index}, qiymati: ${element}`
    );
  });
}

let input = [4, 5, 7, 8, 6, 9];
evenOrOdd(input);
*/
//////////*Array-6*//////////
/*
function index(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    console.log(`arr[${i}] = ${arr[i]}`);
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
index(arr);
*/
//////////*Array-7*//////////
/*
function index(arr) {
  let i = arr.length - 1;
  while (i >= 0) {
    console.log(`arr[${i}] = ${arr[i]}`);
    i -= 2;
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
index(array);
*/
//////////*Array-13*/////////
/*
function maxN(arr) {
  return Math.min(...arr.filter((_, index) => index % 2 === 0));
}
let array = [10, 5, 8, 3, 6, 1, 7, 2, 9, 4];
let minJuft = maxN(array);
console.log(" kichik juft indikisli element:", minJuft);
console.log("Massiv uzunligi (n):", array.length);
*/
//////////*Array-14*/////////
/*
function getEvenMax(arr) {
  return Math.max(...arr.filter((_, index) => index % 2 !== 0));
}

let array = [10, 5, 8, 13, 6, 1, 17, 22, 9, 4];
let maxOdd = getEvenMax(array);
console.log("Katta:", maxOdd);
*/
