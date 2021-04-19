const header = document.querySelector('header');
let startingPoint;

header.addEventListener('mouseenter', (e) => {
    startingPoint = e.clientX;
    header.classList.add('moving');
})

header.addEventListener('mouseleave', (e) => {
    header.style.setProperty('--percentage', 0.5);
    header.classList.remove('moving');
})

header.addEventListener('mousemove', (e) => {
    let percentage = (e.clientX - startingPoint) / window.outerWidth + 0.5;

    header.style.setProperty('--percentage', percentage);
})