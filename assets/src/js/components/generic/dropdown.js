$('.services-menu').click(function () {
    document.querySelector('.services-dropdown').classList.toggle('visible');
    document.querySelector('.services-menu').classList.toggle('active');
})

// $('html').click(function(){
//     document.querySelector('.services-dropdown').classList.remove('visible');
//     document.querySelector('.services-menu').classList.remove('active');
// })

$('.services-menu-mobile').click(function () {
    document.querySelector('.services-dropdown-mobile').classList.toggle('visible');
    document.querySelector('.services-menu-mobile').classList.toggle('active');
})

window.addEventListener('mouseup', function (event) {
    var box = document.getElementById('drop');
    var services = document.getElementById('services');
    if (event.target != box || event.target == services) {
        document.querySelector('.services-dropdown').classList.remove('visible');
        document.querySelector('.services-menu').classList.remove('active');
    }

});





// window.onload = function()
//  {
//     var dropdown = document.querySelector('.services-dropdown');
//     document.onclick =function (e)
//     {
//     if(e.target.classList !== ('.services-dropdown')){
//         dropdown.style.display = 'none';
//     }
//     };
// };

// $('html').click(function() {
//     if(dropdown.classList.contains('visible')){
//         dropdown.classList.remove('visible')
//     }
// });

// $('html').click(function() {
//     if(dropdown.is(':visible')){
//     dropdown.hide();	
//     }
// });

// var dropdown = document.querySelector('.services-dropdown');

// window.onclick (function (event) {
//     if (event.target != dropdown) {
//         dropdown.style.display = "none";
//     }
// })

// window.onclick = function (event) {
//     if(event.target == dropdown) {
//     document.querySelector('.services-dropdown').classList.remove('visible');
//     document.querySelector('.services-menu').classList.remove('active');
// }
// }