document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    const theme = document.body.classList.toggle('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  });
});
