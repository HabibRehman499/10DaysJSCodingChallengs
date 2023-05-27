// Day 1

// Arithmetic Operators
// Complete the following functions in the editor below:
// 1.	getArea(length, width): Calculate and return the area of a rectangle having sides length  and width .
// 2.	getPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides length  and width .
Solution


function readLine() {
    return inputString[currentLine++];
}

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*   Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    if(length >=1 && length <=1000 && width >=1 && width <=1000  ){
        area = length  * width;
    }
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*   
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*   Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
     if(length >=1 && length <=1000 && width >=1 && width <=1000  ){
        perimeter =2 * ( length  + width);
    }
    
    return perimeter;
}

function main() {
    const length = +(readLine());
    const width = +(readLine());
    
    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}

// Function
// Task
// Implement a function named factorial that has one parameter: an integer, . It must return the value of n!  (i.e., n factorial).
Solution
function factorial(n){
    if(n===0 || n===1 ){
        return 1;
    }
    else if(n>1 && n<10){
        n =n * factorial(n-1);
    }
    return n;
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
// Loops
// Task
// 1.	First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
// 2.	Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s

function vowelsAndConsonants(s) {
   
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelString = '';
let consonantString = '';

// Loop through each character in s
for (let i = 0; i < s.length; i++) {
  const letter = s[i];

  // Check if the letter is a vowel
  if (vowels.includes(letter)) {
    vowelString += letter + '\n';
  } else {
    consonantString += letter + '\n';
  }
}

console.log(vowelString.trim());
console.log(consonantString.trim());

}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}

// -------------------------------------------------------

function getGrade(score) {
    let grade;
    // Write your code here
    score >= 0 && score <= 5  ? grade = "F" : 
    score > 5 && score <= 10 ? grade = "E" : 
    score > 10 && score <= 15  ? grade = "D" :
    score >15 && score <= 20 ? grade = "C" :
    score > 20 && score <= 25 ? grade = "B" : grade =  "A"    
    
    return grade;
}

function getLetter(s) {
    let letter;
    // Write your code here
    let A = ['a',"e","i","o","u"];
    let B = ["b","c","d","f",'g'];
    let C = ["h","j","k","l","m"];
    let other = ["n","p","q","r","s","t","v","w","x","y","z"];
    
    for(let i =0 ; i< A.length;i++){
        if(s[0]== A[i]){letter = "A"}
        else if (s[0]==B[i]){letter ="B"}
        else if (s[0]==C[i]){letter ="C"}
    }
     for(let i =0 ; i< other.length;i++){
         if (s[0]==other[i]){letter ="D"}
    }
     

    switch(letter){
        case A :
        return letter;
        break;
        case B :
        return letter;
        break;
        case C :
        return letter;
        break;
        default:
        return letter;
    }
    
    return letter;
}


// return 2 largest number in array

function getSecondLargest(nums) {
    // Complete the function
    let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max;
      max = nums[i];
    } else if (nums[i] > secondMax && nums[i] < max) {
      secondMax = nums[i];
    }
  }

  return secondMax;
}

// Try, Catch, finally, Throw 

function reverseString(s) {
       
  const orignalInput = s;
        
//   let s = "1234";

try {
  if (typeof s !== "string") {
    throw "s.split is not a function";
  }
  else{
      
  s = s.split("").reverse().join("");
  }

} catch (e) {
  console.log(e);
} finally {
  console.log(s); // Output: "4321"
}

 }

// Throw new Error

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
   
//    try{
       
   
    if(a>0){
        throw new Error( "YES")
    }
    if(a==0){
     throw new Error( "Zero Error")
    }
    if(a<0){
     throw new Error("Negative Error")
    }
//    }
//    catch(e){
//     //    console.log(e);
//    }
}

function main() {
    const n = +(readLine());
    
    for (let i = 0; i < n; i++) {
        const a = +(readLine());
      
        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}


// Object Creation



'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let obj = {
        length : a,
        width:b,
        perimeter: 2*(a+b),
        area: a*b,
        
    }
    return obj;
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}


// Comparing Objects Values using forEach


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    
   
    let count = 0
    objects.forEach((item)=>{
        item.x == item.y ? (count += 1) :""
    });
    return count

    
}


function main() {
    const n = +(readLine());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}
