document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    let carouselIndex = 0;
    const carouselSlides = document.querySelectorAll(".carousel .slide");

    function moveCarousel() {
        let totalSlides = carouselSlides.length;
        if (totalSlides === 0) return; // Prevent errors if no slides
    
        // Hide all slides first
        carouselSlides.forEach(slide => {
            slide.style.display = "none";
        });
    
        // Show the next 4 slides correctly, ensuring smooth looping
        for (let j = 0; j < 4; j++) {
            let index = (carouselIndex + j) % totalSlides; // Correct wrap-around logic
            if (carouselSlides[index]) {
                carouselSlides[index].style.display = "block";
            }
        }
    }

    setInterval(() => {
        carouselIndex = (carouselIndex + 1) % carouselSlides.length;
        moveCarousel();
    }, 3000); // Every 3 seconds
    document.getElementById("next-arrow-carousel").addEventListener("click", () => {
        carouselIndex = (carouselIndex + 1) % carouselSlides.length; // Move forward, looping
        moveCarousel();
    });
    
    document.getElementById("prev-arrow-carousel").addEventListener("click", () => {
        carouselIndex = (carouselIndex - 1 + carouselSlides.length) % carouselSlides.length; // Move backward, looping
        moveCarousel();
    });
    let shopIndex = 0;
    const shopItems = document.querySelectorAll('.shop-products .product');
    const shopItemsVisible = 6; 
    const totalShopItems = shopItems.length;

    function updateShopPosition() {
        const itemWidth = shopItems[0].offsetWidth;
        const offset = -(itemWidth * shopIndex * shopItemsVisible);
        const shopGrid = document.querySelector('.shop-products .product-grid');
        shopGrid.style.transform = `translateX(${offset}px)`;
    }

    
    document.getElementById("next-arrow-shop").addEventListener("click", () => {
        if (shopIndex < Math.ceil(totalShopItems / shopItemsVisible) - 1) {
            shopIndex++;
        } else {
            shopIndex = 0;
        }
        updateShopPosition();
    });

    
    document.getElementById("prev-arrow-shop").addEventListener("click", () => {
        if (shopIndex > 0) {
            shopIndex--; 
        } else {
            shopIndex = Math.ceil(totalShopItems / shopItemsVisible) - 1; 
        }
        updateShopPosition();
    });

   
    moveCarousel();
    updateShopPosition();

    
    document.addEventListener("DOMContentLoaded", function() {
        const hamburger = document.getElementById('hamburger-menu');
        const navLinks = document.getElementById('nav-links');

        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    });

    const menus = {
        shop: document.getElementById("shop-menu"),
        discover: document.getElementById("discover-menu")
    };

    const buttons = {
        shop: document.getElementById("shop-btn"),
        discover: document.getElementById("discover-btn")
    };

    function toggleMenu(menu) {
        Object.values(menus).forEach(m => {
            if (m !== menu) {
                m.classList.remove("show");
            }
        });
        menu.classList.toggle("show");
    }

    Object.keys(buttons).forEach(key => {
        buttons[key].addEventListener("click", function (event) {
            event.preventDefault();
            toggleMenu(menus[key]);
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".menu-item")) {
            Object.values(menus).forEach(m => m.classList.remove("show"));
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    
    let shopIndex = 1;
    const shopItems = document.querySelectorAll('.shop-products .product');
    const shopItemsVisible = 6; 
    const totalItems = shopItems.length; 

    function updateShopPosition() {
        shopItems.forEach((item, index) => {
            if (index >= shopIndex * shopItemsVisible && index < (shopIndex + 1) * shopItemsVisible) {
                item.style.display = 'grid'; 
            } else {
                item.style.display = 'none';
            }
        });
    }

    document.getElementById("next-arrow-shop").addEventListener("click", () => {
        if (shopIndex < Math.ceil(totalItems / shopItemsVisible) - 1) {
            shopIndex++;
        } else {
            shopIndex = 0; 
        }
        updateShopPosition();
    });

    document.getElementById("prev-arrow-shop").addEventListener("click", () => {
        if (shopIndex > 0) {
            shopIndex--;
        } else {
            shopIndex = Math.ceil(totalItems / shopItemsVisible) - 1; 
        }
        updateShopPosition();
    });

    updateShopPosition();
});
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    document.getElementById("next-carousel").addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    document.getElementById("prev-carousel").addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    setInterval(function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);

    showSlide(currentSlide);
});


document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-button");
    const carousels = {
        new: document.getElementById("new-carousel"),
        bestseller: document.getElementById("bestseller-carousel"),
        recommended: document.getElementById("recommended-carousel")
    };

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            Object.values(carousels).forEach(carousel => carousel.style.display = "none");
            carousels[this.dataset.category].style.display = "flex";
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    function toggleMenu() {
        if (window.innerWidth <= 768) {
            if (navLinks.style.display === "none" || navLinks.style.display === "") {
                navLinks.style.display = "flex";
                navLinks.classList.add("transparent"); 
            } else {
                navLinks.style.display = "none";
                navLinks.classList.remove("transparent"); 
            }
        }
    }


    if (window.innerWidth <= 768) {
        navLinks.style.display = "none";
    }

    hamburger.addEventListener('click', toggleMenu);

    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            navLinks.style.display = "flex"; 
            navLinks.classList.remove("transparent"); 
        } else {
            navLinks.style.display = "none"; 
        }
    });
});

window.addEventListener("load", function() {

    document.getElementById("loader").style.display = "none";

    document.getElementById("content").style.display = "block";

    document.body.classList.remove("loading");
});
function handleEmail() {
    let emailInput = document.getElementById("email");
    let message = document.getElementById("message");
    let checkbox = document.getElementById("agree");

    if (emailInput.value === "") {
        message.textContent = "Please enter an email address!";
        message.style.color = "red";
        return;
    }
    if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        message.textContent = "Please enter a valid email address!";
        message.style.color = "red";
        return;
    }
    if (!checkbox.checked) {
        message.textContent = "You must agree to the terms and conditions!";
        message.style.color = "red";
        return;
    }
    message.textContent = "Thank you for subscribing!";
    message.style.color = "green";
    emailInput.value = "";
    checkbox.checked = false; 
}