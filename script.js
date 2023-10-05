document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image");
    let currentIndex = 0;

    // Function to show the next image in the sequence
    function showNextImage() {
        images[currentIndex].style.opacity = 0; // Hide the current image
        currentIndex = (currentIndex + 1) % images.length; // Move to the next image
        images[currentIndex].style.opacity = 1; // Show the next image
    }

    // Start the animation
    setInterval(showNextImage, 2000); // Change image every 2 seconds (adjust the timing as needed)
});