function updateTimeStatus() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeText = `${hours}:${minutes}:${seconds}`;
    document.getElementById("current-time").textContent = timeText;

    // 上班時間：11:00 ~ 凌晨 2:30（即 11 ~ 2:30）
    // 判斷：如果時間在 2:30 到 11:00 => 下班，其他都上班
    const totalMinutes = hours * 60 + now.getMinutes();
    const isOff =
        totalMinutes >= (2 * 60 + 30) && totalMinutes < (11 * 60);

    let statusText;
    if (totalMinutes >= 150 && totalMinutes < 660) {
        statusText = "下班中";
    } else {
        statusText = "上班中";
    }
    document.getElementById("work-status").textContent = statusText;
}

// 初始化 + 每秒更新
updateTimeStatus();
setInterval(updateTimeStatus, 1000);