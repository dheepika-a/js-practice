var p=prompt("enter a principle value");
var r=prompt("enter a rate of interest value1");
var r1=prompt("enter a rate of interest value2");
var t=prompt("enter a time value");
	p=parseInt(p);
	r=parseInt(r);
	t=parseInt(t);
	r1=parseInt(r1);
	var c=(p*r*t)/100;
	var c1=(p*r1*t)/100;
	//var x=c/100;
	//var y=c1/100;
	var d=c-c1;
	alert(d); 