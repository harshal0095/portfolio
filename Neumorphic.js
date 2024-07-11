document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.add(savedTheme);
      themeToggle.checked = savedTheme === 'dark';
    } else {
      body.classList.add('light');
    }
  
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    });
  
    document.querySelectorAll('.sidebar-item').forEach(item => {
      item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-item').forEach(el => el.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
  