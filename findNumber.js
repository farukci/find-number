function myFunc(){
    const num = document.getElementById("number").value;
    if (num==""){
        document.getElementById("warn").innerHTML = "Weite the number";
    }
    else {
        document.getElementById("warn").innerHTML = "Number is " + num;
    }
    
}