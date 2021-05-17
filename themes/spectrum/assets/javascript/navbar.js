let burgerButton = document.getElementById('burger-menu')

burgerButton.addEventListener('click', function(e){
    e.currentTarget.classList.toggle('__active');
    document.body.classList.toggle('no-scroll')
})