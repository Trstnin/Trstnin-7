// Get the dropdown button and dropdown content elements
const dropbtns = document.querySelectorAll('.dropbtn');
const arrow_down = document.querySelectorAll('icon-arrow-down');
const arrow_up = document.querySelectorAll('icon-arrow-up');

// Loop through each button and add click event listener
dropbtns.forEach(button => {
  button.addEventListener('mouseover', function(event) {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Get the dropdown content element related to this button
    const dropdown = this.nextElementSibling;

    // Toggle the display of the dropdown content
    dropdown.classList.toggle('show');

    // changing the arrow btn
 this.classList.toogle('active');
    // Close any other open dropdowns
    closeOtherDropdowns(dropdown);
  });
});

// Close dropdowns if clicked outside
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    closeAllDropdowns();
  }
});

function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.classList.remove('show');
  });
}

function closeOtherDropdowns(currentDropdown) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (dropdown !== currentDropdown) {
      dropdown.classList.remove('show');
    }
  });
}




