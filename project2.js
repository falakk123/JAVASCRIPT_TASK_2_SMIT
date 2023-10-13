//Practice exercise 2.1

// let str1 = 'Laurence';
// console.log(str1) //typeof String

// let str2 = "Svekis";
// console.log(str2) //typeof String

// let val1 = undefined;
// console.log(val1) //typeof undefined

// let val2 = null;
// console.log(val2) //typeof object

// let myNum = 1000;
// console.log(myNum) //typeof number

// Addition
// Addition in JavaScript is very simple, we have seen it already. We use + for this
// operation:

// let nr1 = 12;
// let nr2 = 14;
// let result1 = nr1 + nr2;
// console.log(result1)


// However, this operator can also come in very handy for concatenating strings. Note
// the added space after "Hello" to ensure the end result contains space characters:

// let string1 = "Hello ";
// let string2 = "addition";
// let result2 = string1 + string2;
// console.log(result2)

// let strin1 = "Hello ";
// let strin2 = "addition";
// console.log(string1 + string2)

// let number1 = "20";
// let number2 = "23";
// let number3 = number1 + number2;
// console.log(number3)

//Practice exercise 2.2

// Create a variable for your name, another one for your age, and another one for
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are
// variables:
// Hello, my name is Maaike, I am 29 years old and I can code JavaScript:
// true.


// var name = "falak";
// var age = 19;
// var canCodeJavascript = true;
// console.log(`Hello, my name is ${name}, I am ${age} years old and I can code JavaScript: ${canCodeJavascript}`);


// Subtraction
// Subtraction works as we would expect it as well. We use - for this operation. What
// do you think gets stored in the variable in this second example?

// let nmb1 = 20;
// let nmb2 = 4;
// let stri1 = "Hi";
// let nr3 = 3;
// let result0 = nmb1 - nmb2; //output 16
// let result = stri1 - nr3; //output NaN
// console.log(result0, result);

// let num = 4;
// let nums = 5;
// let results = num + nums;
// console.log(results) // output 9

// Multiplication
// We can multiply two numeric values with the * character. Unlike some other
// languages, we cannot successfully multiply a number and a string in JavaScript.
// The result of multiplying a numeric and a non-numeric value is NaN:

// let n1 = 15;
// let n2 = 10;
// let st1 = "Hi";
// let n3 = 3;
// let res1 = n1 * n2; // output 150
// let res2 = st1 * n3; //output Nan
// console.log(res1, res2);

// Division
// Another straightforward operator is division. We can divide two numbers with the /
// character:

// let nrm1 = 30;
// let nrm2 = 5;
// let resu1 = nrm1 / nrm2;
// console.log(resu1); //output 6

// Exponentiation
// Exponentiation means raising a certain base number to the power of the exponent,
// for example, xy

// . This can be read as x to the power of y. It means that we will
// multiply x by itself y number of times. Here is an example of how to do this in
// JavaScript—we use ** for this operator:

// let exp1 = 2;
// let exp2 = 3;
// let resultExp1 = exp1 ** exp2;
// console.log(resultExp1);

// Modulus
// This is one that often requires a little explanation. Modulus is the operation in which
// you determine how much is left after dividing a number by another number in its
// entirety. The amount of times the number can fit in the other number does not matter
// here. The outcome will be the remainder, or what is left over. The character we use
// for this operation is the % character. Here are some examples:

// let module1 = 10;
// let module2 = 3;
// let resultModule1 = module1 % module2;
//console.log(resultModule1)
//console.log(`${module1} % ${module2} = ${resultModule1}`);

// let mod3 = 8;
// let mod4 = 2;
// let resultMod2 = mod3 % mod4;
// console.log(`${mod3} % ${mod4} = ${resultMod2}`);


//Unary operators: increment and decrement

// let inc1 = 4;
// inc1++;
// console.log(inc1);

// let dec2 = 4;
// dec2--;
// console.log(dec2);

//Prefix and postfix operators

// let nr = 2;
// console.log(nr++);
// console.log(nr);

// let nrs = 2;
// console.log(++nrs);

// let nrt1 = 4;
// let nrt2 = 5;
// let nrt3 = 2;
// console.log(nrt1++ + ++nrt2 * nrt3++);

//Practice exercise 2.3

// const ac = 8;
// const bx = 6; 
// const cu = Math.sqrt(ac * ac + bx * bx);
// console.log(`The hypotenuse is: ${cu}`);


// Get the values of sides 'a' and 'b from the user

// const aInput = prompt("Enter the value for side:");
// const bInput = prompt("Enter the value for side:");
// const c = Math.sqrt(aInput * aInput + bInput * bInput);
// console.log(`The hypotenuse is: ${c}`);

// let x = 2;
// x += 2;
// console.log(x)

