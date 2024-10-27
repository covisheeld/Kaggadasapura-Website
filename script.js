// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {

    // Navigation dropdown menu toggle for mobile
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    // Close the dropdown if clicked outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown > a')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    };

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionText = section.innerText.toLowerCase();
            if (sectionText.includes(searchTerm)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });

    // Show more images in the gallery (optional feature)
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryContainer = document.querySelector('.gallery');
    let galleryVisibleCount = 4;

    const showMoreButton = document.createElement('button');
    showMoreButton.textContent = 'Show More';
    showMoreButton.classList.add('show-more-btn');
    galleryContainer.after(showMoreButton);

    function showMoreGalleryItems() {
        galleryVisibleCount += 4;
        galleryItems.forEach((item, index) => {
            if (index < galleryVisibleCount) {
                item.style.display = 'inline-block';
            }
        });
        if (galleryVisibleCount >= galleryItems.length) {
            showMoreButton.style.display = 'none';
        }
    }

    showMoreButton.addEventListener('click', showMoreGalleryItems);

    // Hide all but the first 4 gallery items initially
    galleryItems.forEach((item, index) => {
        if (index >= galleryVisibleCount) {
            item.style.display = 'none';
        }
    });

    // Contact link alert (optional)
    const phoneLink = document.querySelector('a[href^="tel:"]');
    phoneLink.addEventListener('click', function () {
        alert('You are about to call Kaggadasapura Toastmasters Club!');
    });
});