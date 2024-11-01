// remove item
function removeClearButton() {
    const clearBtn = document.querySelector("#clear");
    clearBtn.remove();
}

// remove child from parent
function removeFirstItem() {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li");
    ul.removeChild(li);
}
removeFirstItem();

function removeItem(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}
//removeItem(3);

function removeItemX(itemNumber) {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll("li")[itemNumber - 1];
    ul.removeChild(li);
}
//removeItemX(3);

function removeItemY(itemNumber) {
    const li = document.querySelectorAll("li");
    li[itemNumber - 1].remove();
}
//removeItemY();

function removeItemZ(itemNumber) {
    document.querySelectorAll("li")[itemNumber - 1].remove();
}
removeItemZ();