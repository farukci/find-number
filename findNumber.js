var rand = Math.floor((Math.random() * 100) + 1);
document.getElementById("demo").innerHTML = rand;

function myFunc(){
    const num = document.getElementById("number").value;
    if (num==""){
        document.getElementById("warn").innerHTML = "Weite the number";
    }
    else {
        if (num==rand){
            window.alert(`You are the winner :D. You guest after ${count+1} times!`);
            // confirm("You wanna play again?");
            if (confirm("You wanna play again?")) {
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
}

var click = document.getElementById("click"), count = 0;

function clickCount() {
  count += 1;
  document.getElementById("click-count").innerHTML = "This is your test number: " + count;
};

// function playAgain() {
//     var txt;
//     if (confirm("You wanna play again?")) {
//         txt = "You pressed OK!";
//     } else {
//         txt = "You pressed Cancel!";
//     }
//     document.getElementById("demo2").innerHTML = txt;
// }


// You are the winner :D. You guest after4 times!
// You wanna play again?
// Thanks for game!