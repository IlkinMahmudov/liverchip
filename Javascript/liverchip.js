
  function switchLanguage(lang) {
    // Dili dəyişdir
    document.querySelectorAll('.translatable').forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Aktiv düyməni dəyiş
    document.getElementById('btn-az').classList.remove('active');
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById(`btn-${lang}`).classList.add('active');
    
    // LocalStorage ilə seçilən dilin yaddaşda saxlanması
    localStorage.setItem('language', lang);
  }

  // Səhifə yüklənəndə localStorage-dan dil alınır
  window.onload = () => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    switchLanguage(savedLanguage);
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });


  // Responsive menyu aç/qapat
  const menuToggle = document.getElementById('menu-toggle');
  const slantedSidebar = document.getElementById('slanted-sidebar');
  const closeIcon = document.getElementById('close-icon');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  
  menuToggle.addEventListener('click', () => {
    slantedSidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
  });
  
  closeIcon.addEventListener('click', () => {
    slantedSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  });
  
  sidebarOverlay.addEventListener('click', () => {
    slantedSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  });
  