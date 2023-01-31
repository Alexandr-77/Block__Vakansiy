
let clickOpen = document.querySelectorAll('.vacancies__link-podr');
let open = document.querySelectorAll('.vacancies__block-over');
let close = document.querySelectorAll('.vacancies__over-close');

let itemVacancies = document.querySelectorAll('.vacancies__box-item');
let vacanciesActive = document.querySelectorAll('.vacancies__active');


for (let i = 0; i < clickOpen.length; i++) {
   clickOpen[i].addEventListener('click', function () {
      open[i].style.display = "block "; 
      // itemVacancies[i].style.position = 'absolute';
      itemVacancies[i].classList.add('vacancies__active');
      
   });  
   close[i].addEventListener('click', function () {
      open[i].style.display = "none "; 
      itemVacancies[i].classList.remove('vacancies__active'); 
   });  
}


