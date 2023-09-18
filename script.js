
        const carousel = document.getElementById('carousel');
        const slides = carousel.querySelectorAll('.carousel-slide');
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('visible');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('visible');
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        setInterval(nextSlide, 3000);
