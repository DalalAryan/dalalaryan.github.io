(function () {
  var toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;

  var icon = toggle.querySelector("i");
  var label = toggle.querySelector("span");

  function updateToggle(theme) {
    var isDark = theme === "dark";
    icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
    label.textContent = isDark ? "Light mode" : "Dark mode";
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  toggle.addEventListener("click", function () {
    var nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {
      // The theme still changes when browser storage is unavailable.
    }
    updateToggle(nextTheme);
  });

  updateToggle(document.documentElement.dataset.theme || "dark");
}());
