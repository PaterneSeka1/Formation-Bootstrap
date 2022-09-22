const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
burger.classList.toggle('active');
});
.active span{
    background-color: transparent;
}
.active span::before{
    transform: translateY(0px) rotateZ(45deg);
}
.active span::after{
    transform: translateY(0px) rotateZ(-45deg);
}