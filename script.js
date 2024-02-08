let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

document.addEventListener("DOMContentLoaded", function () {
    // Get the width of the text and set it as the logo container width
    var textContainer = document.querySelector(".text-container");
    var dynamicLogoContainer = document.getElementById("dynamicLogoContainer");
    var dynamicLogo = document.getElementById("dynamicLogo");
    var downloadButton = document.getElementById("downloadButton");

    if (textContainer && dynamicLogoContainer && dynamicLogo) {
        var textContainerWidth = textContainer.offsetWidth;
        dynamicLogoContainer.style.width = textContainerWidth + "px";
        dynamicLogo.width = textContainerWidth;
    }

    downloadButton.addEventListener("click", function () {
        window.location.href = "https://drive.google.com/file/d/1ASp96FWarVCqArU8ZYA7E9nNXd8APj5S/view";
    });

    var voicemateSlideIndex = 0;
    showSlides("voicemateSlideshow", voicemateSlideIndex);

    var sighthubSlideIndex = 0;
    showSlides("sighthubSlideshow", sighthubSlideIndex);

    function showSlides(slideshowId, slideIndex) {
        var slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(function () {
            showSlides(slideshowId, slideIndex);
        }, 2000); // Change slide every 2 seconds
    }
});
