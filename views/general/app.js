function iniciarResizing(e) {
    e.preventDefault();

    let aside = document.getElementById('miAside');
    let offsetX = e.clientX;
    let width = aside.offsetWidth;

    function redimensionar(e) {
        let nuevoAncho = width - (e.clientX - offsetX);
        aside.style.width = nuevoAncho + 'px';
    }

    function detenerResizing() {
        document.removeEventListener('mousemove', redimensionar);
        document.removeEventListener('mouseup', detenerResizing);
    }

    document.addEventListener('mousemove', redimensionar);
    document.addEventListener('mouseup', detenerResizing);
}