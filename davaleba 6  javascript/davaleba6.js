
///1


let Comic = {
    name  : "Saba",
    Lastname : "Burduli",
    age : 14,

}

for (let X in Comic ) {
    console.log(Object.values(Comic))
}



///2 

let ComicSolvency = [

{

footballerName : "Lionel Messi " , 
Rank : 1,
ballondor : 8 ,


},


{

    footballerName : "Cristiano Ronlado " , 
    Rank : 2,
    ballondor : 5 ,
    
    
    },



    {

        footballerName : "Kilian Mbappe " , 
        Rank : 3,
        ballondor : 0 ,
        
        
        },
    
    
    



]

ComicSolvency.filter(el=>console.log(el.footballerName))






let SabaBurduli = [


    {

        Game : "The last of us part 2 " , 
        Gameoftheyear : 1,
        year : "2020"
        
        
        },
    

        {

            Game : "Baldurs Gate 3 " , 
            Gameoftheyear : 1,
            year : "2022"
            
            
            },




            {

                Game : "Rdr2 " , 
                Gameoftheyear : 0,
                year : "2018"
                
                
                },

]


SabaBurduli.filter(ele=>console.log(ele.Game))

