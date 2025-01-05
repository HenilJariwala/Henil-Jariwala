function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  // Section 1 (Title and Subtitle)
  var app = document.querySelector(".title");
  var app1 = document.querySelector(".section__text_p1");
  var text = app.textContent;
  var text1 = app1.textContent;

  var typewriter1 = new Typewriter(app, {
    loop: true,
    delay: 75,
  });

  typewriter1
    .typeString(text1)
    .pauseFor(500)
    .deleteAll()
    .typeString(text)
    .pauseFor(4000)
    .start();
});

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // CHANGED: Renamed function and updated its behavior
  function animateItems() {
    timelineItems.forEach((item) => {
      if (isElementInViewport(item)) {
        item.classList.add("visible");
      } else {
        // NEW: Remove 'visible' class if item is not in viewport
        item.classList.remove("visible");
      }
    });
  }

  // CHANGED: Call animateItems instead of showVisibleItems
  animateItems();

  // NEW: Throttle function to limit the rate at which animateItems is called
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // CHANGED: Use throttle function when adding scroll event listener
  window.addEventListener("scroll", throttle(animateItems, 100));
});
