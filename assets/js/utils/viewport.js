export function setViewPortSize($el) {
    const ViewPortBlockSize = getViewPort();
    $el.style.blockSize = `${ViewPortBlockSize}px`;
}

export function getViewPort() {
    return window.innerHeight
}

export function onViewPortResize(callback) {
    window.addEventListener('resize', callback)
}

export function offViewPortResize(callback) {
    window.removeEventListener('resize', callback)
}

export function viewPortSize($el) {

    setViewPortSize($el)
    
    onViewPortResize(() => setViewPortSize($el));

}
