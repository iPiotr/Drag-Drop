const box = document.querySelector('.box');
const windows = document.querySelectorAll('.window');

box.addEventListener('dragstart', dragStart);
box.addEventListener('dragend', dragEnd);

for (const window of windows) {
    window.addEventListener('dragover', dragOver);
    window.addEventListener('dragenter', dragEnter);
    window.addEventListener('dragleave', dragLeave);
    window.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = 'box';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' applied';
}

function dragLeave() {
    this.className = 'window';
}

function dragDrop() {
    this.className = 'window inside';
    this.append(box);
}