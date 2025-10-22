
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMobile = document.querySelector('.nav-mobile');
    const mobileOverlay = document.createElement('div');
    mobileOverlay.className = 'mobile-overlay';
    document.body.appendChild(mobileOverlay);

    mobileMenuBtn.addEventListener('click', function() {
        const isActive = navMobile.classList.contains('active');
        
        if (isActive) {
            // Close menu
            navMobile.classList.remove('active');
            mobileOverlay.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            // Open menu - PREVENT BODY SCROLL
            navMobile.classList.add('active');
            mobileOverlay.classList.add('active');
            mobileMenuBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });

    // Close menu when clicking overlay
    mobileOverlay.addEventListener('click', function() {
        navMobile.classList.remove('active');
        mobileOverlay.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.mobile-nav_list a').forEach(link => {
        link.addEventListener('click', () => {
            navMobile.classList.remove('active');
            mobileOverlay.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Contact popup functionality
    const contactBtn = document.getElementById('contactBtn');
    const mobileContactBtn = document.getElementById('mobileContactBtn');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    [contactBtn, mobileContactBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                popup.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        }
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        document.body.style.overflow = '';
    });

    // Close popup when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu on popup open
    [contactBtn, mobileContactBtn].forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                navMobile.classList.remove('active');
                mobileOverlay.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        }
    });
});


// ============Dawnload CV================
document.getElementById('downloadBtn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'files/resume.pdf';  // make sure this path is correct
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


function toggleMenu() {
    const navList = document.getElementById('navList');
    navList.classList.toggle('active');
}