var sor=parseInt(prompt("enter speed of river value"));
var som=parseInt(prompt("enter speed of motorboat value"));
var time=parseInt(prompt("enter time value"));
downstreamspeed=sor+som;
dis=downstreamspeed*time;
y=dis/60;
alert(y);