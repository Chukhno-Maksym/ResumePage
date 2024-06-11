const aboutmeButton = document.querySelector(".aboutme-button");
const aboutmeSection = document.querySelector(".aboutme-section");

const skillsButton = document.querySelector(".skills-button");
const skillsSection = document.querySelector(".skills-section");

const portfolioButton = document.querySelector(".portfolio-button");
const portfolioSection = document.querySelector(".portfolio-section");

const contactsButton = document.querySelector(".contacts-button");
const contactsSection = document.querySelector(".contacts-section");

const toggleSection = (button, section) => {
  const isActive = button.classList.contains("active");

  if (isActive && section.classList.contains("active")) {
    return;
  }

  const activeButton = document.querySelector(".button.active");
  const activeSection = document.querySelector(
    ".aboutme-section.active, .skills-section.active, .portfolio-section.active, .contacts-section.active"
  );
  if (activeButton && activeSection) {
    activeButton.classList.remove("active");
    activeButton.classList.add("disabled");
    activeSection.classList.remove("active");
    activeSection.classList.add("inactive");
    setTimeout(() => {
      activeSection.classList.remove("inactive");
      activeSection.classList.add("disabled");
    }, 1400);
  }

  button.classList.toggle("active");
  button.classList.toggle("disabled");

  if (section.classList.contains("disabled")) {
    section.classList.remove("disabled");
    section.classList.add("active");
  } else if (section.classList.contains("active")) {
    section.classList.remove("active");
    section.classList.add("inactive");
    setTimeout(() => {
      section.classList.remove("inactive");
      section.classList.add("disabled");
    }, 1400);
  }
};

aboutmeButton.addEventListener("click", () =>
  toggleSection(aboutmeButton, aboutmeSection)
);
skillsButton.addEventListener("click", () =>
  toggleSection(skillsButton, skillsSection)
);
portfolioButton.addEventListener("click", () =>
  toggleSection(portfolioButton, portfolioSection)
);
contactsButton.addEventListener("click", () =>
  toggleSection(contactsButton, contactsSection)
);
