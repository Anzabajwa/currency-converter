import inquirer from 'inquirer';

let Conversion ={
  "PKR":{
    "USD" :0.0036,
    "GBP": 0.0037,
    "PKR" : 1

  },



  //gbp
  "GBP":{
    "USD" :1.21,
    "PKR": 350,
    "GBP": 1
  },


  //usd
  "USD":{
    "PKR" :277.58,
    "GBP":0.83,
    "USD": 1,
  },
} ;  

//  step 2 

const answer : {
    from : "PKR" |  "USD" | "GBP",
    to:  "PKR"  | "USD"    |  "GBP",

    //datatypes
    amount:number


}= await inquirer.prompt([

{
  type:"list",
  name : "from",
  choices:["PKR" , "USD" , "GBP"],
  message:"Select your  currency?",

},

{
  type:"list",
  name : "to",
  choices:["PKR" , "USD" , "GBP"],
  message:"Select your conversion currency?",

},








{
  type :"number",
  name:"amount",
  message:"Enter your conversion amount"

}





])
const {from,to,amount}= answer;
if(from && to && amount){
  let result = Conversion[from][to ] * amount
  console.log(`your conversion from ${from } to ${to} is ${result}`)
}

else{
  console.log("invalid input")
}



