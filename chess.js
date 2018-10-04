var box = document.getElementsByClassName("box");


// add event listener to all boxes through a for loop
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener("onfocus", clickedd);
}

function clickedd() {
    console.log(this.className + " clicked");
    this.classList.toggle("focused");
}