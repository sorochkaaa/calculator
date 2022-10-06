function initGridArea() {
    const grid = document.querySelector('.grid-calculator');
    [...grid.children].forEach(element => {
        element.style["grid-area"] = element.id;
    });
}

initGridArea();