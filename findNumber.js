var rand = Math.floor((Math.random() * 100) + 1);
document.getElementById("demo").innerHTML = rand;

var input = document.getElementById("number");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("click").click();
    }
});

function myFunc(){
    const num = document.getElementById("number").value;
    if (num==""){
        document.getElementById("warn").innerHTML = "Weite the number";
    }
    else {
        if (num==rand){
            window.alert(`You are the winner :D. You guest after ${count+1} times!`);
            if (confirm("You wanna play again?")) {
                document.getElementById("click-count").remove();
                location.reload();
            } else {
                document.getElementById("warn").innerHTML = "Thanks for game!";
                document.getElementById("click-count").remove();
            }
        }
        else if (num < rand){
            document.getElementById("warn").innerHTML = "I am thinking about higher number";
        }
        else if (num > rand){
            document.getElementById("warn").innerHTML = "I am thinking about lower number";
        }
    }
    document.getElementById("number").value = "";
    document.getElementById("number").focus();
}

var click = document.getElementById("click"), count = 0;

function clickCount() {
  count += 1;
  document.getElementById("click-count").innerHTML = "This is your test number: " + count;
};