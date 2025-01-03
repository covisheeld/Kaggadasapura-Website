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

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const expectations = document.getElementById('expectations').value;
    const freeTime = document.getElementById('free-time').value;

    // Example of form submission - you can modify this to send the data to a server
    console.log({
        name,
        phone,
        email,
        expectations,
        freeTime
    });

    

    // Show a confirmation message
    const message = `Thank you, ${name}! We have received your details. We'll contact you soon on ${email}.`;
    document.getElementById('form-message').textContent = message;

    // Reset the form after submission
    document.getElementById('join-us-form').reset();
}
