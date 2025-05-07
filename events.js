const parentElement = document.getElementById('parentElement'); // 父元素的 id 不变

parentElement.addEventListener('touchstart', function (e) {
    const target = e.target; // 获取触发事件的目标元素

    // --------------------- 判断是否为按钮（通过 class 识别） ---------------------
    if (target.classList.contains('button-class')) { // 替换为按钮的实际 class
        // 执行按钮逻辑（如跳转链接）
        window.location.href = target.href;
        e.preventDefault(); // 阻止触摸事件冒泡，避免影响拖动
        return; // 提前退出，避免后续逻辑干扰
    }

    // --------------------- 判断是否为可拖动元素（通过 class 识别） ---------------------
    if (target.classList.contains('draggable')) { // 替换为可拖动元素的实际 class
        // 初始化拖动参数
        let startX, startY;
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;

        // 触摸移动时更新位置
        const handleTouchMove = function (moveE) {
            const moveTouch = moveE.touches[0];
            const offsetX = moveTouch.clientX - startX;
            const offsetY = moveTouch.clientY - startY;
            
            // 更新元素位置（支持多个同类可拖动元素）
            target.style.left = (parseInt(target.style.left) + offsetX) + 'px';
            target.style.top = (parseInt(target.style.top) + offsetY) + 'px';
        };

        // 触摸结束时移除事件监听
        const handleTouchEnd = function () {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };

        // 绑定触摸移动和结束事件
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);

        e.preventDefault(); // 阻止浏览器默认触摸行为（如滚动）
    }
});