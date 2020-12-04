let box = document.querySelector('.box');
let moveBy = 50;
 
window.addEventListener('load', () => {
    box.style.position = 'absolute';
    box.style.left = 0;
    box.style.top = 0;
});
 
 
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            box.style.left = parseInt(box.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            box.style.left = parseInt(box.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            box.style.top = parseInt(box.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            box.style.top = parseInt(box.style.top) + moveBy + 'px';
            break;
    }
});