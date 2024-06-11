function addScrollEvent(buttonClass, targetId) {
  document.querySelector(buttonClass).addEventListener("click", function () {
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
}

addScrollEvent(".aboutme-button", "name");
addScrollEvent(".skills-button", "name");
addScrollEvent(".portfolio-button", "name");
addScrollEvent(".contacts-button", "name");
