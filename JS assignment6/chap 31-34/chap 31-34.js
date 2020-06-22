// qno 1
var currentdate = new Date();
document.write(currentdate + "<br>");


// qno 2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentmonth = currentdate.getMonth();
document.write(months[currentmonth] + "<br>");


// qno 3
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var currentday = currentdate.getDay();
document.write("Today is " + days[currentday] + "<br>");


// qno 4
if( currentday == 0 || currentday == 6){
document.write("Today is a funday" + "<br>")
}


// qno 5
if(currentdate.getDate() <=15){
    document.write("first fifteen days of the month" + "<br>");
}else if(currentdate.getDate() <=16){
    document.write("16th day of the month" + "<br>");
}else{
    document.write("last 16 days of the month" + "<br>");
}


// qno 6
document.write("milliseconds: " + currentdate.getTime() + "<br>")
var minutes = currentdate.getTime()/(1000*60);
document.write("minutes" + minutes + "<br>");


// qno 7
var hour = currentdate.getHours();
if(hour < 12){
    document.write("Its AM" + "<br>");
}else{
    document.write("Its PM" + "<br>");
    
}


// qno 8
var laterDate = new Date("2020/12/31");
document.write(laterDate + "<br>");


// qno 9
var startingdate = new Date("2020/6/18");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60*60*24));
document.write(daysgone + " days have passed since ramazan 1st" + "<br>")


// qno 10
var startingdate = new Date("2015/1/1");
var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60));
document.write(daysgone + " seconds have passed since 2015" + "<br>")


// qno 11
document.write("current date" + currentdate + "<br>")
var hourago = new Date( currentdate.getTime() - (1000* 60 *60));
document.write("an hour ago it was " + hourago + "<br>")


// qno 12
document.write("current date" + currentdate + "<br>")
var centuryago = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *100));
document.write("100 years ago it was " + centuryago + "<br>")


// qno 13
var age =prompt ("enter your age")
var birthyear = new Date( currentdate.getTime() - (1000* 60 * 60 *24 * 365.25 *age));
document.write("your birth year is " + birthyear.getFullYear() + "<br>");


// qno 14
document.write("<h2>K-Electric Bill</h2>")
document.write("customer name : Abdullah Halari" + "<br>");
document.write("Month : Feburary"  + "<br>");
document.write("Number of units : 410" + "<br>");
document.write("Charges per unit : 16" + "<br>");
document.write("net amount payable with in due date : " + 410*16 + "<br>");
document.write("late payment surcharge : 350" + "<br>");
document.write("payment after due date : " + ((410*16)+350)  + "<br>");