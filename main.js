// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Modal Pop-up Functionality
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const closeButton = document.querySelector('.close-button');

// Function to open modal with specific content
function openModal(title, description, imageSrc) {
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'flex';
}

// Close modal when close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Scroll to top when logo is clicked
const logoLink = document.querySelector('.logo');
logoLink.addEventListener('click', (e) => {
    // Delay to ensure smooth scrolling
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 100);
});

// Ensure page scrolls to top on refresh
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// Initial Modal on Page Load
window.addEventListener('load', () => {
    // Set initial modal content
    const initialTitle = "Pendaftaran Santri";
    const initialDescription = "Proses pendaftaran santri baru di Pondok Pesantren Al-Anwar Pakijangan telah dibuka. Segera daftarkan diri Anda untuk bergabung dan mendapatkan pendidikan yang berkualitas.";
    const initialImage = "foto_informasi/brosur.png";
    openModal(initialTitle, initialDescription, initialImage);
});

// Add click event listeners to news cards
const newsCards = document.querySelectorAll('.news-card');

newsCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        const imageSrc = card.getAttribute('data-image');
        openModal(title, description, imageSrc);
    });
});
