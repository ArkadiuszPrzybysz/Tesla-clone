const spec = document.querySelector('.models').querySelectorAll('.model-box');


spec.forEach(element => {
    element.addEventListener('click', function(){
        spec.forEach(model=>model.classList.remove('active'))

        this.classList.add('active');
    })
});