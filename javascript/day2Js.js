

/*calling the function*/



/*Create a function that acce[ts 3 variables being passed into it, adds them up and returns the sum. Display the sum back to the DOM*/


/*
var event1=document.getElementById("button1");

event1.addEventListener('click',sum,false);

    var userinput1 = document.getElementById("input1").value;
    var userinput2 = document.getElementById("input2").value;
    var userinput3 = document.getElementById("input3").value;
       
              
    var a = parseInt(userinput1);
    var b = parseInt(userinput2);
    var c = parseInt(userinput2);
    
    var numbers = [a,b,c];

function sum(item) {
 document.getElementById("results").innerHTML = numbers.reduce(getSum);
    }


 function getSum(total, num) {
 return total + num;



};
*/


/* answer*/

/*var event1 = document.getElementById("button1");*/

//invoke the main function when button 2 is clicked

/*event1.addEventListener ('click', main, false);*/

//MAIN function to run the procedure

/*function main () {
    //this actually invokes the function summit declared lower down
    //converts the interger and then returns the total which initialises the value of the global variable 


var sum= summit(parseInt(input1.value), parseInt(input2.value), parseInt(input3.value));

displayIt(sum);


}*/

//the summit function mentioned within the main 

/*function summit(x,y,z){
    
    total = x+y+z;
    return total;
    
}

function displayIt(sum){
    
    document.getElementById("result").innerHTML = sum;
}*/


/*Scope: declare the same variable inside a function (local) and global outside. Display the two values*/

/*var event1 = document.getElementById("button1");
event1.addEventListener ('click', main, false);*/

/*var userinput1 = document.getElementById("input1").value;
var userinput2 = document.getElementById("input2").value;

var a = parseInt(userinput1);
var b = parseInt(userinput2);*/


/*
var varone = 12;
console.log(varone);
function main () {
    
    var varone = 10;
    
    console.log(varone);
    
document.getElementById("result").innerHTML = varone; 
}

function two () {


document.getElementById("result2").innerHTML = varone;
main();
*/

/*}*/


/* Create a function that contains a for loop that loops through from 1 - 50 and displays the numbers on the webpage */

/*var=numberShown

for (i = 0; i < 51; i++) {
}

document.getElementById("result3").innerHTML = numberShown;*/


/*function forLoop() { 

var str = "";

for (var i = 0; i < 51; i++) {
  str = str + i + " ";
}

console.log(str);

document.getElementById("result3").innerHTML = str;*/
    
//}*/
/*var numbersShown = "num";

for(var i = 0; i <20; i++) {
    numbersShown = numbersShown + i + " ";
    
}

document.getElementById("result4").innerHTML = numbersShown;*/

 /*Create a for loop displaying numbers 1-50 on the webpage*/

/*function forLoop () {
    
    var count=0;
    for (i=1; i<51; i++){
        count=count+i+"," +" ";
        
    }
    
    document.getElementById("result3").innerHTML = count;
}*/


/*Create a while loop displaying numbers 1-10 on the webpage */
/*
function whileLoop () {
var text = " ";
i = 1;

while (i <= 10) {
 text +=i;
i++;
}

document.getElementById("result4").innerHTML = text;
} */


/*Create a do while loop that displays the numbers from 1 to 10 onto the webpage */

/*function doLoop(){
    
    var text = "";
    var i = 1;
    
    do { 
    text += i; 
        i++;
    } 
    while (i < 10);
    
    console.log(result);
    
    document.getElementById("result5").innerHTML = text;
}*/


/*function doLoop (){
    var i = 0;
    
    do {
  i = i + 1;
  result = result + i;
} while (i < 10);

console.log(result);
    document.getElementById("result5").innerHTML = result;
}*/

/* Create a nested loop that displays two sequences of numbers from 1-10, with one sequence nested inside the other */

/*function nestedLoop () {
    var text = "";
    var i;
    
    for (i=1; i<=10; i++){ 
    text += i; 
    }
        for (j=1; j <=10; j++) {
    text += j; } 
    document.getElementById("result6").innerHTML = text;
            }*/

/*function nestedLoop () {
    
    var text = "";
    var i;
    var j;
    
    for (i=1; i<=10; i++){
        text += i;
    }
    for (j=1; j<=10; j++) {
        text += j;
    }
    
    document.getElementById("result6").innerHTML = text;
}*/

/*function nestedLoop () {
  
    var i = 0;
    var counter = 0;
    var counter2 = 0;
    
    for (i=0;i<=10; i++){ 
    for (j=0;j<=10; j++){
        
        //run the nested loop first
     
        counter= counter + j + ", ";
    }
        //then run for this loop
        
        counter2 = counter2 + i + ", ";
    }
       document.getElementById("result6").innerHTML = counter + " " + counter2;
}*/


/*Create a switch statement that displays the current day and time of the week on the webpage*/

 var dayOfTheWeek = new Date().getDay();
 var hoursOfTheDay = new Date().getHours();
 var minuteOfDay = new Date().getMinutes();
 var secondsOfTheDay = new Date().getSeconds();

var timeOfDay = " <br/> Current time" + hoursOfTheDay + ":" + minuteOfDay + ":" + secondsOfTheDay;

//document.getElementById("demo").innerHTML = timeOfDay;

var day;

switch (dayOfTheWeek) {
    case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;  
    case 2:
        day = "Tuesday";
        break;  
    case 3:
        day = "Wednesday";
        break;  
    case 4:
        day = "Thursday";
        break;  
    case 5:
        day = "Friday";
        break; 
    case 6:
        day = "Saturday";
        break;  
    case 7:
        day = "Sunday";
        break;  
                    }

document.getElementById("demo").innerHTML = "Today is " + day + " " + timeOfDay;