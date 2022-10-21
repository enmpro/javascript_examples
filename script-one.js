function myFunctionOne() {
    alert("This is a notification!!!");
}

function myFunctionTwo() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed ok!";
    } else {
        txt = "You pressed cancel!";
    }
    document.getElementById("text").innerHTML = txt;
}

function myFunctionThree() {
    let text;
    let person = prompt("Please enter your name:","");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + "! How are you?";
    }
    document.getElementById("text-two").innerHTML = text;
}