const swiper = new Swiper('.slider-main-block', {
   // Optional parameters
   loop: true,
   // Navigation arrows
   navigation: {
     nextEl: '.body-main-block__arrow.swiper-button-next',
     prevEl: '.body-main-block__arrow.swiper-button-prev',
   },
});


// Tabs

// Собираю все навигационные элементы в неживую коллекцию по классу
const tabNavItems = document.querySelectorAll('.tabs-deals__button');
// Собираю все таб элементы
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function(e){
   // Получаю элемент на который я кликнул в константу
   const targetElement = e.target;
   let currentActiveIndex = null;
   let newActiveIndex = null;
   // Далее мне нужно отсеять элементы
   if (targetElement.closest('.tabs-deals__button')) {
      tabNavItems.forEach((tabNavItem, index) => {
         if (tabNavItem.classList.contains('active')) {
            currentActiveIndex = index;
            tabNavItem.classList.remove('active');
         }
         if (tabNavItem === targetElement) {
            newActiveIndex = index;
         }
      })
      targetElement.classList.add('active');
      tabItems[currentActiveIndex].classList.remove('active');
      tabItems[newActiveIndex].classList.add('active');
   }
})