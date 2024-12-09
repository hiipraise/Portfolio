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
const div1 = document.getElementById("reviewOne");
const div2 = document.getElementById("reviewTwo");

let currentDiv = 0; // Current visible div (0 = div1, 1 = div2)
// let currentDiv2 = 1; // Current visible div 2

// Update scroll display and button states
function updateScroll() {
  if (window.innerWidth <= 450) {
    // Handle small screen: Show one div at a time
    if (currentDiv === 0) {
      div1.style.display = "flex";
      div2.style.display = "none";
    } else if (currentDiv === 1) {
      div1.style.display = "none";
      div2.style.display = "flex";
    }
  } else {
    const offset = currentDiv * 100; // Each div is 100% of the container width
    outerWrapper.style.transform = `translateX(-${offset}%)`;
  }
  // Disable buttons if at boundaries
  arrowLeft.classList.toggle("disabled", currentDiv === 0);
  arrowRight.classList.toggle("disabled", currentDiv === 1);
}

// Scroll to the left div
function scrollDivLeft() {
  if (currentDiv > 0) {
    currentDiv--;
    updateScroll();
  }
}

// Scroll to the right div
function scrollRight() {
  if (currentDiv < 1) {
    currentDiv++;
    updateScroll();
  }
}

window.addEventListener("resize", updateScroll);

// Initial state setup
updateScroll();
