// locate an element
console.log(document.getElementById("app-title"));

//get element's attribute
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));

//update element's attribute
document.getElementById("app-title").setAttribute("class", "Initial");
document.getElementById("app-title").title="Shipping List";
appClass = document.getElementById("app-title").getAttribute("class");
appClass += " shopping";
document.getElementById("app-title").setAttribute("class", appClass);
console.log(document.getElementById("app-title").getAttribute("class"));

const h1 = document.getElementById("app-title");
console.log(h1.textContent);
h1.textContent = "hello";
h1.innerText = "hello again";
h1.innerHTML = "<strong>Skip shop</strong>";
h1.style.color = "blue";
h1.style.backgroundColor = "green";
h1.style.padding = "10px";
h1.style.borderRadius = "5px";

//user CSS selector
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
console.log(document.querySelector(".container"));
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple juice";
secondItem.style.color = "red";

const list = document.querySelector("ul");
console.log(list);
const firstItem = document.querySelector("li");
firstItem.style.color = "blue";

