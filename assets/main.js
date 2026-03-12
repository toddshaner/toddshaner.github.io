(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const cfg = window.siteConfig || {};
  const email = cfg.email || '#';
  const linkedin = cfg.linkedin || '#';
  const github = cfg.github || '#';

  document.querySelectorAll('.email-link').forEach((el) => {
    if (email && !email.includes('replace-with-your-email')) {
      el.setAttribute('href', email.startsWith('mailto:') ? email : 'mailto:' + email);
    } else {
      el.setAttribute('href', '#');
      el.classList.add('status-placeholder');
      el.textContent = 'Add email link';
    }
  });

  document.querySelectorAll('.linkedin-link').forEach((el) => {
    if (linkedin && !linkedin.includes('replace-me')) {
      el.setAttribute('href', linkedin);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    } else {
      el.setAttribute('href', '#');
      el.classList.add('status-placeholder');
      el.textContent = 'Add LinkedIn URL';
    }
  });

  document.querySelectorAll('.github-link').forEach((el) => {
    if (github && !github.includes('replace-me')) {
      el.setAttribute('href', github);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    } else {
      el.setAttribute('href', '#');
      el.classList.add('status-placeholder');
      if (!el.textContent.trim()) el.textContent = 'Add GitHub URL';
    }
  });

  const repoMap = {
    documentAssistant: cfg.repos && cfg.repos.documentAssistant,
    brokerWorkflowCopilot: cfg.repos && cfg.repos.brokerWorkflowCopilot,
    governanceFramework: cfg.repos && cfg.repos.governanceFramework
  };

  Object.keys(repoMap).forEach((key) => {
    document.querySelectorAll(`[data-repo="${key}"]`).forEach((el) => {
      const url = repoMap[key];
      if (url && !url.includes('replace-me')) {
        el.setAttribute('href', url);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener');
      } else {
        el.setAttribute('href', '#');
        el.classList.add('status-placeholder');
        el.textContent = 'GitHub repo link pending';
      }
    });
  });

  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }
})();
