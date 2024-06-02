// const button = document.querySelector(".button");
// const aboutmeButton = document.querySelector(".aboutme-button");
// const aboutmeSection = document.querySelector(".aboutme-section");
// const skillsButton = document.querySelector(".skills-button");
// const skillsSection = document.querySelector(".skills-section");

// const toggleSection = (button, section) => {
//   button.classList.toggle("active");
//   button.classList.toggle("disabled");

//   if (section.classList.contains("disabled")) {
//     section.classList.remove("disabled");
//     section.classList.add("active");
//   } else if (section.classList.contains("active")) {
//     section.classList.remove("active");
//     section.classList.add("inactive");
//     setTimeout(() => {
//       section.classList.remove("inactive");
//       section.classList.add("disabled");
//     }, 1400);
//   }
// };

// aboutmeButton.addEventListener("click", () =>
//   toggleSection(aboutmeButton, aboutmeSection)
// );
// skillsButton.addEventListener("click", () =>
//   toggleSection(skillsButton, skillsSection)
// );

const aboutmeButton = document.querySelector(".aboutme-button");
const aboutmeSection = document.querySelector(".aboutme-section");
const skillsButton = document.querySelector(".skills-button");
const skillsSection = document.querySelector(".skills-section");

const toggleSection = (button, section) => {
  const isActive = button.classList.contains("active");

  // Проверяем, если текущая секция и кнопка активны, выходим из функции
  if (isActive && section.classList.contains("active")) {
    return;
  }

  // Отключаем активную секцию и кнопку
  const activeButton = document.querySelector(".button.active");
  const activeSection = document.querySelector(
    ".aboutme-section.active, .skills-section.active"
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

  // Включаем текущую секцию и кнопку
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
