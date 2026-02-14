// Smooth scroll for Contact button
const contactBtn = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");

contactBtn.addEventListener("click", () => {
  contactSection.scrollIntoView({
    behavior: "smooth"
  });
});

// Resume button placeholder
document.getElementById("downloadResume").addEventListener("click", () => {
  alert("Resume download will be added soon 📄");
});
