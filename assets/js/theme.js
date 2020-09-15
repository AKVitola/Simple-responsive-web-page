function transformIcon(menuIcon) {
    menuIcon.classList.toggle("change");
}
function closeMenu() {
    document.getElementById("main_nav").style.height = "0%";
}
function openMenu() {
    document.getElementById("main_nav").style.height = "100%";
}

let liElements = document.getElementById("main_nav").getElementsByTagName("li");
for (let i = 0; i < liElements.length; i++) {
    liElements[i].addEventListener('click', closeMenuOnSelect);
    liElements[i].addEventListener("click", function setActiveMenuItem() {
        for (let j = 0; j < liElements.length; j++) {
            liElements[j].classList.remove("active");
        }
        liElements[i].classList.add("active");
    });
}
function closeMenuOnSelect() {
    if (document.body.offsetWidth <= 600) {
        closeMenu();
        transformIcon(document.getElementById("menu-icon"));
    }
}

const links = document.querySelectorAll("#main_nav ul a");
for (const link of links) {
    link.addEventListener("click", smoothScroll);
}
function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
    startPageScrolling();
}

goToTopButton = document.getElementById("goToTopButton");
window.onscroll = function () { displayGoToTopButton() };
function displayGoToTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
}
function goToTop() {
    document.querySelector("#home").scrollIntoView({
        behavior: "smooth"
    });
}

function stopPageScrolling() {
    document.body.style.overflow = "hidden";
}
function startPageScrolling() {
    document.body.style.overflow = "scroll";
}
function hideButtonInOverlayMenu() {
    document.getElementById("goToTopButton").style.display = "none";
}
function toggleMenu() {
    if (document.getElementById("main_nav").style.height !== "100%") {
        openMenu();
        stopPageScrolling();
        hideButtonInOverlayMenu();
    } else{
        closeMenu();
        startPageScrolling();
        displayGoToTopButton();
    }
}



