const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = document.querySelectorAll(".progress-bar");
            bars.forEach(bar => {
                const target = parseInt(bar.getAttribute("data-percentage"));
                let width = 0;

                const fill = setInterval(() => {
                    if (width >= target) {
                        clearInterval(fill);
                    } else {
                        width++;
                        bar.style.width = width + "%";
                    }
                }, 10);
            });
            obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

const skillSection = document.getElementById("skill-section");
if (skillSection) {
    observer.observe(skillSection);
}