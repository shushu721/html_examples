const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkboxInput = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
    heading.textContent = e.target.value;
}

itemInput.addEventListener("input", onInput);

function onChecked(e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? "checked" : "unchecked";
}
checkboxInput.addEventListener("input", onChecked);

function onFocus(e) {
    console.log("input is focused");
    itemInput.style.outlineStyle = "solid";
    itemInput.style.outlineStyle = "red";
    itemInput.style.outlineStyle = "3px";
}
itemInput.addEventListener("focus", onFocus);

function onblur(e) {
    console.log("input is not focused");
    itemInput.style.outlineStyle = "none"; 
}
itemInput.addEventListener("blur", onblur);
priorityInput.addEventListener("change", onInput);

