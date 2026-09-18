/*NAVIGATION*/

const menuButton =
    document.querySelector(".menu-button");

const mainNavigation =
    document.querySelector(".main-navigation");


/*MOBILE MENU*/

menuButton.addEventListener("click", () => {

    const isOpen =
        mainNavigation.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/*CLOSE MOBILE MENU WHEN LINK IS CLICKED*/

const navigationLinks =
    document.querySelectorAll(
        ".main-navigation a"
    );


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mainNavigation.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/*KEYBOARD ACCESSIBILITY*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        mainNavigation.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});