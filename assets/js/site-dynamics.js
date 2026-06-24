(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function updateProgress() {
    var progress = document.querySelector(".scroll-progress");
    if (!progress) return;

    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = "scaleX(" + Math.min(Math.max(ratio, 0), 1) + ")";
  }

  function setupReveals() {
    var selectors = [
      ".profile-hero",
      ".profile-snapshot article",
      ".focus-card",
      ".archive__item",
      ".page__content > h2"
    ];
    var items = Array.prototype.slice.call(document.querySelectorAll(selectors.join(",")));
    items.forEach(function (item) {
      item.setAttribute("data-reveal", "");
    });

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function setupRotator() {
    var rotator = document.querySelector("[data-role-rotator]");
    if (!rotator || prefersReducedMotion) return;

    var phrases = (rotator.getAttribute("data-phrases") || "")
      .split("|")
      .map(function (phrase) { return phrase.trim(); })
      .filter(Boolean);

    if (phrases.length < 2) return;

    var index = 0;
    window.setInterval(function () {
      rotator.classList.add("is-changing");
      window.setTimeout(function () {
        index = (index + 1) % phrases.length;
        rotator.textContent = phrases[index];
        rotator.classList.remove("is-changing");
      }, 210);
    }, 2600);
  }

  document.addEventListener("DOMContentLoaded", function () {
    updateProgress();
    setupReveals();
    setupRotator();
  });

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
})();
