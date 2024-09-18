// object 
let obj = {JAN:1,FEB:2,MAR:3,APR:4,MAY:5,JUN:6,JUL:7,AUG:8,SEP:9,OCT:10,NOV:11,DEC:12};
//months for display
let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

let input_month1 = document.getElementById("input_month1");
let input_month2 = document.getElementById("input_month2");

let input_day1 = document.getElementById("input_day1");
let input_day2 = document.getElementById("input_day2");

let input_year1 = document.getElementById("input_year1");
let input_year2 = document.getElementById("input_year2");

let button = document.getElementById("calculate");

let output = document.getElementById("outputbox");
let output2 = document.getElementById("outputbox2");

for(let i of months){
    let opt = document.createElement("option");
    opt.textContent = i;                            
    input_month1.appendChild(opt);

}

for(let i of months){
    let opt = document.createElement("option");
    opt.textContent = i;                            
    input_month2.appendChild(opt);

}


for (let i = 1; i < 32; i++){
    let opt = document.createElement('option');      //for loop for 1st select element of days
    opt.innerText = i;
    opt.value = i;
    input_day1.appendChild(opt);
}

for (let i = 1; i < 32; i++){
    let opt = document.createElement('option');      //for loop for 2nd select element of day
    opt.innerText = i;
    opt.value = i;
    input_day2.appendChild(opt);
}

button.addEventListener("click",()=> {
    printValue();
})

const printValue = () => {
    
    let month1 = input_month1.value;
    let year1 = parseInt(input_year1.value);
    let month2 = input_month2.value;
    let year2 = parseInt(input_year2.value);

    // Get month values from the object
    let monthValue1 = obj[month1];
    let monthValue2 = obj[month2];
    
    let arr = [];
    while(year1<=year2){
    arr.push(year1);
    year1++;
    }
    // console.log("array:",arr);

    let count = arr.length-2;
    // console.log("it is count:",count);
    // console.log(monthValue1,monthValue2);
    let initial = (12 - monthValue1)*30;
    let main = 365*count;
    let last = monthValue2*30;
    console.log(" ");
    console.log(" ");

    let totalDays = initial+main+last;
    let number = totalDays/365;
    let yourAge = Math.floor(number);
    let yourMonth = Math.abs(yourAge - number); // for getting absolute value;
    // If you want the decimal part as an integer (1 in this case):
    let yourMonth1 = Math.round(yourMonth * 12); // Changed this to multiply by 12 instead of 10 for months


    output.innerText = `Your Age: ${yourAge} years ${yourMonth1} months..`;
    output2.innerText = `Also Total Days: ${totalDays} days.`



}


