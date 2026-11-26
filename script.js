/* Replace only the values below when your real social URLs are ready. */
const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/copex_community?fqnt=YTAwemVuc2FoNGYz',
  x: '#x-link',
  whatsapp: 'https://chat.whatsapp.com/LcPp2HwBW8YGtOJTky8rir',
  linkedin: 'https://www.linkedin.com/company/copex-community/',
};

document.querySelectorAll('[data-social]').forEach((link) => {
  const destination = SOCIAL_LINKS[link.dataset.social];
  if (!destination) return;
  link.href = destination;
  if (destination.startsWith('https://')) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }
});
