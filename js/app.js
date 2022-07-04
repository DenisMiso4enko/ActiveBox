// Слайд
$('.slider').slick({
    arrows:false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 3000,
});
// Fixed Header
$(function() {
    let header = $('#header')
    let intro = $('#intro')
    let introHeight = intro.innerHeight()
    let scrollPosition = $(window).scrollTop()
    
    $(window).on('scroll', function() {
        scrollPosition = $(this).scrollTop()
        if (scrollPosition > introHeight) {
            header.addClass('fixed')
        } else {
            header.removeClass('fixed')
        }
        //console.log(scrollPosition);
    })
})

// Ищем нужные элементы бургер и меню
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__menu__list')
const link = document.querySelectorAll('.item__link')
console.log(link);

const headerContent = document.querySelector('.content__wrapper')
// Вещаем событие на бургер и добовляем переключатель с классом active
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    headerContent.classList.toggle('unvisible')

})
// При нажатии на сылку из меню удаляем класс active
document.querySelectorAll('.menu__list').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
}))
link.forEach(function(item) {
    item.addEventListener('click', function() {
        //console.log('click on link');
        menu.classList.remove('active')
        burger.classList.remove('active')
        headerContent.classList.remove('unvisible')
    })
})




/* window.addEventListener('scroll', noscroll)
function noscroll() {
    window.scrollTo(0,0)
}

 */
