const element = document.querySelectorAll(".scroll-hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add("scroll-show")
        }
    }));
});

element.forEach((el) => observer.observe(el));