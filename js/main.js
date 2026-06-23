/* ============================================================
   사이트 동작 (다크 모드, 연도 자동 표시)
   - 대부분의 경우 이 파일은 건드릴 필요가 없습니다.
   ============================================================ */

// 1) 푸터의 연도를 자동으로 올해로 표시
document.getElementById("year").textContent = new Date().getFullYear();

// 2) 다크 모드 토글 (선택한 모드를 브라우저에 기억)
const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// 저장된 설정 불러오기
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  root.setAttribute("data-theme", "dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});
