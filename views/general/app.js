const handle = document.getElementById('handle');
const leftDiv = document.getElementById('left');
const rightDiv = document.getElementById('right');

let isDragging = false;

handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
        isDragging = false;
        document.removeEventListener('mousemove', handleMouseMove);
    });
});

function handleMouseMove(e) {
    if (isDragging) {
        const containerRect = document.getElementById('container').getBoundingClientRect();
        const percent = (e.clientX - containerRect.left) / containerRect.width;
        leftDiv.style.flex = percent;
        rightDiv.style.flex = 1 - percent;
    }
}