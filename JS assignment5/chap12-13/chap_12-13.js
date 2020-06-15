


// q1


var ip = prompt("enter a character");
if(ip >= 65 && ip <= 90) alert("Uppercase.");
else if(ip >= 97 && ip <= 122) alert("Uppercase.");
else if(ip >=48 && ip<= 57 ) alert("number");

// q2
num1 = prompt("enter first number");
num2 = prompt("enter 2nd number")
if(num1>num2)alert("first number is greater");
if(num1<num2)alert("first number is lesser");
if(num1=num2)alert("first number is = second number");



// q3

num = prompt("enter a number ");
if(num>0)alert("positive number");
if(num<0)alert("negative number");
if(num==0)alert("zero");
// q4
 ip = prompt("enter a character");
if(ip == 97 || ip == 101 || ip == 105 || ip == 111 || ip == 117 )alert("vowel");
else alert("consonent");


// q5
var password = "abdullah";
result = prompt("enter password");
if(result == "") prompt("Please enter your password");
if(result == password) alert("correct");
else alert("incorrect");


// q6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}


// q7
var time = prompt("enter time");
var meridian;
if( time > 0 && time <=1200){
    meridian = "am";
    time = parseInt(time/100) + ":" + time%100 + meridian;
}else if(time > 1200 && time <=2400){
    meridian = "pm"
    time = parseInt(time/100 - 12) + ":" + time%100 + meridian;
}