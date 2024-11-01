const listItems = document.querySelectorAll(".item");
// console.log(listItems);
console.log(listItems[0].innerText);
listItems[1].style.color = "blue";

//listItems.forEach((item, index) => { 
//    console.log(item.innerText);
//    item.style.color = "red";
//    if (index == 0) {
//        item.remove();
//    }
//});

//return HTML collections
const listItem2 = document.getElementsByClassName("item");
console.log(listItem2);
console.log(listItem2[1].innerText);

//return into an array (as prototype=array)
const listItemsArray = Array.from(listItem2);
console.log(listItemsArray);

const listItem3 = document.getElementsByTagName("li");
console.log(listItem3);
console.log(listItem3[1].innerText);
