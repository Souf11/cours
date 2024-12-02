document.addEventListener("DOMContentLoaded", function () {
    // Select all images
    const images = document.querySelectorAll(".gallery img");

    // Add event listeners for mouseover, mouseleave, focus, and blur
    images.forEach(image => {
        // Mouseover and Mouseleave
        image.addEventListener("mouseover", function () {
            image.style.border = "5px solid blue"; // Example: change border on hover
        });
        image.addEventListener("mouseleave", function () {
            image.style.border = ""; // Reset border on mouse leave
        });

        // Focus and Blur
        image.addEventListener("focus", function () {
            console.log(`Image ${image.alt} is focused`);
            image.style.outline = "2px solid green"; // Add green outline on focus
        });
        image.addEventListener("blur", function () {
            console.log(`Image ${image.alt} has lost focus`);
            image.style.outline = ""; // Reset outline on blur
        });
    });

    // Initialize tabindex and add event listeners
    initializeGallery();
});

function initializeGallery() {
    console.log("Gallery loaded successfully!");
    
    // Loop through each image to add tabindex attributes dynamically
    const images = document.querySelectorAll(".gallery img");
    images.forEach((image, index) => {
        image.setAttribute("tabindex", index + 1); // Set tabindex for accessibility
    });
}
