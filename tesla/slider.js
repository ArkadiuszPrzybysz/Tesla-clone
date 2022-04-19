const overlay = document.querySelector('header nav.center .overlay');
const nav_models = document.querySelectorAll('header nav a');

nav_models.forEach((list_item) => {
    list_item.addEventListener('mouseover', () => {
        overlay.classList.add('active');
        let position = list_item.getBoundingClientRect();
        overlay.style.left = position.x + 'px';
        overlay.style.top = position.y + 'px';
        overlay.style.height = position.height + 'px';
        overlay.style.width = position.width + 'px';
    });
    list_item.addEventListener('mouseout', () => {
        overlay.classList.remove('active');
    });
});