// let z = 2;
// z -= 2;
// console.log(z)

// let y = 3;
// y *= 6;
// console.log(y)

// let u = 3;
// u /= 3;
// console.log(u)

// let m = 3;
// m **= 2;
// console.log(m)

// let g = 3;
// g %= 3;
// console.log(g)



// Practice exercise 2.4
// Create variables for three numbers: a, b, and c. Update these variables with the
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console

// var a = 2;
// var b = 3;
// var c = 1;

// a += b;
// console.log("a:" , a)

// a /= c;
// console.log(b)

// c %= b;
// console.log(c)

//equal

// let x = 5;
// let y = "5";
// console.log(x == y); //output true

// let x = 5;
// let y = "5";
// console.log(x === y); //out put false

//Not euqual

// let x = 5;
// let y = "5";
// console.log(x != y);

//console.log(x !== y); // why is it giving true?


//let x = 5;
//let y = 6;
//console.log(y > x);
//This one will log true, because y is greater than x.

//console.log(x > y);
//Since x is not greater than y, this one will log false.

//console.log(y > y);
//y is not greater than y, so this one will log false.

//console.log(y >= y);
//This last one is looking at whether y is greater than or equal to y, and since it is equal
//to itself, it will log true.

//console.log(y < x);
//This first one will be false, since y is not smaller than x.
//console.log(x < y);
//So, this second one will log true, because x is smaller than y.
//console.log(y < y);
//y is not smaller than y, so this one will log false.


//Logical operators

// And
// The first one we will have a look at is and. If you want to check whether x is greater
// than y and y is greater than z, you would need to be able to combine two expressions.
// This can be done with the && operator. It will only return true if both expressions are
// true:

// let x = 1;
// let y = 2;
// let z = 3;
//console.log(x < y && y < z);
//console.log(x > y && y < z);

//Or

// console.log(x > y || y < z);
// console.log(x > y || y > z);

//Not

// console.log(!x);
// let x = 1;
// let y = 2;
// console.log(!(x < y));


// testVariable = "falak";
// variableTypeTest1 = typeof testVariable;
// variableTypeTest2 = typeof(testVariable);
// console.log(variableTypeTest1);
// console.log(variableTypeTest2);


// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);


// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);


// Chapter project
// Miles-to-kilometers converter

// const distanceInMiles = 130;
// const distanceInKilometers = distanceInMiles * 1.60934;
// console.log(`The distance of ${distanceInKilometers.toFixed(3)} kms is equal to ${distanceInMiles} miles`);

// BMI calculator
// Set values for height in inches and weight in pounds, then convert the values to
// centimeters and kilos, outputting the results to the console:
// • 1 inch is equal to 2.54 cm
// • 2.2046 pounds is equal to 1 kilo
// Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
// divided by squared height (in meters). Output the results to the console.


// const heightInInches = 70; 
// const weightInPounds = 150; 
// const inchesToCentimeters = 2.54;
// const poundsToKilos = 0.453592;

// const heightInCentimeters = heightInInches * inchesToCentimeters;
// const weightInKilos = weightInPounds * poundsToKilos;

// const heightInMeters = heightInCentimeters / 100;
// const bmi = weightInKilos / (heightInMeters * heightInMeters);

// console.log(`Height: ${heightInCentimeters} cm`);
// console.log(`Weight: ${weightInKilos} kg`);
// console.log(`BMI: ${bmi.toFixed(2)}`);


//Self-check quiz

// 1. What data type is the following variable?

// const c = "5"; //string


// 2. What data type is the following variable?
// const c = 91; // number



// 3. Which one is generally better, line 1 or line 2?
// let empty1 = undefined; //line 1
// let empty2 = null; //line 2

//both


// 4. What is the console output for the following?
// let a = "Hello";
// a = "world";
// console.log(a);


// output Hello world



// 5. What will be logged to the console?
// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);

//Hello world!


// 6. What is the value of a?
// let a = "Hello";
// a = prompt("world");
// console.log(a);

//Hello world $ Prompt


// 7. What is the value of b output to the console?
// let a = 5;
// let b = 70;
// let c = "5";
// b++;
// console.log(b);

//output 71


// 8. What is the value of result?

// let result = 3 + 4 * 2 / 8;
// console.log(result) // OutPut 4


// 9. What is the value of total and total2?

// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total); // output 16

// let total2 = 500 + 100 / 5 + total--;
// console.log(total2); // output 536

// 10. What is logged to the console here?
const a = 5; 
const b = 10;
console.log(a > 0 && b > 0); // true
console.log(a == 5 && b == 4); //false
console.log(true ||false); //true
console.log(a == 3 || b == 10); // true
console.log(a == 3 || b == 7); // false

