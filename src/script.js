// carousel.js

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("DOMContentLoaded", function () {
    const toggleSidebarButton = document.getElementById("toggleSidebar");
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector(".main");
    toggleSidebarButton.addEventListener("click", function () {
      if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
      } else {
        sidebar.style.display = "block";
      }
    });
  });


  $(".autoplay").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,

          // dots: true
        },
      },
      {
        breakpoint: 822,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Lock Screen
  const displayLockScreen = document.querySelectorAll(".book");
  const closeLockScreen = document.getElementById("login");
  const overlay = document.getElementById("lock");

  displayLockScreen.forEach(function (button) {
    button.addEventListener("click", function () {
      overlay.style.display = "flex";
    });
  });

  // Passcode Input Logic
  const inputs = document.querySelectorAll(".pass-input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      const value = event.target.value.trim();

      // If a digit is entered, move to the next input
      if (/^\d$/.test(value) && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }

      // Update the input value to only keep the first digit
      input.value = /^\d$/.test(value) ? value : "";
    });
  });

  // Form validation
  document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents form submission

    // const email = document.getElementById("emailInput").value.trim();
    // const password = document.getElementById("passwordInput").value.trim();
    // const passcodeInputs = document.querySelectorAll(".pass-input");

    // // Reset error messages
    // document.getElementById("emailError").textContent = "";
    // document.getElementById("passwordError").textContent = "";

    // let isValid = true;


    // if (!email) {
    //   document.getElementById("emailError").textContent = "Email is required.";
    //   isValid = false;
    // } else if (!isValidEmail(email)) {
    //   document.getElementById("emailError").textContent =
    //     "Please enter a valid email address.";
    //   isValid = false;
    // }

    // if (!password) {
    //   document.getElementById("passwordError").textContent =
    //     "Password is required.";
    //   isValid = false;
    // }

    // if (Array.from(passcodeInputs).some((input) => !input.value.trim())) {
    //   alert("Please fill in all fields.");
    //   isValid = false;
    // }

    // if (!isValid) {
    //   return;
    // }


    const overlay = document.getElementById("lock");
    overlay.style.display = "none";
    window.location.href = "hero.html";
  });

  function isValidEmail(email) {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }



  const toggleElements = document.querySelectorAll(".toggle-bg");

  toggleElements.forEach(function (element) {
    element.addEventListener("click", function () {
      element.classList.toggle("active");
    });
  });
});
