document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("#theme-navbar-toggler");
  const popover = document.getElementById("navmenu-header-mobile");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
  });

  popover.addEventListener("toggle", (event) => {
    if (event.newState === "closed") {
      burger.classList.remove("open");
    } 
  });
});

document.addEventListener("mouseover", function(a) {
  const o = a.target.closest(".nav-menu-item");
  if (o) {
      const c = o.querySelector(".hover-bg");
      if (c) {
          const v = o.getBoundingClientRect()
            , h = a.clientX - v.left
            , s = a.clientY - v.top;
          c.style.setProperty("--creative-hover-top", `${s}px`),
          c.style.setProperty("--creative-hover-left", `${h}px`)
      }
  }
});