const OVERRIDE_KEY = "theme-override";
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

function systemTheme() {
  return systemDark.matches ? "dark" : "light";
}

function getOverride() {
  try {
    const value = localStorage.getItem(OVERRIDE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function setOverride(theme) {
  try {
    if (theme === systemTheme()) {
      localStorage.removeItem(OVERRIDE_KEY);
    } else {
      localStorage.setItem(OVERRIDE_KEY, theme);
    }
  } catch {
    // storage unavailable: theme still applies for this page
  }
}

function resolveTheme() {
  return getOverride() ?? systemTheme();
}

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function changeTheme() {
  const next = document.documentElement.classList.contains("dark")
    ? "light"
    : "dark";

  // Suppress transitions so the whole page swaps colors at once
  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode("* { transition: none !important; }"),
  );
  document.head.appendChild(css);

  applyTheme(next);

  window.getComputedStyle(css).opacity;
  document.head.removeChild(css);

  setOverride(next);
}

function initializeThemeButtons() {
  const headerThemeButton = document.getElementById("header-theme-button");
  const drawerThemeButton = document.getElementById("drawer-theme-button");
  headerThemeButton?.addEventListener("click", changeTheme);
  drawerThemeButton?.addEventListener("click", changeTheme);
}

// Drop the legacy key, which froze the OS theme on first visit
try {
  localStorage.removeItem("theme");
} catch {
  // ignore
}

applyTheme(resolveTheme());

systemDark.addEventListener("change", () => {
  if (!getOverride()) applyTheme(systemTheme());
});

document.addEventListener("DOMContentLoaded", initializeThemeButtons);
