document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Welcome to MusicApp! Let\'s get started!');
    });
});

function toggleSidePanel() {
    const sidePanel = document.getElementById('side-panel');
    if (sidePanel.style.transform === 'translateX(0px)') {
        sidePanel.style.transform = 'translateX(-100%)';
    } else {
        sidePanel.style.transform = 'translateX(0px)';
    }
}
