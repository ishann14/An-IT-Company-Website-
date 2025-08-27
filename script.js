
// For Image Slider
const slides = document.querySelectorAll('.slide');
let counter = 0;

// Position slides side by side
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function goToSlide() {
    // Loop counter if out of bounds
    if (counter < 0) counter = slides.length - 1;
    if (counter >= slides.length) counter = 0;

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

function goPrev() {
    counter--;
    goToSlide();
}

function goNext() {
    counter++;
    goToSlide();
}

// Automatic sliding every 2 seconds
setInterval(goNext, 4000);



document.querySelectorAll(a[href^="#"]).forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const navbarheight = document.querySelector("nav").offsetHeight;
            const targetposition = target.offsetTop - navbarheight;
            window.scrollTo({
                top: targetposition,
                behavior: "smooth"
            });
        }

});
})


// ✅ Dropdown toggle (instead of <details>)
document.querySelectorAll("nav .dropdown > summary, nav .dropdown > a").forEach(drop => {
  drop.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("open");
  });
});