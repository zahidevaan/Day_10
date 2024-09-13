 const closeBtn = document.querySelector('.close-btn');
 const mobileMenuWrapr = document.querySelector('.mobile-menu-wrapper');
 const hmaburgerIcon = document.querySelector('.hmaburger-icon')


 hmaburgerIcon.addEventListener('click', () => {
    mobileMenuWrapr.style.transform = "translateX(0%)";
    
 })

closeBtn.addEventListener('click', () => {
    mobileMenuWrapr.style.transform = "translateX(100%)";

 })