function insertElement() {
    const filter = document.querySelector("*.filter");
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjustElement";
    // apply insertAdjustElement can only once to the same element
    filter.insertAdjacentElement("beforebegin", h1);
    const h1clone = h1.cloneNode(true);
    filter.insertAdjacentElement("afterend",h1clone);
}
insertElement();

function insertText() {
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("beforebegin","insertAdjustText");
    item.insertAdjacentText("afterbegin","insertAdjustText")
}
insertText();

function insertHtml() {
    const cleanBtn = document.querySelector("#clear");
    cleanBtn.insertAdjacentHTML("beforebegin", "<h2>insertAdjustHTML</h2>");
    cleanBtn.insertAdjacentHTML("afterbegin", "<h2>insertAdjustHTML</h2>");
}    
insertHtml();

function insertBeforeItem() {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insertBefore";
    const thirdItem = document.querySelector("li:nth-child(3)");
    ul.insertBefore(li,thirdItem);
}
insertBeforeItem();

//self writing a insertAfter function
function insertAfter(newE, existingE) {
    existingE.parentElement.insertBefore(newE, existingE.nextSibling);
}
const ul = document.querySelector("ul");
const li = document.querySelector("li");
li.textContent = "insertAfter";
const firstItem = document.querySelector("li:nth-child(4)");
insertAfter(li, firstItem);