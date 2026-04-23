document.addEventListener("DOMContentLoaded", function () {

    // ===== SAFE DROPDOWN =====
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    if (dropdown && dropdownContent) {
        dropdown.addEventListener("click", function () {
            dropdownContent.classList.toggle("show");
        });

        window.addEventListener("click", function (event) {
            if (!event.target.matches('.dropdown > a')) {
                dropdownContent.classList.remove("show");
            }
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== SEARCH =====
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', function () {
            const term = this.value.toLowerCase();
            document.querySelectorAll('section').forEach(section => {
                section.style.display =
                    section.innerText.toLowerCase().includes(term) ? 'block' : 'none';
            });
        });
    }

    // ===== GALLERY =====
    const items = document.querySelectorAll('.gallery-item');
    const gallery = document.querySelector('.gallery');

    if (items.length && gallery) {
        let count = 4;

        const btn = document.createElement('button');
        btn.textContent = 'Show More';
        btn.classList.add('show-more-btn');
        gallery.after(btn);

        items.forEach((item, i) => {
            if (i >= count) item.style.display = 'none';
        });

        btn.addEventListener('click', () => {
            count += 4;
            items.forEach((item, i) => {
                if (i < count) item.style.display = 'inline-block';
            });
            if (count >= items.length) btn.style.display = 'none';
        });
    }

    // ===== PHONE ALERT =====
    const phoneLink = document.querySelector('a[href^="tel:"]');
    if (phoneLink) {
        phoneLink.addEventListener('click', () => {
            alert('Calling Toastmasters...');
        });
    }

    /* =========================
       🔥 AWWARDS FEATURES
    ========================== */

    // ===== 3D TILT =====
    document.querySelectorAll('.meeting-info, .point, .team-member').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -10;
            const rotateY = ((x / rect.width) - 0.5) * 10;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateX(0) rotateY(0) scale(1)`;
        });
    });

    // ===== MAGNETIC BUTTONS =====
    document.querySelectorAll('.whatsapp-link, .cta-primary').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0,0)';
        });
    });

    // ===== DARK MODE =====
    const toggle = document.querySelector(".dark-toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // ===== SCROLL REVEAL =====
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const trigger = window.innerHeight * 0.85;

        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < trigger) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // ===== CURSOR GLOW =====
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");
    document.body.appendChild(glow);

    document.addEventListener("mousemove", (e) => {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
    });

    // ===== LOADER =====
    const loader = document.createElement("div");
    loader.id = "loader";
    loader.innerHTML = "<h1>Welcome</h1>";
    document.body.appendChild(loader);

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    });

    // ===== HAMBURGER =====
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

    // ===== 🍏 APPLE NAVBAR SCROLL EFFECT =====
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (!header) return;

        if (window.scrollY > 50) {
            header.style.background = "rgba(0, 65, 101, 0.85)";
            header.style.boxShadow = "0 10px 40px rgba(0,0,0,0.3)";
            header.style.transform = "translateX(-50%) scale(0.97)";
        } else {
            header.style.background = "rgba(0, 65, 101, 0.65)";
            header.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
            header.style.transform = "translateX(-50%) scale(1)";
        }
    });

});
