const imageContainer = document.getElementById("image-container");

// Function to detect preferred color scheme
function detectColorScheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Function to set the appropriate image based on color scheme
function setImageBasedOnColorScheme() {
  const colorScheme = detectColorScheme();
  const imagePath =
    colorScheme === "dark"
      ? "images/roam-icon-dark.png"
      : "images/roam-icon.png";
  imageContainer.style.backgroundImage = `url('${imagePath}')`;
}

// Set the initial image based on color scheme
setImageBasedOnColorScheme();

// Listen for changes in the color scheme and update the image accordingly
window.matchMedia("(prefers-color-scheme: dark)").addListener(() => {
  setImageBasedOnColorScheme();
});
