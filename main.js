import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async function () {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBcqJT6Hh7XYWry2zGWrZRDjR4_pdpLHRM",
        authDomain: "alvees-portfolio.firebaseapp.com",
        projectId: "alvees-portfolio",
        storageBucket: "alvees-portfolio.appspot.com",
        messagingSenderId: "351171242982",
        appId: "1:351171242982:web:0bf76743afc71529fc4427",
        measurementId: "G-C23N06PN34"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Handle contact form submission
    document.getElementById('contactForm').addEventListener('submit', async function (event) {
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

    // Fetch and display skills from Firestore
    try {
        const skillsContainer = document.getElementById("skillsAccordion");
        const skillsSnapshot = await getDocs(collection(db, "skills"));

        skillsSnapshot.forEach((doc) => {
            const skill = doc.data();
            const card = document.createElement("div");
            card.classList.add("card");

            const cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header");
            cardHeader.id = "heading" + doc.id;

            const button = document.createElement("button");
            button.classList.add("btn", "btn-link", "collapsed");
            button.type = "button";
            button.setAttribute("data-toggle", "collapse");
            button.setAttribute("data-target", "#collapse" + doc.id);
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-controls", "collapse" + doc.id);
            button.innerText = skill.name;

            cardHeader.appendChild(button);
            card.appendChild(cardHeader);

            const collapse = document.createElement("div");
            collapse.id = "collapse" + doc.id;
            collapse.classList.add("collapse");
            collapse.setAttribute("aria-labelledby", "heading" + doc.id);
            collapse.setAttribute("data-parent", "#skillsAccordion");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
            cardBody.innerText = skill.description;

            collapse.appendChild(cardBody);
            card.appendChild(collapse);

            skillsContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching skills: ", error);
    }
});