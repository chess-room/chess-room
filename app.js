// 基础功能：点击预约  
document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', () => {
        if(!slot.classList.contains('booked')) {
            slot.classList.add('booked');
            slot.textContent += ' (已预约)';
        }
    });
});
