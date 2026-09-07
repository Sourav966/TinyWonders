```javascript
/* =========================================
   BOOKNEST — MAINTENANCE PAGE
========================================= */


/* =========================================
   COUNTDOWN TIMER
========================================= */

// Set your launch date here
const launchDate = new Date("December 31, 2026 23:59:59").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = launchDate - now;


    // If countdown is finished
    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    // Calculate time
    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    // Display
    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Update immediately
updateCountdown();


// Update every second
setInterval(updateCountdown, 1000);


/* =========================================
   EMAIL NOTIFICATION
========================================= */

const form = document.getElementById("notifyForm");

const emailInput = document.getElementById("email");

const message = document.getElementById("message");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const email = emailInput.value.trim();


    if (email === "") {

        message.textContent =
            "Please enter your email address.";

        return;
    }


    // Simple email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        message.textContent =
            "Please enter a valid email address.";

        return;
    }


    // Success message
    message.textContent =
        "✓ You're on the list! We'll notify you when we launch.";

    emailInput.value = "";

});


/* =========================================
   PAGE LOAD ANIMATION
========================================= */

window.addEventListener("load", function() {

    document.querySelector(".maintenance").style.opacity = "1";

});
```

