function myFunctionOne() {
    alert("I am a notification based from the browser!")
}

function myFunctionTwo() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("text-1").innerHTML = txt;
}

function myFunctionThree() {
    let text;
    let person = prompt("Please enter your name:","");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text= "Hello " + person + "! How are you today?"
    }
    document.getElementById("text-2").innerHTML = text;
}