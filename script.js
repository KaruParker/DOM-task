//  --------class task---------
var input=document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("id","dob");

var button=document.createElement("button");
button.innerHTML="Display Data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydate);

var div=document.createElement("div");
div.setAttribute("id","display");

function displaydate(){
var inputs=document.getElementById("dob").value;
console.log(typeof(inputs));
if(Date.parse(inputs)){
var inputdate=new Date(inputs);
console.log(inputdate);
var currentdate=new Date();
console.log(currentdate);
// Milliseconds difference
var millisecdiff=currentdate.getTime()-inputdate.getTime();
console.log(millisecdiff);
// Seconds difference
var secondsdiff=mathfloor(millisecdiff,1000);
console.log(secondsdiff);
// Minutes difference
var minutesdiff=mathfloor(secondsdiff,60);
console.log(minutesdiff);
// Hours difference
var hoursdiff=mathfloor(minutesdiff,60);
console.log(hoursdiff);
// Day difference
var daydiff=mathfloor(hoursdiff,24);
console.log(daydiff);
// Year difference
var yeardiff=getyears(inputdate,currentdate);
console.log(yeardiff);
// Month difference
var monthdiff=getmonths(inputdate,currentdate);
console.log(monthdiff);
div.innerHTML=`
Given Input date is ${inputs}<br>
Year ${yeardiff}<br> 
Months ${monthdiff}<br>
Days ${daydiff}<br>
Hours ${hoursdiff}<br>
Minutes ${minutesdiff}<br>
Seconds ${secondsdiff}<br>
Milliseconds ${millisecdiff}<br>
`;
}
else{
    console.log("Invalid Input Entered!")
}
}

function mathfloor(value1,value2){
    return Math.floor(value1/value2);
}

function getyears(value1,value2){
    var d1=new Date(value1);
    var d2=new Date(value2);
    return d2.getFullYear()-d1.getFullYear();
}

function getmonths(value1,value2){
    var year=getyears(value1,value2);
    var months=(year*12)+(value2.getMonth()-value1.getMonth());
    return months;
}
document.body.append(input,button,div);