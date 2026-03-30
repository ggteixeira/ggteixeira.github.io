let lastScrollY = window.scrollY;

function onScroll() {
  const header = document.getElementById("header");
  if (!header) return;

  const currentScrollY = window.scrollY;

  // existing: frosted glass effect when not at top
  if (currentScrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // auto-hide: show when near top or scrolling up, hide when scrolling down
  if (currentScrollY < 50) {
    header.classList.remove("header-hidden");
    document.documentElement.style.setProperty("--scroll-margin-top", "6rem");
  } else if (currentScrollY > lastScrollY) {
    header.classList.add("header-hidden");
    document.documentElement.style.setProperty("--scroll-margin-top", "1.5rem");
  } else {
    header.classList.remove("header-hidden");
    document.documentElement.style.setProperty("--scroll-margin-top", "6rem");
  }

  lastScrollY = currentScrollY;
}

document.addEventListener("scroll", onScroll);
