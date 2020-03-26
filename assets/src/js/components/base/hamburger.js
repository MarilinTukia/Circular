const mobileToggle = document.querySelector('.navigation__burger');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        document.querySelector('.navigation__mobile').classList.toggle('visible');
        document.querySelector('body').classList.toggle('overflow--disable');
        mobileToggle.classList.toggle('active');
    });
}

$('#menu a').click(function() {
    document.querySelector('.navigation__burger').classList.remove('active');
    document.querySelector('body').classList.remove('overflow--disable');
    document.querySelector('.navigation__mobile').classList.remove('visible');
})
