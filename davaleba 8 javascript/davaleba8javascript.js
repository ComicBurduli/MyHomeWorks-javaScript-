const comic = document.querySelectorAll("h1.saba")
for (let i = 0 ; i < comic.length ; i++) {
    comic[i].style.backgroundColor = "red"   
    console.log([i])
    
}



const nodeList = document.querySelectorAll(" p");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.border = "10px solid black";
  console.log(nodeList.length)
  console.log([i])
}




