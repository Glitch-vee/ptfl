document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Handle contact form submission
    document.getElementById('contactForm')?.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                document.getElementById('contactForm').reset();
            } else {
                alert('Failed to send message');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred');
        }
    });

    // Handle accordion behavior for skills section
    document.querySelectorAll('.collapse').forEach(function (collapse) {
        collapse.addEventListener('shown.bs.collapse', function () {
            document.querySelectorAll('.collapse').forEach(function (otherCollapse) {
                if (otherCollapse !== collapse) {
                    otherCollapse.classList.remove('show');
                }
            });
        });
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
    addShape('shape-2', 500, 500, 50, 70);
    addShape('shape-3', 200, 200, 70, 20);
    addShape('shape-4', 400, 400, 20, 60);
    addShape('shape-5', 150, 150, 80, 40);
    addShape('shape-6', 250, 250, 40, 50);
    addShape('shape-7', 350, 350, 30, 75);

    // Add hollow circles
    addShape('shape hollow', 200, 200, 10, 10);
    addShape('shape hollow', 300, 300, 60, 20);

    // Add small circles
    addShape('shape small', 100, 100, 50, 10);
    addShape('shape small', 100, 100, 80, 90);
    addShape('shape small', 100, 100, 20, 80);

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