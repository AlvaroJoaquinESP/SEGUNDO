window.addEventListener("scroll",function() {
    
    var scrolly = window.scrollY;
    var hero = document.querySelector(".hero");
    hero.style.backgroundPositionY = scrolly * 0.1 + "px";
});