// ===== 연도 자동 업데이트 =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== 테마 전환 (다크/라이트) =====
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// 저장된 테마 또는 시스템 설정 불러오기
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("theme", next);
});

function applyTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  }
}

// ===== 네비게이션: 스크롤 시 테두리, 모바일 메뉴 =====
const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburger.classList.toggle("active");
});

// 메뉴 항목 클릭 시 모바일 메뉴 닫기
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburger.classList.remove("active");
  });
});

// ===== 스크롤 등장 애니메이션 =====
const revealTargets = document.querySelectorAll(
  ".section__title, .about, .skill-card, .timeline__item, .project-card, .contact__socials, .section__lead"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));

// ===== 이미지 라이트박스 (썸네일 클릭 시 확대) =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
if (lightbox && lightboxImg) {
  document.querySelectorAll("[data-lightbox]").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });
  });
  lightbox.addEventListener("click", () => lightbox.classList.remove("open"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lightbox.classList.remove("open");
  });
}
