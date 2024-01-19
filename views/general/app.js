if(document.title.includes("Monitor")){
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
    
        function detenerResizing() {
            document.removeEventListener('mousemove', redimensionar);
            document.removeEventListener('mouseup', detenerResizing);
        }
    
        document.addEventListener('mousemove', redimensionar);
        document.addEventListener('mouseup', detenerResizing);
    }
    
    
}

if(document.title.includes("Filtros")){
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
    
     
}