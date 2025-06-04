const cards = document.querySelectorAll(".tag-card");
const zone = document.querySelector(".tag-zone");

cards.forEach(card => {
    const zoneRect = zone.getBoundingClientRect();

    // 預設隨機位置（確保不超出容器）
    const randomX = Math.random() * (zone.offsetWidth - 150); // 卡片寬度預估
    const randomY = Math.random() * (zone.offsetHeight - 60); // 卡片高度預估
    card.style.left = `${randomX}px`;
    card.style.top = `${randomY}px`;

    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    card.addEventListener("mousedown", (e) => {
        isDragging = true;

        const cardRect = card.getBoundingClientRect();
        offsetX = e.clientX - cardRect.left;
        offsetY = e.clientY - cardRect.top;

        card.style.zIndex = 999;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const zoneRect = zone.getBoundingClientRect();
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;

        // 滑鼠位置相對於 zone
        let x = e.clientX - zoneRect.left - offsetX;
        let y = e.clientY - zoneRect.top - offsetY;

        // 限制拖曳邊界（不能超出 zone）
        x = Math.max(0, Math.min(x, zone.offsetWidth - cardWidth));
        y = Math.max(0, Math.min(y, zone.offsetHeight - cardHeight));

        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        card.style.zIndex = "";
    });
});