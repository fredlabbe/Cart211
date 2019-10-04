function sayHello(){ 
	
	var message = document.getElementById("name").value; 
	message = message + ' ' + document.getElementById("name 2").value; 
	document.getElementById("helloTo").innerHTML = message;
	}