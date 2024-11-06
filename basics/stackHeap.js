// class 5 


// STACK : (PRIMITIVE)
// HEAP: (NON-PRIMITIVE)

let me = "Shivam"
let user = {
    name :"Anwu",
    city : "Hajipur"
}
console.log("====================================")
console.log(me)
console.log(user.name)

let my = me
let user2 =user
my = "not Shivam"
user2.name = "golgappi"
console.log("====================================")
console.log(me)
console.log(user.name)
console.log("====================================")
console.log(my)
console.log(user2.name)
