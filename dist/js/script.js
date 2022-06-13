const navMenu=document.getElementById("nav-menu"),navToggle=document.getElementById("nav-toggle"),navClose=document.getElementById("nav-close"),navLink=(navToggle&&navToggle.addEventListener("click",()=>{navMenu.classList.add("show-menu")}),navClose&&navClose.addEventListener("click",()=>{navMenu.classList.remove("show-menu")}),document.querySelectorAll(".nav__link"));function linkAction(){const e=document.getElementById("nav-menu");e.classList.remove("show-menu")}function scrollHeader(){const e=document.getElementById("header");50<=this.scrollY?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}navLink.forEach(e=>e.addEventListener("click",linkAction)),window.addEventListener("scroll",scrollHeader);let testimonialSwiper=new Swiper(".testimonial-swiper",{spaceBetween:30,loop:"true",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),newSwiper=new Swiper(".new-swiper",{spaceBetween:24,loop:"true",breakpoints:{576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}});const sections=document.querySelectorAll("section[id]");function scrollActive(){const s=window.pageYOffset;sections.forEach(e=>{var t=e.offsetHeight,n=e.offsetTop-58,e=e.getAttribute("id");s>n&&s<=n+t?document.querySelector(".nav__menu a[href*="+e+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+e+"]").classList.remove("active-link")})}function scrollUp(){const e=document.getElementById("scroll-up");350<=this.scrollY?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}window.addEventListener("scroll",scrollActive),window.addEventListener("scroll",scrollUp);const cart=document.getElementById("cart"),cartShop=document.getElementById("cart-shop"),cartClose=document.getElementById("cart-close"),themeButton=(cartShop&&cartShop.addEventListener("click",()=>{cart.classList.add("show-cart")}),cartClose&&cartClose.addEventListener("click",()=>{cart.classList.remove("show-cart")}),document.getElementById("theme-button")),darkTheme="dark-theme",iconTheme="bx-sun",selectedTheme=localStorage.getItem("selected-theme"),selectedIcon=localStorage.getItem("selected-icon"),getCurrentTheme=()=>document.body.classList.contains(darkTheme)?"dark":"light",getCurrentIcon=()=>themeButton.classList.contains(iconTheme)?"bx bx-moon":"bx bx-sun";selectedTheme&&(document.body.classList["dark"===selectedTheme?"add":"remove"](darkTheme),themeButton.classList["bx bx-moon"===selectedIcon?"add":"remove"](iconTheme)),themeButton.addEventListener("click",()=>{document.body.classList.toggle(darkTheme),themeButton.classList.toggle(iconTheme),localStorage.setItem("selected-theme",getCurrentTheme()),localStorage.setItem("selected-icon",getCurrentIcon())});
//# sourceMappingURL=script.js.map