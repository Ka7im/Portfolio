const hamburger = document.querySelector('.hamburger'), menu = document.querySelector('.menu'), close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.rating__percent'), progress = document.querySelectorAll('.rating__progress');

percent.forEach((item, i) => {
    progress[i].style.width = item.innerText;
});