document.addEventListener("DOMContentLoaded", () => {
    // Function to add hover effect on an image
    function addHoverEffect(imgId, originalSrc, hoverSrc) {
    const img = document.getElementById(imgId);
    img.addEventListener("mouseover", () => {
        img.src = hoverSrc;
    });
    img.addEventListener("mouseout", () => {
        img.src = originalSrc;
    });
    }

    // Apply hover effect to images
    addHoverEffect("scrapeImg", "/images/scraping-dish.jpg", "./images/scraping-dish2.jpg");
    addHoverEffect("soakImg", "images/dishes-soaking.png", "images/dishes-soaking2.jpg")
    addHoverEffect("scrubImg", "images/scrubbing-dish.jpg", "images/scrubbing-dish2.jpg")
    addHoverEffect("dryImg", "images/drying-dish.jpg", "images/drying-dish2.jpg")
})