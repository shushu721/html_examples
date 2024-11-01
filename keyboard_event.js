const itemInput = document.getElementById("item-input");

// simple keypress
const onKeyPress = (e) => {
    console.log("key press");
};
itemInput.addEventListener("keypress",onKeyPress);

// onkeydown
const onKeyDown = (e) => {
    console.log("key down");
    // check key code
    //if (e.key == "Enter") {
    //    alert("enter");
    //};
    if (e.keyCode == 13) {
        alert("pressed enter");
    };
    if (e.code == "Digit1") {
        alert("pressed 1");
    };
    if (e.repeat) {
        console.log("you are holding down" + e.key);
    };
    console.log("shift" + e.shiftKey);
    console.log("Alt" + e.altKey);
    console.log("Control" + e.CtrlKey);
    if (e.shiftKey && e.key == "K") {
        console.log("you pressed shift and k");
    };

};
itemInput.addEventListener("keydown", onKeyDown);

// onkeyup
const onKeyUp = (e) => {
    console.log("key up");
};
itemInput.addEventListener("keyup", onKeyUp);