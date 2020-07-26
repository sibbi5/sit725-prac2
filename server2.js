const express = require('express');
const app = express();
const port = 3020;





app.use(express.static(__dirname + '/public'));



// let accounts=[
//     {id:1,name:'alex',deposit:5},
//     {id:2,name:'sarah',deposit:10},
//     {id:3,name:'jim',deposit:15}
// ]

class Node { 
	constructor(element) 
	{ 
		this.element = element; 
		this.next = null
	} 
} 

class LinkedList { 
	constructor() 
	{ 
		this.head = null; 
		this.size = 0; 
	} 


add(element) 
{ 
	var node = new Node(element); 
    var current; 
    
	if (this.head == null) 
		this.head = node; 
	else { 
        current = this.head; 
        
		while (current.next) { 
			current = current.next; 
		}
		current.next = node; 
	} 
	this.size++; 
}

indexOf(element) 
{ 
	var count = 0; 
	var current = this.head; 

	
	while (current != null) { 
		if (current.element === element) 
			return count; 
		count++; 
		current = current.next; 
	} 

	return -1; 
} 

printList(index) 
{ 
    var count = 0; 
	var current = this.head; 

	while (current != null) {
        if(count == index){
			return current.element; 
        }
        else{
            current = current.next;
            count++; 
        }		 
	} 
} 

}


let deposit=function(account_name){

    for(var i = 0; i < accounts.length; i += 1) {
        if(accounts[i].name == account_name) {
            
            console.log("deposit value", accounts[i].deposit);
            deposit_amount = accounts[i].deposit;
            
            return deposit_amount;
        }
    }


}


app.get('/deposit',function(request,response){

    let name=(request.query.name);
    console.log("app funciton value", name);
    
    var nameList = new LinkedList();
    nameList.add('alex');
    nameList.add('sarah');
    nameList.add('jim');

    var depositList = new LinkedList();
    depositList.add(5);
    depositList.add(10);
    depositList.add(15);
    let name_index = nameList.indexOf(name);
    let deposit_val = depositList.printList(name_index);
    // let deposit_val = deposit(name);

    response.send("The Deposit amount for " + name + " is " + deposit_val);
})

app.listen(port)

// I would use linkedlist because it can be easily reorganized without changing the whole structure.
// Size of the linkedlist can be extended as per the need, there is no limit for that.