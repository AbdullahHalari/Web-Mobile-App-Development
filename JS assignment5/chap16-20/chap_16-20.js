

// q1
var myarr = [[]];


// q2
myarr = [ 
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
 ];


// q3
for(var i =1; i<=10 ; i++){
    document.write(i);
}


// q4
num = prompt("entter a number : ");
num2 = prompt("enter length of table : ")
for(var i =1; i<=num2 ; i++){
    document.write(num + " x " + i + " = " + num*i );
}


// q5
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for( i = 0; i<4; i++){
    document.write(fruits[i]);
}
for( i = 0; i<4; i++){
    document.write("Element at index " + i + " is " + fruits[i]);
}


// q6
for( i = 1; i<=15; i++){
    document.write(i);
}
for( i = 10; i>0; i--){
    document.write(i);
}
for( i = 0; i<=20; i++){
    if(i%2 == 0){
        document.write(i);
    }
}
for( i = 0; i<=20; i++){
    if(i%2 != 0){
        document.write(i);
    }
}
for( i = 1; i<=20; i++){
    if(i%2 == 0){
        document.write(i);
    }
}


// q7
arr = ["cake", "apple pie", "cookie", "chips", "patties"];
ip = prompt("enter bakery item");
for(i = 0 ; i<5 ; i++){
    if(arr[i] == ip){
        alert("item present in bakery");
        break;
    }
}
if(i == 5){
    alert("sorry item not present");
}


// q8
var A = [24, 53, 78, 91, 12];
num = A[0];
for( i = 0 ; i<5 ; i++){
    if(A[i] > num){
        num = A[i];
    }
}  
document.write("largest number is : " + num);  


// q9
 A = [24, 53, 78, 91, 12];
num = A[0];
for( i = 0 ; i<5 ; i++){
    if(A[i] < num){
        num = A[i];
    }
}  
document.write("smallest number is : " + num); 


// q10
for(i = 5; i <=100; i = i + 5){
    document.write(i);
}
