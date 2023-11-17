export const darkmodeToggle = (buttonId: string) => {
  console.log(buttonId);
  const themeToggle = document.getElementById(buttonId);

  const getTheme = () => localStorage.getItem("theme") || "light";

  const setTheme = (theme: string) => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  window.addEventListener("DOMContentLoaded", () => setTheme(getTheme()));
  document.addEventListener("astro:after-swap", () => setTheme(getTheme()));

  themeToggle?.addEventListener("click", () => {
    const nextTheme = getTheme() === "light" ? "dark" : "light";
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  });
};
