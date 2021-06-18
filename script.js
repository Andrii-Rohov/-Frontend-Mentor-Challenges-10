let button = document.querySelectorAll(".faq-open");
let box = document.querySelectorAll(".faq-boxes");
let head = document.querySelectorAll(".faq-head")

button[0].onclick = function() {
    box[0].classList.toggle("text-visible");
    box[0].classList.toggle("text-hide");
    head[0].classList.toggle('bold-text');
}
button[1].onclick = function() {
  
    box[1].classList.toggle("text-visible");
    box[1].classList.toggle("text-hide");
    head[1].classList.toggle('bold-text')
}

button[2].onclick = function() {
    box[2].classList.toggle("text-visible");
    box[2].classList.toggle("text-hide");
    head[2].classList.toggle('bold-text');
}
button[3].onclick = function() {
    
    box[3].classList.toggle("text-visible");
    box[3].classList.toggle("text-hide");
    head[3].classList.toggle('bold-text');
}
button[4].onclick = function() {
    box[4].classList.toggle("text-visible");
    box[4].classList.toggle("text-hide");
    head[4].classList.toggle('bold-text');
}



