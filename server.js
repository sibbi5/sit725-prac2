const express = require('express');
const app = express();
const port = 3000;





app.use(express.static(__dirname + '/public'));

app.get('/test',function(req,res){

    console.log('Test has been hit')

    response.send('Test page')

})

let accounts=[
    {id:1,name:'alex',deposit:5},
    {id:2,name:'sarah',deposit:10},
    {id:3,name:'jim',deposit:15}
]

let deposit=function(account_name){

    for(var i = 0; i < accounts.length; i += 1) {
        // console.log("Inside the for loop");
        // console.log(accounts[i].name);
        // console.log(account_name);
        if(accounts[i].name == account_name) {
            // console.log("Inside the if");
            console.log("deposit value", accounts[i].deposit);
            deposit_amount = accounts[i].deposit;
            
            return deposit_amount;
        }
    }
    
    // console.log("index position" , deposit)


}

app.get('/deposit',function(request,response){

    let name=(request.query.name);
    console.log("app funciton value", name);
    let deposit_val = deposit(name);

    response.send("The Deposit amount for " + name + " is " + deposit_val);



})



app.listen(port)