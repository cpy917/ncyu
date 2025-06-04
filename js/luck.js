const luckBox = document.querySelector(".luck");
const h3s = luckBox.querySelectorAll(".h3");

const originalText = ["滑", "鼠", "放", "看"];
const hoverText = ["歡", "迎", "來", "訪"];

luckBox.addEventListener("mouseenter", () => {
    h3s.forEach((el, i) => {
        el.textContent = hoverText[i];
    });
});

luckBox.addEventListener("mouseleave", () => {
    h3s.forEach((el, i) => {
        el.textContent = originalText[i];
    });
});
