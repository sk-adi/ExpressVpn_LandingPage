// Select all buttons and sections
const buttons = document.querySelectorAll('.reviewbutton');
const sections = document.querySelectorAll('.reviewsection > div');

// Add click event listener to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all sections
    sections.forEach(section => section.classList.remove('active'));

    // Add 'active' class to the clicked section
    sections[index].classList.add('active');
  });
});
