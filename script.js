// Video filter
const filterButtons = document.querySelectorAll(".filter");
const videoCards = document.querySelectorAll(".video-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    button.classList.add("is-active");
    videoCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !show);
    });
  });
});

// Pause other videos when one plays
const videos = document.querySelectorAll("video");
videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((v) => { if (v !== video) v.pause(); });
  });
});

// Scrollspy: highlight current section in the header nav
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".site-header nav a");
const linkBySection = new Map();
navLinks.forEach((a) => {
  const id = a.getAttribute("href")?.replace("#", "");
  if (id) linkBySection.set(id, a);
});

if ("IntersectionObserver" in window && sections.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkBySection.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove("is-current"));
          link.classList.add("is-current");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((s) => io.observe(s));
}
