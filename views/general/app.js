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

document.addEventListener("DOMContentLoaded", function () {
    let filterIcon = document.getElementById("filterIcon");
    let filterContainer = document.querySelector(".search__filters");
    let searchResult = document.querySelector(".search__result"); 

    
    filterIcon.addEventListener("click", function () {        
        let isFiltersVisible = filterContainer.style.display !== "none";

        filterContainer.style.display = isFiltersVisible ? "none" : "flex";
        searchResult.style.width = isFiltersVisible ? "100%" : "70%"
    });
});
