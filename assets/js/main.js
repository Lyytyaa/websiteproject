/**
 * Abdul Malik Tech Academy - Modern Vanilla JavaScript
 * Author: Abdul / Abdul Malik Team
 * Description: Modular, high-performance interactions for the landing page
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. Sticky Navbar on Scroll
  // =========================================================================
  const navbar = document.querySelector('.navbar-custom');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  const handleScroll = () => {
    const scrollPos = window.scrollY || window.pageYOffset;

    // Navbar elevation
    if (navbar) {
      if (scrollPos > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Trigger on initial load

  // Back to top action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 2. Promo Announcement Countdown Timer (Simulated 24-Hour Flash Sale)
  // =========================================================================
  const countdownEl = document.getElementById('promo-countdown');
  if (countdownEl) {
    // Set 18 hours 42 minutes from current session or persist in localStorage
    let totalSeconds = 18 * 3600 + 42 * 60 + 15;

    const updateTimer = () => {
      if (totalSeconds <= 0) {
        totalSeconds = 24 * 3600; // Reset for demonstration
      }
      totalSeconds--;

      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const format = (n) => String(n).padStart(2, '0');
      countdownEl.textContent = `${format(hours)}j : ${format(minutes)}m : ${format(seconds)}d`;
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // =========================================================================
  // 3. Stats Counter Animation with IntersectionObserver
  // =========================================================================
  const counterElements = document.querySelectorAll('.stat-number');
  
  if (counterElements.length > 0 && 'IntersectionObserver' in window) {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const duration = 1800; // ms
          const stepTime = 20; // ms
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target.toLocaleString('id-ID');
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current).toLocaleString('id-ID');
            }
          }, stepTime);

          observer.unobserve(el);
        }
      });
    };

    const statsObserver = new IntersectionObserver(observerCallback, {
      threshold: 0.3
    });

    counterElements.forEach((el) => statsObserver.observe(el));
  }

  // =========================================================================
  // 4. Interactive Curriculum Module Filter
  // =========================================================================
  const filterBtns = document.querySelectorAll('.curriculum-tab-btn');
  const moduleCards = document.querySelectorAll('.module-card-item');

  if (filterBtns.length > 0 && moduleCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Active class update
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        moduleCards.forEach((card) => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.opacity = '0';
            setTimeout(() => {
              card.style.transition = 'opacity 0.3s ease';
              card.style.opacity = '1';
            }, 50);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // =========================================================================
  // 5. Interactive Pricing Switcher (Full Payment vs Installment)
  // =========================================================================
  const pricingBtns = document.querySelectorAll('.pricing-toggle-btn');
  const priceValues = document.querySelectorAll('.price-val');
  const priceNotes = document.querySelectorAll('.price-period-note');

  if (pricingBtns.length > 0) {
    pricingBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        pricingBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const planType = btn.getAttribute('data-plan'); // 'full' or 'installment'

        priceValues.forEach((el) => {
          const fullPrice = el.getAttribute('data-full');
          const installmentPrice = el.getAttribute('data-installment');
          el.style.opacity = '0';
          setTimeout(() => {
            el.textContent = planType === 'full' ? fullPrice : installmentPrice;
            el.style.opacity = '1';
          }, 150);
        });

        priceNotes.forEach((note) => {
          note.textContent = planType === 'full' ? '/sekali bayar' : '/bulan (3x cicilan)';
        });
      });
    });
  }

  // =========================================================================
  // 6. Lead Registration Form with Validation & Feedback Toast
  // =========================================================================
  const leadForm = document.getElementById('consultation-lead-form');
  const toastSuccessEl = document.getElementById('successToast');
  
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic client-side validation
      const nameInput = document.getElementById('lead-name');
      const phoneInput = document.getElementById('lead-phone');
      const emailInput = document.getElementById('lead-email');
      const levelSelect = document.getElementById('lead-level');
      const submitBtn = leadForm.querySelector('button[type="submit"]');

      if (!leadForm.checkValidity()) {
        e.stopPropagation();
        leadForm.classList.add('was-validated');
        return;
      }

      // Simulated Async submission
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Memproses Pendaftaran...
      `;

      setTimeout(() => {
        // Reset form & states
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        leadForm.reset();
        leadForm.classList.remove('was-validated');

        // Show Bootstrap Toast
        if (toastSuccessEl && window.bootstrap) {
          const toast = new bootstrap.Toast(toastSuccessEl, { delay: 6000 });
          toast.show();
        } else {
          alert('Terima kasih! Tim konselor kami akan segera menghubungi kamu via WhatsApp.');
        }
      }, 1000);
    });
  }

  // =========================================================================
  // 7. Interactive Testimonial Carousel (Autoplay, Dots & Touch Swipe)
  // =========================================================================
  const track = document.getElementById('testimonialTrack');
  const carouselContainer = document.getElementById('testimonialCarousel');
  const dots = document.querySelectorAll('.testimonial-dot-btn');
  const prevBtn = document.getElementById('testiPrevBtn');
  const nextBtn = document.getElementById('testiNextBtn');

  if (track && dots.length > 0) {
    let currentIndex = 0;
    const totalDots = dots.length;
    let autoplayTimer = null;
    const autoplayDelay = 4000; // 4 seconds autoplay

    const updateSlider = (index) => {
      currentIndex = (index + totalDots) % totalDots;

      // Calculate translation offset based on slide width and gap
      const slide = track.querySelector('.testimonial-slide-item');
      if (slide) {
        const slideWidth = slide.offsetWidth;
        const gap = 24; // 1.5rem (24px)
        const offset = currentIndex * (slideWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;
      }

      // Update active dot styling
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    // Dot click listeners
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const targetIndex = parseInt(dot.getAttribute('data-slide'), 10);
        updateSlider(targetIndex);
        resetAutoplay();
      });
    });

    // Arrow navigation buttons
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        updateSlider(currentIndex - 1);
        resetAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        updateSlider(currentIndex + 1);
        resetAutoplay();
      });
    }

    // Autoplay controls
    const startAutoplay = () => {
      if (!autoplayTimer) {
        autoplayTimer = setInterval(() => {
          updateSlider(currentIndex + 1);
        }, autoplayDelay);
      }
    };

    const stopAutoplay = () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    };

    const resetAutoplay = () => {
      stopAutoplay();
      startAutoplay();
    };

    startAutoplay();

    // Pause on mouse hover for reading comfort
    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', stopAutoplay);
      carouselContainer.addEventListener('mouseleave', startAutoplay);
    }

    // Mobile touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoplay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;
      if (Math.abs(swipeDistance) > 40) {
        if (swipeDistance < 0) {
          updateSlider(currentIndex + 1);
        } else {
          updateSlider(currentIndex - 1);
        }
      }
      startAutoplay();
    }, { passive: true });

    // Re-align slides on window resize
    window.addEventListener('resize', () => {
      updateSlider(currentIndex);
    }, { passive: true });
  }

  // =========================================================================
  // 8. Smooth Scroll Offset Helper for Anchor Links
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile navbar if open
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });
  });

  console.log('🚀 Abdul Malik Tech Academy script initialized successfully.');
});
