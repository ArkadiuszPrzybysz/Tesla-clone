const content = document.querySelector('.carousel-content');
const dots = document.querySelector('.carousel-dots');

document.getElementById('dot1').addEventListener('click', ()=> {
    content.className = 'carousel-content first-active';
    dots.className = 'carousel-dots first-current';
});
document.getElementById('dot2').addEventListener('click', ()=> {
    content.className = 'carousel-content second-active';
    dots.className = 'carousel-dots second-current';
});
document.getElementById('dot3').addEventListener('click', ()=> {
    content.className = 'carousel-content third-active';
    dots.className = 'carousel-dots third-current';
});
document.getElementById('dot4').addEventListener('click', ()=> {
    content.className = 'carousel-content fourth-active';
    dots.className = 'carousel-dots fourth-current';
});
document.getElementById('dot5').addEventListener('click', ()=> {
    content.className = 'carousel-content fifth-active';
    dots.className = 'carousel-dots fifth-current';
});