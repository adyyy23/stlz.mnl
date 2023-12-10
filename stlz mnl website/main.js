/*===== SCROLL SECTIONS ACTIVE LINK =====*/
// Get all sections with an 'id' attribute
const sections = document.querySelectorAll(`section[id]`);

// Add a scroll event listener to the window
window.addEventListener("scroll", scrollActive);

// Function to handle the scroll and highlight active links
function scrollActive() {
  const scrollV = window.pageYOffset;

  // Iterate through each section
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    // Check if the scroll position is within the current section
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");

      // Add 'remove' class to the corresponding navigation link (comment: unclear why this is needed)
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("remove");
    } else {
      // Remove 'active' class from the corresponding navigation link if not in the section
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}