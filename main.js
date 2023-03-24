let time=prompt("Enter Your time")
let a=new Date();
a.setHours(time);
let b=a.getHours();

if(time<12){
c="Morning";

	
}

else if(time>=12&&time<=17){
	c="Afternoon";
}

else if (time=>18 &&time<=20){
	c="Evening";
}

else{
	c="Night";
	
}


document.write('<h1>'+c);