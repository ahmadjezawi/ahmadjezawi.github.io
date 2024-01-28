   
let accountBalance=4;


function IncrementAccountBalance(newAmount){

accountBalance=accountBalance+newAmount;
console.log(accountBalance)

};
function DecrementAccountBalance(newAmount){

   

if(accountBalance!=0){
    accountBalance=accountBalance-newAmount;
console.log(accountBalance)
    }

    else 
{

console.log("YOUR BALANCE = 0")
alert('Warning! Your Balance is ZERO');

}



};

