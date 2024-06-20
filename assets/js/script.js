// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Masonry
    const grid = document.querySelector('.gallery');
    const msnry = new Masonry(grid, {
        itemSelector: 'a',
        columnWidth: 'a',
        percentPosition: true
    });

    // Ensure layout is triggered after each image is loaded
    imagesLoaded(grid).on('progress', () => {
        msnry.layout();
    });

    // Cycle images from left to right when any image is clicked
    const images = Array.from(document.querySelectorAll('.gallery a'));
    images.forEach((imgLink, index) => {
        imgLink.addEventListener('click', (event) => {
            event.preventDefault();
            const nextIndex = (index + 1) % images.length;
            const nextImgLink = images[nextIndex];
            lightbox.start($(nextImgLink)[0]);
        });
    });
});
