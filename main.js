function toggleMenu(){
    const moibleNav = document.getElementById('mobile-nav');
    const openSvg = document.getElementById('open-svg');
    const closeSvg = document.getElementById('close-svg');

    openSvg.classList.toggle('open-svg-icon')
    closeSvg.classList.toggle('close-svg-icon')
    moibleNav.classList.toggle('show');
}

const scrollUpButton = document.getElementById('scroll-up-icon');


   /*window.addEventListener('scroll', () =>{
        scrollUpButton.classList.toggle('display-scroll-up-icon', window.scrollY > 0);
    })*/

    window.onscroll = () =>{
        scrollUpButton.classList.toggle('display-scroll-up-icon', window.scrollY > 0);
    }