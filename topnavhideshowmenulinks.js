const menuLinks = document.querySelector('.topnav-links');

function topNavHamburgerClicked(){
    if(menuLinks.style.display === 'none'){
        menuLinks.style.display = 'flex';
    } else{
        menuLinks.style.display = 'none';
    };
};