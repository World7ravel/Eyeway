const header = document.querySelector('.site-header');

window.addEventListener('scroll', cambioColoreHeader);

function cambioColoreHeader() {

    
    if(window.scrollY > 50 ){
        
        header.style.backgroundColor = '#212529';

    }

    else{

        header.style.backgroundColor = '';

    }
}

const bottonMobile = document.querySelector('.mobile-botton');

bottonMobile.addEventListener('click', menuResponsive)

function menuResponsive(){

    const navbarnav = document.querySelector('.navbar-nav');

    navbarnav.style.display = 'block';

    bottonMobile.style.display = 'none';
}
