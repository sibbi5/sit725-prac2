const express = require('express')



// var sentiment = new Sentiment();

const app = express()

const PORT=3000;





app.use(express.static(__dirname + '/public'));


app.get('/test',function(request,response){

    console.log('Test has been hit')

    response.send('Test page')

})



// this function takes two numbers, adds them together and returns the result

// ye works don't touch it

let addition=function(num1,num2){

    result=num1+num2;

    return result

}



let sentimentAnalysis=function(text){

    var result = sentiment.analyze(text);

    return result;

}



app.get('/adder',function(request,response){

    let num1=parseInt(request.query.num1);

    let num2=parseInt(request.query.num2);

    let sum=addition(num1,num2);

    response.send('The sum is'+sum);

})



app.get('/sentiment',function(request,response){

    let text=request.query.text;

    let analysis=sentimentAnalysis(text)

    console.log(analysis)

    response.json(analysis)

})





 // start the server and listen on port 3000

app.listen(PORT)