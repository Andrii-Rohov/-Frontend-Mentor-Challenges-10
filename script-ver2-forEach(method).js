let buttons = document.querySelectorAll(".faq-open");
let boxes = document.querySelectorAll(".faq-boxes");
let headers = document.querySelectorAll(".faq-head");

buttons.forEach((button, i) => {
    button.addEventListener("click",  () => {
        boxes[i].classList.toggle("text-visible");
        boxes[i].classList.toggle("text-hide");
        headers[i].classList.toggle('bold-text');
    });
});