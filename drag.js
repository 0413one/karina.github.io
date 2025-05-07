// JavaScript Document
const div = document.getElementById('draggable');
        let isDragging = false;
        let startX, startY, xOffset, yOffset;

        // 鼠标事件（PC端）
        div.addEventListener('mousedown', startDrag);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('mousemove', drag);

        // 触摸事件（手机端）
        div.addEventListener('touchstart', startDrag);
        document.addEventListener('touchend', endDrag);
        document.addEventListener('touchmove', drag);

        function startDrag(e) {
            // 处理触摸事件的坐标
            const touch = e.touches ? e.touches[0] : e;
            startX = touch.clientX;
            startY = touch.clientY;
            xOffset = div.offsetLeft - startX;
            yOffset = div.offsetTop - startY;
            
            isDragging = true;
            e.preventDefault(); // 阻止触摸时的默认行为（如选中文字、滚动页面）
        }

        function endDrag() {
            isDragging = false;
        }

        function drag(e) {
            if (!isDragging) return;
            
            // 处理触摸事件的坐标
            const touch = e.touches ? e.touches[0] : e;
            const currentX = touch.clientX;
            const currentY = touch.clientY;
            
            // 计算新位置
            const newX = currentX + xOffset;
            const newY = currentY + yOffset;
            
            // 限制拖动范围（可选）
            // const maxX = window.innerWidth - div.offsetWidth;
            // const maxY = window.innerHeight - div.offsetHeight;
            // const clampedX = Math.max(0, Math.min(newX, maxX));
            // const clampedY = Math.max(0, Math.min(newY, maxY));
            
            // 应用位置
            div.style.left = `${newX}px`;
            div.style.top = `${newY}px`;
            
            if (e.touches) e.preventDefault(); // 阻止触摸移动时的页面滚动
        }