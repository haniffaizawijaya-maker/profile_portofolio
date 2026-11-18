// Portfolio Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // Lucide Icons Initialization
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Theme Toggle (Dark / Light Mode)
  initTheme();

  // 2. Interactive Case Study Tabs
  initCaseStudyTabs();

  // 3. Interactive Ticket Tracker Simulation (Interactive Demo for Recruiters)
  initTicketSimulator();

  // 4. Smooth Scrolling for Navigation
  initSmoothScroll();

  // 5. Dynamic Footer Year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Theme Management
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconSun = document.getElementById('theme-icon-sun');
  const themeIconMoon = document.getElementById('theme-icon-moon');

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
    if (themeIconSun) themeIconSun.classList.remove('hidden');
    if (themeIconMoon) themeIconMoon.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    if (themeIconSun) themeIconSun.classList.add('hidden');
    if (themeIconMoon) themeIconMoon.classList.remove('hidden');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      if (themeIconSun && themeIconMoon) {
        if (isDark) {
          themeIconSun.classList.remove('hidden');
          themeIconMoon.classList.add('hidden');
        } else {
          themeIconSun.classList.add('hidden');
          themeIconMoon.classList.remove('hidden');
        }
      }
    });
  }
}

// Case Study Tab Switcher
function initCaseStudyTabs() {
  const tabButtons = document.querySelectorAll('.case-study-tab-btn');
  const tabPanels = document.querySelectorAll('.case-study-panel');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update button active state
      tabButtons.forEach((b) => {
        b.classList.remove('active', 'border-red-500', 'text-red-600', 'dark:text-red-400', 'bg-red-50', 'dark:bg-red-950/40');
        b.classList.add('border-transparent', 'text-slate-500', 'dark:text-slate-400');
      });

      btn.classList.add('active', 'border-red-500', 'text-red-600', 'dark:text-red-400', 'bg-red-50', 'dark:bg-red-950/40');
      btn.classList.remove('border-transparent', 'text-slate-500', 'dark:text-slate-400');

      // Show targeted panel
      tabPanels.forEach((panel) => {
        if (panel.id === `tab-${targetTab}`) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });

      // Re-trigger lucide icons inside new view
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });
}

// Interactive Ticket Simulator (Shows how the E-Report tracking mechanism works)
function initTicketSimulator() {
  const checkBtn = document.getElementById('sim-check-btn');
  const inputEl = document.getElementById('sim-ticket-input');
  const resultCard = document.getElementById('sim-result-card');
  const badgeEl = document.getElementById('sim-status-badge');
  const titleEl = document.getElementById('sim-title');
  const categoryEl = document.getElementById('sim-category');
  const dateEl = document.getElementById('sim-date');
  const descEl = document.getElementById('sim-desc');
  const responseEl = document.getElementById('sim-response');

  const mockTickets = {
    'PM-2024-001': {
      title: 'Kerusakan Lampu Penerangan Jalan Umum (PJU)',
      category: 'Infrastruktur & Tata Kota',
      status: 'Selesai',
      badgeClass: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
      date: '14 Okt 2024',
      desc: 'Lampu jalan mati total di ruas Jalan Merdeka RT 04 RW 02 sejak 3 hari lalu, membahayakan pengendara malam.',
      response: 'Laporan telah diverifikasi oleh Dinas Perhubungan. Tim teknis telah mengganti bohlam LED dan instalasi kabel pada 16 Okt 2024. Status resmi ditutup.'
    },
    'PM-2024-002': {
      title: 'Tumpukan Sampah Liar di Bantaran Sungai',
      category: 'Kebersihan & Lingkungan Hidup',
      status: 'Sedang Diproses',
      badgeClass: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-700',
      date: '18 Okt 2024',
      desc: 'Ada pembuangan sampah liar yang mulai menyumbat aliran parit warga menuju sungai.',
      response: 'Dinas Lingkungan Hidup telah menjadwalkan armada truk pengangkut dan berkoordinasi dengan pihak kelurahan setempat untuk pembersihan bertahap.'
    },
    'PM-2024-003': {
      title: 'Permohonan Perbaikan Jalan Berlubang',
      category: 'Pekerjaan Umum',
      status: 'Menunggu Verifikasi',
      badgeClass: 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-300 dark:border-blue-700',
      date: 'Hari ini',
      desc: 'Lubang berdiameter 50cm cukup dalam di dekat persimpangan jalan masuk gang.',
      response: 'Laporan baru masuk ke sistem dan sedang ditinjau kelengkapan koordinat serta lampiran foto oleh petugas verifikator.'
    }
  };

  function searchTicket(ticketId) {
    const trimmed = (ticketId || '').trim().toUpperCase();
    const data = mockTickets[trimmed] || mockTickets['PM-2024-001'];

    if (resultCard) {
      resultCard.classList.remove('hidden');
      resultCard.classList.add('animate-fadeIn');

      if (badgeEl) {
        badgeEl.className = `px-3 py-1 rounded-full text-xs font-semibold border ${data.badgeClass}`;
        badgeEl.textContent = data.status;
      }
      if (titleEl) titleEl.textContent = data.title;
      if (categoryEl) categoryEl.textContent = data.category;
      if (dateEl) dateEl.textContent = data.date;
      if (descEl) descEl.textContent = `"${data.desc}"`;
      if (responseEl) responseEl.textContent = data.response;

      if (inputEl) inputEl.value = trimmed || 'PM-2024-001';
    }
  }

  if (checkBtn && inputEl) {
    checkBtn.addEventListener('click', () => {
      searchTicket(inputEl.value);
    });

    inputEl.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        searchTicket(inputEl.value);
      }
    });
  }

  // Quick ticket sample clickers
  const samplePills = document.querySelectorAll('.sample-ticket-btn');
  samplePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const id = pill.getAttribute('data-id');
      searchTicket(id);
    });
  });
}

// Smooth scrolling
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Copy to clipboard helper for contact
window.copyToClipboard = function(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    if (toast && toastMsg) {
      toastMsg.textContent = `${label} berhasil disalin ke clipboard!`;
      toast.classList.remove('translate-y-20', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');

      setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
      }, 2500);
    }
  });
};

// E-Report Modal Handlers
window.openEreportModal = function() {
  const modal = document.getElementById('ereport-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
};

window.closeEreportModal = function() {
  const modal = document.getElementById('ereport-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
};

// Close modal on Escape key or outside click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeEreportModal();
  }
});

document.addEventListener('click', (e) => {
  const modal = document.getElementById('ereport-modal');
  if (modal && !modal.classList.contains('hidden') && e.target === modal) {
    window.closeEreportModal();
  }
});

