const splash = document.getElementById('splash');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (splash.style.display === 'none') {
            console.log('Splash screen has been hidden.');
        } else {
            splash.style.display = "none";
            console.log('Splash screen has been hidden.');
        }
    }, 3000);
})

// SCROLL ENABLING
const pageScroll = document.getElementById('scrollLoad');

pageScroll.style.overflow = 'hidden';

setTimeout(() => {
    pageScroll = pageScroll.style.overflow = 'auto';
}, 3000);