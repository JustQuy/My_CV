// script.js — tương tác nhỏ: menu mobile, smooth scroll, theme toggle, năm hiện tại
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const themeToggle = document.getElementById('theme-toggle');
  const yearSpan = document.getElementById('year');

  // Hiện năm hiện tại
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Mobile menu toggle
  menuToggle && menuToggle.addEventListener('click', () => {
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
    }
  });

  // Smooth scroll cho anchor
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
        // đóng menu mobile nếu mở
        if (window.innerWidth <= 800) nav.style.display = '';
      }
    });
  });

  // Theme toggle (dark / light) - lưu trong localStorage
  const THEME_KEY = 'cv_theme';
  const applyTheme = (dark) => {
    if (dark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  };
  // khôi phục
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved === 'dark');

  themeToggle && themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  });
});
