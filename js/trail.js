const trailCount = 8;
const trails = [];

for (let i = 0; i < trailCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('trail');
    dot.style.opacity = `${0.3 - i * 0.02}`;
    dot.style.transform = `scale(${1 - i * 0.05})`;
    document.body.appendChild(dot);
    trails.push({ element: dot, x: 0, y: 0 });
}

let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateTrail() {
    let x = mouseX, y = mouseY;

    trails.forEach((trail) => {
        trail.x += (x - trail.x) * 0.3;
        trail.y += (y - trail.y) * 0.3;

        trail.element.style.left = `${trail.x}px`;
        trail.element.style.top = `${trail.y}px`;

        x = trail.x;
        y = trail.y;
    });

    requestAnimationFrame(animateTrail);
}

animateTrail();




