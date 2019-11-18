import './burger.scss';

const burgers = document.querySelectorAll('.burger');
const wrapper = document.querySelector('.main-nav__wrapper');
const { forEach } = Array.prototype;

forEach.call(burgers, (burger) => {
  burger.addEventListener('click', () => {
    forEach.call(burgers, (burg) => {
      burg.classList.toggle('burger_close');
    });
    wrapper.classList.toggle('main-nav__wrapper_opened');
    wrapper.classList.add('main-nav__wrapper_animated');
  });
});
