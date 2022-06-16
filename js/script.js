// Back to Top
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

// Stop form resubmission on Page Refresh Email
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}