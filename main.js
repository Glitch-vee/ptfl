document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Add new shapes dynamically
    function addShape(className, width, height, top, left) {
        const shape = document.createElement('div');
        shape.classList.add('shape', className);
        shape.style.width = width + 'px';
        shape.style.height = height + 'px';
        shape.style.top = top + '%';
        shape.style.left = left + '%';
        document.querySelector('.background-shapes').appendChild(shape);
    }

    // Add shapes
    addShape('shape-1', 300, 300, 15, 25);
    addShape('shape-2', 500, 500, 50, 70);
    addShape('shape-3', 200, 200, 70, 20);
    addShape('shape-4', 400, 400, 20, 60);
    addShape('shape-5', 150, 150, 80, 40);
    addShape('shape-6', 250, 250, 40, 50);
    addShape('shape-7', 350, 350, 30, 75);
    addShape('hollow', 200, 200, 10, 10);
    addShape('hollow', 300, 300, 60, 20);
    addShape('small', 100, 100, 50, 10);
    addShape('small', 100, 100, 80, 90);
    addShape('small', 100, 100, 20, 80);
});