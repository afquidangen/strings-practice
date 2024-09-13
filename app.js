//DIFFERENT STRING MANIPULATION

//CONCATENATION
let firstName = "Aly";
let lastName = "Quidangen";
let fullName = firstName + " " + lastName;
console.log(fullName);

//output: AlyQuidangen (it is called as concatenation)
//output: to add space, put ' ' in between, final output: Aly Quidangen

//APPEND METHOD
let firstname = "Aly";
firstname += " something else ";
console.log(firstname);
//output: Aly something else 
//using the append, the first name and something else are combined

//LENGTH
let Firstname = "Aly Faye";
console.log(Firstname.length);
//counting the characters of the firstname variable
//output: 8

//CHANGING CASE
let name = "AliyFayrE qd";
console.log(name.toUpperCase());
//converting the text into uppercase: ALIYFAYRE QD

let name2 = "AliyFayrE qd";
console.log(name.toLowerCase());
// output: aliyfayre qd

//SLICE - count how many characters based on the index
let thename = "Aly Faye";
console.log(thename.slice(0, 3));
//output: Aly, only counting the 3 characters
let thename1 = "Aly Faye Quidangen";
console.log(thename1.slice(0, 10));
//output: Aly Faye Q, 10 characters counted

//SPLIT AND JOIN
//SPLIT into an array where each character becomes an element
let firstName1 = "Aly";
let lastName1 = "Quidangen";
let fullName1 = firstName1 + " " + lastName1;
let splitArray = fullName1.split("");
console.log(splitArray);
//output: [
//   'A', 'l', 'y', ' ',
//   'Q', 'u', 'i', 'd',
//   'a', 'n', 'g', 'e',
//   'n'
// ]

//JOIN
let firstName2 = "Aly";
let lastName2 = "Quidangen";
let fullName2 = firstName2 + " " + lastName2;
let joinedString = splitArray.join("-");
console.log(joinedString);
//output: A-l-y- -Q-u-i-d-a-n-g-e-n

//SPLIT AND JOIB OUTPUT:
// [
//     'A', 'l', 'y', ' ',
//     'Q', 'u', 'i', 'd',
//     'a', 'n', 'g', 'e',
//     'n'
//   ]
//   A-l-y- -Q-u-i-d-a-n-g-e-n

//INCLUDES
let firstName3 = "Aly";
let lastName3 = "Quidangen";
let fullName3 = firstName3 + " " + lastName3;
console.log(fullName3.includes("Aly"));
//output: true, meaning the includes are used to search a certain string of characters or character of string within the variable

//TRIM
let stringWithWhiteSpace = "  Hello, World!  "; //white space: space itself
let trimmedStart = stringWithWhiteSpace.trimStart();
let trimmedEnd = stringWithWhiteSpace.trimEnd();
console.log(trimmedStart);
console.log(trimmedEnd);
// Hello, World!  
//   Hello, World!




