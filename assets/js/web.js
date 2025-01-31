document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".seasonal-imgs");

    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        });
    },
      { threshold: 0.2 } // 20%が見えたら発火
    );

    images.forEach((img) => {
    observer.observe(img);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".imgs2");
    
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        });
    },
      { threshold: 0.2 } // 20%が見えたら発火
    );

    images.forEach((img) => {
    observer.observe(img);
    });
});