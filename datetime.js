// JavaScript Document
function updateTime() {
            const now = new Date();
            // 时间格式：HH:mm:ss
            const timeStr = now.toLocaleTimeString('zh-CN', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
            // 日期格式：YYYY-MM-DD
            const dateStr = now.toISOString().split('T')[0];
            
            document.getElementById('time').textContent = timeStr;
            document.getElementById('date').textContent = dateStr;
        }

        // 页面加载时显示当前时间
        updateTime();
        // 每秒更新时间
        setInterval(updateTime, 1000);