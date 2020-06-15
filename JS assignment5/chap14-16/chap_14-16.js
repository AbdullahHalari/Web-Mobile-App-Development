


// q1
var students = [];



// q3
var strings = ['hello' , 'world'];


// q4
var nums = [1,2,3];


// q5
var bools = [true,false];

// q6
var mixed = [23, 'my variable' , false];


// q7
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write('Qualifications');
qualifications.forEach(qualification => {
    document.write(qualification);
});


// q8
var marks; 
students = ['Abdullah','Muhammad','Ibrahim'];
marks = [320,230,480];
var i=0;
students.forEach(student => {
    document.write("Score of " + student + " is " + marks[i] + ". Percentage :" + (marks[i]/500)*100 + "%");
    i++;
});


// q9
var colors = ['red','yellow','blue','black','brown'];
document.write(colors);
ip = prompt("what do you want to add at the beginning");
colors.unshift(ip);
ip = prompt("what do you want to add at the end");
color.pop(ip);
ip = prompt("what do you want to add at the beginning");
colors.unshift(ip);
ip = prompt("what do you want to add at the beginning");
colors.unshift(ip);
colors.shift();
colors.pop();
document.write(colors);
var index = prompt("enter the index where you want to insert ");
ip = prompt("enter a color");
colors.splice(index, ip);
index = prompt("enter the index where you want to delete ");
colors.pop(index);


// q10
document.write("marks of student " + marks);
document.write("sorted marks of student " + marks.sort());


// q11
var cities = ['karachi','lahore' , 'islamabad', 'quetta', 'peshawar' ];
document.write(cities.slice(1,3));


// q12
var arr = ['This' ,  'is' ,  'my' ,  'cat'];
arr.join(' ');


// q13
arr.push('keyboard','mouse','printer','monitor');
document.write(arr.shift());
document.write(arr.shift());
document.write(arr.shift());
document.write(arr.shift());


// q14
arr.push('keyboard','mouse','printer','monitor');
document.write(arr.pop());
document.write(arr.pop());
document.write(arr.pop());
document.write(arr.pop());


// q15

arr['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write("<select><option>"+arr[0]+"</option><option>"+arr[1]+"</option><option>"+arr[2]+"</option><option>"+arr[0]+"</option><option>"+arr[3]+"</option><option>"+arr[4]+"</option><option>"+arr[5]+"</option></select>")
