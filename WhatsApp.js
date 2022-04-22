
const optionMain = document.querySelector(".options__Main img");
let isOpenOptionMain = false;

optionMain.addEventListener("click", function() {
    isOpenOptionMain = true;
    let container = document.querySelector(".relative");
    container.classList.remove("hidden");
    console.log(isOpenOptionMain);    
})


let body = document.querySelector("body");

body.addEventListener("click", () => isOpenOptionMain = false);

console.log(body);


