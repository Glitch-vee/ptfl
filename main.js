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

    // Add grey circles
    addShape('shape-1', 300, 300, 15, 25);
    addShape('shape-2', 100, 100, 50, 70);
    addShape('shape-3', 200, 200, 70, 20);
    addShape('shape-4', 400, 400, 20, 60);
    addShape('shape-5', 150, 150, 80, 40);
    addShape('shape-6', 80, 80, 40, 50);
    addShape('shape-7', 50, 50, 30, 75);

    // Add hollow circles
    addShape('hollow', 200, 200, 10, 10);
    addShape('hollow', 300, 300, 60, 20);

    // Add small circles
    addShape('small', 100, 100, 50, 10);
    addShape('small', 100, 100, 80, 90);
    addShape('small', 100, 100, 20, 80);

    // Add squares
    function addSquare(width, height, top, left) {
        const shape = document.createElement('div');
        shape.classList.add('shape', 'square');
        shape.style.width = width + 'px';
        shape.style.height = height + 'px';
        shape.style.top = top + '%';
        shape.style.left = left + '%';
        document.querySelector('.background-shapes').appendChild(shape);
    }

    addSquare(150, 150, 30, 40);
    addSquare(100, 100, 70, 30);
    addSquare(200, 200, 50, 60);

    // Add triangles
    function addTriangle(top, left) {
        const shape = document.createElement('div');
        shape.classList.add('shape', 'triangle');
        shape.style.top = top + '%';
        shape.style.left = left + '%';
        document.querySelector('.background-shapes').appendChild(shape);
    }

    addTriangle(20, 80);
    addTriangle(40, 20);
    addTriangle(70, 50);
});