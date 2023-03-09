class MobileNavbar {
    constructor() {

        this.mobileMenu = document.querySelector(this.mobileMenu)
        this.navList = document.querySelector(this.navList);
        this.navLinks = document.querySelectorAll(this.navLinks);
        this.activeClass = "active";

    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click" , () => console.log ("hey"));
        
    }

    init() {
    
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
    
}

const mobileNavbar = new MobileNavbar(

    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

mobileNavbar.init();