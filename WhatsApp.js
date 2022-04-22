
const optionMain = document.querySelector(".options__Main img");
let isOpenOptionMain = false;

optionMain.addEventListener("click", function() {
    isOpenOptionMain = true;
    let container = document.querySelector(".relative");
    container.classList.remove("hidden");       
})


