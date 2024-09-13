// Lagre et sett med variable
const names = ["a", "b", "c"];

const counts = {
  a: 0,
  b: 0,
  c: 0,
};

// Vi må finne elementene vi er interresert i
let resultLink = document.getElementById("result-link");

/**
 * @param {keyof counts} choice
 */
function handleButtonClick(choice) {
  // Først oppdater den global variabelen
  counts[choice]++;
  // Generer lenke på nytt
  resultLink.href = `result.html?a=${counts.a}&b=${counts.b}&c=${counts.c}`;
  // Slå av blurred klassen
  resultLink.classList.remove("blurred");
  resultLink.classList.add("hover:glowing-md");
}

names
  .map((name) => document.getElementById(name))
  // For each button construct and add an event listner
  .forEach((button) =>
    button.addEventListener("click", () => handleButtonClick(button.id))
  );
