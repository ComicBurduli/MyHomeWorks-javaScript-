
////გადაბმები

let strname ='saba'
let strusername = 'burduli'
let strcountry ='georgia'
let gadabma = `Gamarjoba me var ${strname} da chemi gvaria ${strusername} da var ${strcountry} dan ` 
console.log(gadabma)




///ითვლის წინადადებაში ობიექტის რაოდენობას ამ შემთხვევში ასოებს 
let saba11 = "hello world "
let sabaslenght=saba11.length
console.log(sabaslenght)


///ჭრის მაგ:წინდადადებაში 
 let slice1 = "It Academy Step"
 let sliceresult = slice1.slice(2,15)
 console.log(sliceresult)


 ///აკეთებს თითქმის იგივეს რასაც slice

let burduli1 = " tlou2 is best game  "
let tlou = burduli1.substring(0,10)
console.log(tlou)



/// მას შეუხლია ნებისმიერი რამ ჩაანაცვლოს ამ შემთხვევასში ტექტსი
let teqsti = " RDR2 is the best game ever"
let replacetext = teqsti.replace( "RDR2" ,  "  Last of Us " )
console.log(replacetext)



///ადიდებას ტექსტს
let ComicSolvency = "hello saba burduli "
let gadidebateqstis = ComicSolvency.toLocaleUpperCase()
console.log(gadidebateqstis)




///აპატარავებს ტექსტს
let comicsolvency1 = "HELLO SABA BURDULI"
let dapataravebateqstis = comicsolvency1.toLocaleLowerCase()
console.log(dapataravebateqstis)



///ამ შემთხვევაში ცვლის ტექსტს შორის SPACE
let ITStep = "     hello                   world        "

console.log(ITStep.trim())



///NUMBER TO STRING 

let number = "100"
console.log(typeof num)
let strsaba=number.toString()
console.log(typeof strsaba) 



/*მეთოდი გამოყენებით შესაძლებელია სტრინგის ჭრა და მასივად
 გადაქცევა , გადაცემული პარამეტრი განსაზღვრავს იმას თუ რ
ომელი სიმბოლო  მიხედვით უნდა  დალაგდნენ მასივის წევრები.​*/

let sabasteqtsii = "0,1,2,3,4,5,6"
const resultsss = sabasteqtsii.split(",")
console.log(resultsss)


/*----Main-----*/



///მეთოდი ეძებს სიმბოლოს  და   აბრუნებს მის ინდექს, ანუ გვიჩვენებს რომელ ინდექსზეა.
let nexttext = "Max verstappen is best after  SIR HAMILTON"
let resultforf1fans = nexttext.indexOf("ppen")
console.log(resultforf1fans)

///ეძებს ამ შემთხვევაში ტექსტში კონკრეტულ სიტყვას

let resultsss1=nexttext.search("HAMILTON")
console.log(resultsss1)


///მეთოდი  ამოწმებს შეიცავს თუ არა სტრინგი რაიმე სიტყვას ან სიმბოლოს , აბრუნებს boolean ტიპს.​
result3= nexttext.includes("SIR")
console.log(result3)


///*მეთოდი აბრუნებს true-s, თუ სტრიქონი იწყება მითითებული სტრიქონით.წინაღმდეგ შემთცვევაში გვიბრუნებს false-ს.​*//
let results4 =  nexttext.startsWith("Max")
console.log(results4)




///მეთოდი აბრუნებს true-s, თუ სტრიქონი მთავრდება მითითებული სტრიქონით.წინაღმდეგ შემთხვევაში გვიბრუნებს false-ს.​


let result5 = nexttext.endsWith("HAMILTON")
console.log(result5)


///მეთოდი აბრუნებსსიმბოლოს მითითებულ ინდექსზე (პოზიციაზე) სტრიქონში.​
console.log(nexttext.charAt(10))


///alerts

alert("Welcome f1 fans")
confirm("are you F1 Fan ?")



///ფუნქცია აჩვენებს დიალოგურ ფანჯარას, რომელიც სთხოვს მომხამრებელს ინფორმაციის შეყვანას​
let Person = prompt("Are You F1 Fan " , " Yes")

/*------Main-----*/











let sabasname11 = "Saba"
let sabasgvari11 = "burduli"
let sabasage11 = "14"
let results22 = `gamarjoba mevar ${sabasname11} da chemi gvaria ${sabasgvari11} da var ${sabasage11} wlis`
console.log(results22)




let newricxvi = "mogesalmebit yvelas"
let result9632796 = newricxvi.length
console.log(result9632796)



let newgazeti = "sabaa rogor xar ?"
let result8888 = newgazeti.slice(2,4)
console.log(result8888)


let rogorxar = " kargad shen patara bicho ?"
let sabloloooresult = rogorxar.substring(1,10)
console.log(sabloloooresult)