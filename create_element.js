const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title", "My Element");
div.textContent = "My Element";

const text = document.createTextNode("Hello world");
div.appendChild(text);

document.querySelector("ul").appendChild(div);
console.log(document.querySelector("ul"));

