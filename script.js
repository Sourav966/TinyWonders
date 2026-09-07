/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    const icon = menuToggle.querySelector("i");

    if (isOpen) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", function (event) {

    const clickedInsideMenu =
        navMenu.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {

        navMenu.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================================
   SEARCH
========================================= */

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");


function searchBooks() {

    const searchText =
        searchInput.value.trim();

    if (searchText === "") {

        searchInput.focus();

        return;

    }

    alert(
        "BookNest is currently under maintenance.\n\n" +
        "Your search: " +
        searchText
    );

}


searchButton.addEventListener(
    "click",
    searchBooks
);


searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchBooks();

        }

    }
);


/* =========================================
   EMAIL NOTIFICATION
========================================= */

const notifyForm =
    document.getElementById("notifyForm");

const emailInput =
    document.getElementById("emailInput");

const message =
    document.getElementById("message");


notifyForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const email =
            emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            message.textContent =
                "Please enter a valid email address.";

            message.style.color =
                "#dc2626";

            return;

        }


        message.textContent =
            "✓ You're on the list! We'll notify you when we launch.";

        message.style.color =
            "#16a34a";

        emailInput.value = "";

    }
);


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "main, section[id]"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "home";

        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop;

                if (
                    window.scrollY >=
                    sectionTop - 180
                ) {

                    currentSection =
                        section.id || "home";

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove("active");

                const linkTarget =
                    link.getAttribute("href");

                if (
                    linkTarget ===
                    "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }
);
