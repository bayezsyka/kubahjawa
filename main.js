import {
    Carousel,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Carousel });

  function loadHTML(selector, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      });
  }

  loadHTML('#visi', "home/visi.html");

// ----------------------------------------------------
// Smooth Scrolling for All Internal Links
// ----------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ----------------------------------------------------
// Smooth Scroll Specifically for "Pelajari Lebih Lanjut"
// (Opsional, karena kode di atas sudah mencakup semua tautan #)
// ----------------------------------------------------
const learnMoreButton = document.querySelector('.cta-button');
if (learnMoreButton) {
    learnMoreButton.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector('#latest-news');
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// ----------------------------------------------------
// Navbar Scroll Effect
// ----------------------------------------------------
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ----------------------------------------------------
// Modal Pop-up Functionality
// ----------------------------------------------------
const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const closeButton = document.querySelector('.close-button');

// Buka Modal dengan Konten Tertentu
function openModal(title, description, imageSrc) {
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.style.display = 'flex';
}

// Tutup Modal saat tombol "X" diklik
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Tutup Modal saat klik di area luar modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ----------------------------------------------------
// Logo Click: Scroll ke Atas Halaman
// ----------------------------------------------------
const logoLink = document.querySelector('.logo');
logoLink.addEventListener('click', () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 100);
});

// ----------------------------------------------------
// Pastikan Scroll di Posisi Atas Saat Refresh
// ----------------------------------------------------
window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

// ----------------------------------------------------
// Modal Pertama Kali Saat Halaman Dimuat
// ----------------------------------------------------
window.addEventListener('load', () => {
    const initialTitle = "Pendaftaran Santri";
    const initialDescription = "Proses pendaftaran santri baru di Pondok Pesantren Al-Anwar Pakijangan telah dibuka. Segera daftarkan diri Anda untuk bergabung dan mendapatkan pendidikan yang berkualitas.";
    const initialImage = "foto_informasi/brosur.png";
    openModal(initialTitle, initialDescription, initialImage);
});

// ----------------------------------------------------
// Klik Kartu Informasi (News Card) untuk Buka Modal
// ----------------------------------------------------
const newsCards = document.querySelectorAll('.news-card');

newsCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        const imageSrc = card.getAttribute('data-image');
        openModal(title, description, imageSrc);
    });
});

 // Saat setiap card (dengan class .group) diklik, modal akan muncul
 document.querySelectorAll('#latest-news .group').forEach(card => {
    card.addEventListener('click', function () {
      let modal = document.getElementById('modal');
      // Ambil judul dari elemen <h3> di dalam card
      let title = this.querySelector('h3').innerHTML;
      modal.querySelector('.modal-title').innerHTML = title;
      // Ambil deskripsi dari elemen <p> di dalam card
      let description = this.querySelector('p').innerHTML;
      modal.querySelector('.modal-body p').innerHTML = description;
      // Jika terdapat gambar, ambil elemen <img> dan masukkan ke modal
      let imgElem = this.querySelector('img');
      if (imgElem) {
        modal.querySelector('.modal-image').innerHTML = imgElem.outerHTML;
      } else {
        modal.querySelector('.modal-image').innerHTML = '';
      }
      // Tampilkan modal
      modal.classList.remove('hidden');
    });
  });

  // Tutup modal ketika tombol close diklik
  document.getElementById('modal-close').addEventListener('click', function () {
    document.getElementById('modal').classList.add('hidden');
  });

  // Tutup modal ketika klik di luar konten modal
  document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) {
      this.classList.add('hidden');
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const btn  = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    // Toggle menu ketika tombol diklik
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Pastikan menu tersembunyi lagi jika di‐resize ke desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        menu.classList.add('hidden');
      }
    });
  });

    // FAQ Toggle
    function toggleFAQ(button) {
        const faqItem = button.parentElement;
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        // Toggle content
        content.classList.toggle('hidden');
        
        // Rotate icon
        icon.classList.toggle('transform');
        icon.classList.toggle('rotate-180');
        
        // Close other open FAQs
        document.querySelectorAll('.bg-white.rounded-xl').forEach(item => {
            if (item !== faqItem && !item.querySelector('.hidden')) {
                item.querySelector('.hidden').classList.add('hidden');
                item.querySelector('i').classList.remove('transform', 'rotate-180');
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.card-hover, .floating');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    document.querySelectorAll('.card-hover, .floating').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    document.addEventListener('DOMContentLoaded', () => {
        const btn  = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');
    
        // Toggle menu ketika tombol diklik
        btn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
        });
    
        // Pastikan menu tersembunyi lagi jika di‐resize ke desktop
        window.addEventListener('resize', () => {
          if (window.innerWidth >= 768) {
            menu.classList.add('hidden');
          }
        });
      });