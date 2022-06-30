$('.slider').slick({
    arrows:false,
    dots:true,
    autoplay: true,
    autoplaySpeed: 3000,
});

// Ищем нужные элементы бургер и меню
const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__menu__list')

const headerContent = document.querySelector('.content__wrapper')
// Вещаем событие на бургер и добовляем переключатель с классом active
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    headerContent.classList.toggle('hide')
   /*  window.addEventListener('scroll', noscroll)
    function noscroll() {
    window.scrollTo(0,0)
    } */

})
// При нажатии на сылку из меню удаляем класс active
document.querySelectorAll('.menu__list').forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
    headerContent.toggle('hide')
}))

/* window.addEventListener('scroll', noscroll)
function noscroll() {
    window.scrollTo(0,0)
}

 */
