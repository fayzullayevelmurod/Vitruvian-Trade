window.addEventListener("DOMContentLoaded", () => {
  const colorModeBtn = document.querySelector(".color_mode-btn");
  const imgElement = document.querySelector(".color_mode-btn img");

  const imageSources = ["images/icons/sun.svg", "images/icons/moon.png"];

  let currentImageIndex = 0;

  const loadDarkMode = () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      enableDarkMode();
      colorModeBtn.classList.add("active");
      imgElement.src = nextImageSource();
    }
  };

  const saveDarkMode = () => {
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  };

  const enableDarkMode = () => {
    document.body.classList.add("dark");
    saveDarkMode();
  };

  loadDarkMode();

  colorModeBtn.addEventListener("click", () => {
    colorModeBtn.classList.toggle("active");
    imgElement.src = nextImageSource();
    document.body.classList.toggle("dark");
    saveDarkMode();
  });

  function nextImageSource() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    return imageSources[currentImageIndex];
  }

  // select language
  document.querySelectorAll(".option__value").forEach((option) => {
    option.addEventListener("click", () => {
      const selectedBox = document.querySelector(".eng");
      const optionChildEng = document.querySelector(".option__value .eng");
      selectedBox.innerHTML = option.innerHTML;
      optionChildEng.style.display = "none";
    });
  });
});
