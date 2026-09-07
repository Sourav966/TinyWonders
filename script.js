/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle("show");

        const icon =
            menuToggle.querySelector("i");


        if (navMenu.classList.contains("show")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    }
);


/* =========================================
   SEARCH
========================================= */

const searchButton =
    document.getElementById("searchButton");

const searchInput =
    document.getElementById("searchInput");


searchButton.addEventListener(
    "click",
    function () {

        const searchText =
            searchInput.value.trim();


        if (searchText === "") {

            searchInput.focus();

            return;

        }


        alert(
            "Book search will be available after launch.\n\nSearching for: "
            + searchText
        );

    }
);


/* =========================================
   SEARCH WITH ENTER
========================================= */

searchInput.addEventListener(
    "keypress",
    function (event) {

        if (event.key === "Enter") {

            searchButton.click();

        }

    }
);


/* =========================================
   EMAIL NOTIFICATION
========================================= */

const form =
    document.getElementById("notifyForm");

const emailInput =
    document.getElementById("email");

const message =
    document.getElementById("message");


form.addEventListener(
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

            return;

        }


        message.textContent =
            "✓ You're on the list! We'll notify you when we launch.";

        emailInput.value = "";

    }
);
