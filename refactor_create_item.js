function createItem(item) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));

    //const button = createButton("remove-item btn-link text-red");
    const button = createSubElement("remove-item btn-link text-red", "button");
    const icon = createSubElement("fa-solid fa-xmark", "i");
    button.appendChild(icon);
    li.appendChild(button);

    li.appendChild(button);
    document.querySelector("*.items").appendChild(li);
}

function createButton(classes) {
    const button = document.createElement("button");
    button.className = classes;
    //const icon = createIcon("fa-solid fa-xmark");
    const icon = createSubElement("fa-solid fa-xmark");
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement("i");
    icon.className = classes;
    return icon;
}

function createSubElement(classes, e_type) {
    const subElement = document.createElement(e_type);
    subElement.className = classes;
    return subElement;
}

createItem("mango");