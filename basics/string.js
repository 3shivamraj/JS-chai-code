// class 6


let fruit = "apple"
let num = 2
console.log(`my name is shivam and i eat ${num} ${fruit}`);

let line = "hello i am chat GPT"
console.log(typeof line ) // String

let line2 = new String("Hello this is India")
console.log(typeof line2) // Object

// Object String have many function like indexof,charat,length,tolowwercase etc.....

let name= new String ("Shivam Raj")
// LENGTH
console.log(name.length) // 8

//charAt
console.log(name.charAt(5))  //  m

//indexOf
console.log(name.indexOf('R'))   // 7 [Case sensetive]


//slice
let first = name.slice(0,7)
console.log(first)

//toLowerCase & toUpperCase
console.log(name.toLowerCase())  // shivam raj
console.log(name.toUpperCase())  // SHIVAM RAJ

//replace
let goel = name.replace('Raj','Goel')  // replace the first occurance in String
console.log(goel)  //Shivam Goel


// replaceAll
let para = 'their is a boy shivam, shivam is a average in study but their luck is great. shivam know how to ride bike'
let newpara = para.replaceAll('shivam','akash')// replace all occurance in String
console.log(newpara) // their is a boy akash, akash is a average in study but their luck is great. akash know how to ride bike

//split

let arry = para.split(' ') // convert any String into array
console.log(arry) // ['their',  'is',      'a', etc]

//trim
;let space = '       shivam     ' // remove white space from left as well as right
console.log(space.trim()) // 'shivam'

//includes
let answer = para.includes('shivam') // find the value in given String
console.log(answer) // true
