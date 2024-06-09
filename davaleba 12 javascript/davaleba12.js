let myPromise  =  new Promise(function(myresolve , myreject){
    myresolve("zero errors")
    myreject("erorrs")
})






myPromise .then(

    function(value) {},
    function(error) {}
)




let comic = new Promise (function(resolve , reject){
resolve("no erorrs")
reject("there are erorrs")
})




comic.then(
    function(value){},
    function(error){}
)








var ull = document.getElementById("saba")
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then((data)=> {
    console.log(data)
    data.forEach(element => {var li = document.createElement("li")
    saba.innerText = element.title + element.body + 'ID:'  + element.id
        ull.appendChild(li)

    });
}


)





///varjishi...


// let Comicsolvency  = document.getElementById("saba")
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then((data)=>{
//     console.log(data)
//     data.forEach(element => {var li = document.createElement(li)
//         saba.innerText = element.title + element.body + "id " + element.id
//         saba.appendChild(li)
//     });
// })




// let getid = document.getElementById("saba")
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then((data)=>{
//     console.log(data)
//     data.forEach(element => {var li = document.createElement(li)
//         saba.innerText = element.title + element.body +  "id " + element.id 
//             saba.appendChild(li)
//     })
// }
// )




// let saba  = document.getElementById("saba")
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())

// .then((data)=>{

// console.log(data)
// data.forEach(element => {var x = document.createElement(li)
//     saba.innerText = element.title + element.element.body + element.id
//   saba.appendChild(li)
// })

// })
 