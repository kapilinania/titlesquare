/**
 * Title Square - Interactive Team Member Spotlight & Filters
 */

document.addEventListener('DOMContentLoaded', () => {
  initTeamFilter();
});

function initTeamFilter() {
  const filterButtons = document.querySelectorAll('.team-filter-btn');
  const teamCards = document.querySelectorAll('.team-card');

  if (!filterButtons.length || !teamCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      teamCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeInCard 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Global function to book consultation with specific expert
window.consultExpert = function(expertName, role) {
  const modal = document.getElementById('reportModal');
  if (modal) {
    const modalTitle = modal.querySelector('.modal-top-banner h4');
    if (modalTitle) {
      modalTitle.textContent = `Consult with ${expertName}`;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};
