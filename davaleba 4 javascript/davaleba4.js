 
 ///1
 
 
 let string = "I love arrays they are my favorite" ;
 let toarray = function(str) {
    return [...str]
 };


 console.log(toarray (string))




///2


let arrays1 = [10,11.7,34,4,6,6776,76,5,533,,466,77,8,845,3,2,654];
let result = arrays1.find((el)=>20) ;
console.log(result) 


//3


let comicsolvency = [10,11,7,"Hello world",34,4,"saba Burduli",6,]
let result1 = comicsolvency.some((el) => el=string)

console.log(result1)



//4

/// მოძებნა და გვითხრა რომ არის 4 ინდექსზე
let Users = ["ADMIN", "MANAGER" , "BUYER" , "SELLER",    "UNCONFIRMED"]
let result2= Users.indexOf("UNCONFIRMED")
console.log(result2)