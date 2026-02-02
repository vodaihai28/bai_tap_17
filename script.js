const wheel = document.getElementById("wheel");
const images = wheel.querySelectorAll("img");

const radius = 120;
let angle = 0;
let speed = 0.02;
let ispaused = false;

function positionImages() {
    images.forEach((img, index) => {
        const imgAngle = angle + (index * 2 * Math.PI / images.length);
        const x = 150 + radius * Math.cos(imgAngle) - 40;
        const y = 150 + radius * Math.sin(imgAngle) - 40;
        img.style.left = x + "px";
        img.style.top = y + "px";
    });
}

function rotate() {
    if (!ispaused) {
        angle += speed;
        positionImages();
    }
    requestAnimationFrame(rotate);
}

images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        ispaused = true;
    });
    img.addEventListener("mouseleave", () => {
        ispaused = false;
    });
});

positionImages();
rotate();
