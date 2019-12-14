$(document).ready(function () {
  var link = $('.header-content__menu_link');
  // создаем переменные
  var link_active = $('.header-content__menu_link_active');
  //переменнная для активного меню:
  var menu = $('.header-content__menu');
  //при клике, чтобы убиралось меню
  var nav_link = $('.header-content__menu a')
  link.click(function () {
    link.toggleClass('header-content__menu_link_active');
    // действия над переменными, присуждаем другой класс
    menu.toggleClass('header-content__menu_active');
    //переменной menu  с классом .menu присваиваем класс .menu_active
  });
  nav_link.click(function () {
    link.toggleClass('header-content__menu_link_active');
    menu.toggleClass('header-content__menu_active');
    // link.removeClass('header-navigation-link_active');
    // убираем присужденный класс
  });
});