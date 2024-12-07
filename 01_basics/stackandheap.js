//Stack (Primitive) and heap (Non-Primitive) 

// In Stack you will get copy and in heap memory it will work as reference

let myYoutubeName = "Narayani"

let anotherName = myYoutubeName
anotherName = "LAxmiChannel"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email : "one@gmail.com",
    upi  : "one@ybl" 
}


let userTwo = userOne

userTwo.email =  "new@gmail.com"

console.log(userTwo);
