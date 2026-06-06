// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Contact form message
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  formMessage.textContent = "Your message has been sent successfully!";
  contactForm.reset();
});
// Parent feedback form message
const feedbackForm = document.getElementById("feedbackForm");
const feedbackMessage = document.getElementById("feedbackMessage");

feedbackForm.addEventListener("submit", function (e) {
  e.preventDefault();

  feedbackMessage.textContent = "Your response has been submitted successfully!";
  feedbackForm.reset();
});
function getResult() {
    const roll = document.getElementById("roll").value;

    fetch(`http://localhost:5000/student/${roll}`)
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById("result");

        if (data.name) {
            resultDiv.innerHTML =
                `Name: ${data.name} <br> Marks: ${data.marks}`;
        } else {
            resultDiv.innerHTML = data.message;
        }
    })
    .catch(error => {
        console.log(error);
    });
}
