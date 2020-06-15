


var num1 = 3; //q1
var num2 = 5;
var sum = num1 + num2;
document.write("<h3>Sum of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");

var num1 = 23; //q2
var num2 = 15;
var sum = num1 - num2;
document.write("<h3>Subtraction of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");

var num1 = 33;
var num2 = 5;
var sum = num1 / num2;
document.write("<h3>Division of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");

var num1 = 3;
var num2 = 5;
var sum = num1 * num2;
document.write("<h3>Multiplication of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");

var num1 = 13;
var num2 = 5;
var sum = num1 % num2;
document.write("<h3>Modulus of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");



var num;  //q3
document.write("Value after variable declaration is: "+ num +"<br>");
num = 12;
document.write("Initial value: " + num + "<br>");
num +=1;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after Addition is: " + num + "<br>");
num -=1;
document.write("Value after decrement is: " + num + "<br>");
num /=3;
document.write("The remainder is: " + num + "<br>");




var costOfMovieTicket = 600;   //q4
var costOfFiveTickets = 5* costOfMovieTicket;
document.write("Total cost to buy 5 tickets to a movie is: " + costOfFiveTickets + "PKR<br><br>");


var number = prompt("Enter the number :"); //q5
var range = prompt("Enter the range :");

document.write("Table of " + number  + "<br>");
for (i = 1; i<= range; i++)
{
    document.write("<b>" + number + " x " + i + " = " + number*i + "</b><br>");
}

//q6
var cel = 25;
document.write((cel * (9/5)) +5);
var fahrenheit = 70;
document.write((fahrenheit-32)*(5/9));





// q7.
var price1 = 1000;
var price2 = 120;
var quantity1 = 2;
var quantity2 = 7;
var shippingcharges = 200;
document.write("total cost of your order is " + (price1*quantity1)+(price2*quantity2)+shippingcharges);



// q8.
var totalMarks = 550;
var marksObt = 480;
var percentage = (480/550) * 100;
document.write("Percentage:" + percentage );


// q9.
document.write("Total currency in PKR : " + ((10*104.8) + (25*28) ));


// q10.
var num = 10;
num = ((num + 5)*10)/2


// q11.
var CurrentYear = 2020;
var birthYear = 2000;
document.write("Your age is " + (CurrentYear-birthYear));


// q12.
var radius = 20;
document.write("circumference is : " + (2* Math.PI*radius));
document.write("area of circle is : " + (Math.PI*Math.pow(radius,2)));


// q13.
var snack= "chocolate chip";
var currentAge = 20;
var EstimatedAge = 40;
var amount = 4;
document.write("you will need " + (EstimatedAge-currentAge)*4 + snack + "to last until you ripe old age of " + EstimatedAge );
