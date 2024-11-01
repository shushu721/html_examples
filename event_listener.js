const clearBtn = document.querySelector("#clear");

// case 1 : old style to add event
//clearBtn.onclick = () => {
//    alert("clear all");
//};

//
//clearBtn.onclick = () => {
//    console.log("clear all log");
//};

// case 2 : add event listener to a button
//clearBtn.addEventListener("click", () => {
//    alert("clear all event listener");
//});

//clearBtn.addEventListener("click", () => {
//    console.log("log of clear all event listener");
//});

// case 3 : use callback function
function onClear() {

    const itemList = document.querySelector("ul");
    //const items = itemList.querySelectorAll("li");
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    };
}

//  clearBtn.addEventListener("click", onClear);

// case 4 : event listener with web API
setTimeout(() => clearBtn.addEventListener("click", onClear), 5000);
