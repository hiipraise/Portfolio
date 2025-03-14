function toggleMenu() {
  const dropdown = document.getElementById("dropdown");
  const menuIcon = document.getElementById("menu-icon");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    menuIcon.classList.remove("fa-times"); // Change to fa-bars
    menuIcon.classList.add("fa-bars");
  } else {
    dropdown.style.display = "block";
    menuIcon.classList.remove("fa-bars"); // Change to fa-times
    menuIcon.classList.add("fa-times");
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  const dropdown = document.getElementById("dropdown");
  const menuIcon = document.getElementById("menu-icon");
  if (!event.target.matches(".fa-bars") && !event.target.matches(".fa-times")) {
    // const dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
      menuIcon.classList.remove("fa-times"); // Change to fa-bars
      menuIcon.classList.add("fa-bars");
    }
  }
};

// Review Scroll
const outerWrapper = document.getElementById("reviewBox");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");
const divs = document.querySelectorAll(".each-review");

let currentDiv = 0; // Tracks the active review div

function updateScroll() {
  if (window.innerWidth <= 450) {
    // Mobile: Show one review div at a time
    divs.forEach((div, index) => {
      div.style.display = index === currentDiv ? "flex" : "none";
    });
  } else {
    // Desktop: Scroll smoothly between sections
    const offset = outerWrapper.clientWidth * currentDiv;
    outerWrapper.style.scrollBehavior = "smooth";
    outerWrapper.scrollLeft = offset;
  }

  // Disable buttons if at the start or end
  arrowLeft.classList.toggle("disabled", currentDiv === 0);
  arrowRight.classList.toggle("disabled", currentDiv === divs.length - 1);
}

function scrollDivLeft() {
  if (currentDiv > 0) {
    currentDiv--;
    updateScroll();
  }
}

function scrollRight() {
  if (currentDiv < divs.length - 1) {
    currentDiv++;
    updateScroll();
  }
}

// Attach event listeners
arrowLeft.addEventListener("click", scrollDivLeft);
arrowRight.addEventListener("click", scrollRight);
window.addEventListener("resize", updateScroll);

// Initial setup
updateScroll();


const accordionHeaders = document.querySelectorAll(".accordion-header-1");
const accordionHeaders2 = document.querySelectorAll(".accordion-header-2");
const accordionHeaders3 = document.querySelectorAll(".accordion-header-3");
const accordionHeaders4 = document.querySelectorAll(".accordion-header-4");
const chevron = document.getElementById("fa-chevron-down-1");
const chevron2 = document.getElementById("fa-chevron-down-2");
const chevron3 = document.getElementById("fa-chevron-down-3");
const chevron4 = document.getElementById("fa-chevron-down-4");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("active");
    chevron.classList.toggle("rotate");
  });
});
accordionHeaders2.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("active");
    chevron2.classList.toggle("rotate");
  });
});
accordionHeaders3.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("active");
    chevron3.classList.toggle("rotate");
  });
});
accordionHeaders4.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("active");
    chevron4.classList.toggle("rotate");
  });
});



// Get the button
let backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document smoothly
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This enables smooth scrolling
    });
};


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});