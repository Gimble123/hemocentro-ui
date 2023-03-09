const navBarMobile = document.getElementsByClassName("navmob");

function toggleMenu() {

    const navBar = document.getElementsByClassName("navbar");
    navBar.classList.toggle("active");


}

navBarMobile.addEventlistener("click", toggleMenu);


