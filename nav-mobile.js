"use strict";

(function initMobileNav() {
  const navs = document.querySelectorAll(".nav");
  if (!navs.length) return;

  navs.forEach((nav, index) => {
    if (nav.dataset.mobileInit === "true") return;

    const navInner = nav.querySelector(".nav__inner");
    const navLinks = nav.querySelector(".nav__links");
    if (!navInner || !navLinks) return;

    const browseLink = navLinks.querySelector(".nav__browse");
    const stayLink = navLinks.querySelector('a[href="/stay-guide.html"]');
    if (!browseLink || !stayLink) return;

    const mobileRow = document.createElement("div");
    mobileRow.className = "nav__mobile-row";

    const browseClone = browseLink.cloneNode(true);
    const stayClone = stayLink.cloneNode(true);
    stayClone.classList.add("nav__mobile-stay");

    const menuButton = document.createElement("button");
    const panelId = `mobile-nav-panel-${index + 1}`;
    menuButton.type = "button";
    menuButton.className = "nav__menu-btn";
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-controls", panelId);
    menuButton.textContent = "Menu";

    mobileRow.append(browseClone, stayClone, menuButton);

    const mobilePanel = document.createElement("div");
    mobilePanel.className = "nav__mobile-panel";
    mobilePanel.id = panelId;
    mobilePanel.setAttribute("hidden", "hidden");

    const fragment = document.createDocumentFragment();

    const addMobileLink = (sourceLink) => {
      if (!sourceLink) return;
      const link = sourceLink.cloneNode(true);
      link.classList.remove("nav__browse", "nav__cta");
      link.classList.add("nav__mobile-link");
      fragment.append(link);
    };

    [...navLinks.children].forEach((item) => {
      const directLink = item.querySelector(":scope > a");
      if (!directLink) return;

      if (directLink.classList.contains("nav__browse")) return;
      if (directLink.getAttribute("href") === "/stay-guide.html") return;

      if (item.classList.contains("nav__drop")) {
        const dropdownLinks = item.querySelectorAll(".nav__dropdown a");
        dropdownLinks.forEach(addMobileLink);
        return;
      }

      addMobileLink(directLink);
    });

    const ctaClone = navLinks.querySelector(".nav__cta");
    if (ctaClone) {
      const divider = document.createElement("hr");
      divider.className = "nav__mobile-divider";
      fragment.append(divider);
      addMobileLink(ctaClone);
    }

    mobilePanel.append(fragment);

    const closeMenu = () => {
      nav.classList.remove("nav--menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      mobilePanel.setAttribute("hidden", "hidden");
    };

    const openMenu = () => {
      nav.classList.add("nav--menu-open");
      menuButton.setAttribute("aria-expanded", "true");
      mobilePanel.removeAttribute("hidden");
    };

    menuButton.addEventListener("click", () => {
      if (nav.classList.contains("nav--menu-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobilePanel.addEventListener("click", (event) => {
      if (event.target instanceof HTMLElement && event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    });

    const insertBeforeNode = navLinks.nextSibling;
    navInner.insertBefore(mobileRow, navLinks);
    navInner.insertBefore(mobilePanel, insertBeforeNode);
    nav.dataset.mobileInit = "true";
  });
})();
