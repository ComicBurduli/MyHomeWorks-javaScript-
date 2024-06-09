





///1

let arr = [1, 3,'5', '7', '9.7' ]
let res = arr.slice(0,2)
console.log(res)
let initialValue = 0;
let saba = res.reduce(
  (el, ind) => el + ind,
  initialValue,
);


console.log(saba);


///2

let burduli = [1, 3, 35, 78,24]
let result5  = burduli.find((X) => X<3)
console.log(result5)




///3

let beast = "bea al aklj";
let dish = "bia kir";

if (beast.startsWith(dish) || dish.startsWith(beast)) {
    console.log("The strings start with the same values.");
} else {
    console.log("The strings do not start with the same values.");
}





