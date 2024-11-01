//First Question 

function validateStr(){
    var inputStr = document.getElementById('inputStr').value;
    if(typeof inputStr!='string'){
        alert("Invalid input!");
        return false;
    }
    return true;
}
function reversestring(){
    var isValid=validateStr();
    if(!isValid){
        return;
    }
    var inputStr = document.getElementById('inputStr').value;
    var reverse="";
    for(var i=inputStr.length-1;i>=0;i--){
       reverse+=inputStr[i];
    }
    document.getElementById('result1').textContent = "Reversed String "+reverse;
}
document.querySelector('#myForm1 button[type="reset"]').addEventListener("click",function(){
    document.getElementById('inputStr').value="";
    document.getElementById("result1").textContent = "";
});

//Second Question

let  numbers=[];

function nextNum(){
    var inputNum=document.getElementById('inputNum').value;
    if(!isValidNumber(inputNum)){
        alert("Invalid input!");
        return;
    }
    numbers.push(inputNum);
    document.getElementById('inputNum').value="";
}

function isValidNumber(input){
    return /^\d+$/.test(input);
}

function checkPalindromes(){
    var inputNum=document.getElementById('inputNum').value;
    if(!isValidNumber(inputNum)){
        alert("Invalid input!")
        return ;
    }
    numbers.push(inputNum);
    if(numbers.length ==0){
        alert("Input should'nt be empty!");
        return;
    }
    var result="";
    for(var i=0;i<numbers.length;i++){
        var num=parseInt(numbers[i]);
        var originalNum=num;
        var rev=0;
        while(num>0){
            var digit=num%10;
            rev=rev*10+digit;
            num=Math.floor(num/10);
        }
        if (originalNum === rev) {
    
            result += "<span class='is-palindrome'>" + originalNum + " is a Palindrome</span><br>";
        } else {
            result += "<span class='is-not-palindrome'>" + originalNum + " is not a Palindrome</span><br>";
        }
    }
    document.getElementById("result2").innerHTML = result;
    numbers = [];
}
document.querySelector('#myForm2 button[type="reset"]').addEventListener("click", function() {
    document.getElementById("inputNum").value = "";
    document.getElementById("result2").textContent = "";
});

//Third Question

function validateNumber(input) {
    if (isNaN(input.value)) {
        input.value = "";
        alert("Invalid input!");
    }
}

function calculateTotal() {
    var subTotal = document.getElementById("subTotal").value;
    var tipPercentage = document.getElementById("tipPercentage").value;

    if (subTotal !== "" && tipPercentage !== "") {
        subTotal = parseFloat(subTotal);
        tipPercentage = parseFloat(tipPercentage);

        var tipAmount = (subTotal * tipPercentage) / 100;

        var totalAmount = subTotal + tipAmount;

        document.getElementById("result3").textContent = "Bill Amount: " + totalAmount;
    } else {
        alert("Please enter the input!");
    }
}

document.querySelector('#myForm3 button[type="reset"]').addEventListener("click", function() {
    document.getElementById("subTotal").value = "";
    document.getElementById("tipPercentage").value = "";
    document.getElementById("result3").textContent = "";
});

