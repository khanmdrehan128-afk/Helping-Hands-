// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mission Read More
document.getElementById('read-more-btn').addEventListener('click', function() {
  const details = document.getElementById('mission-details');
  const btn = document.getElementById('read-more-btn');
  if (details.classList.contains('hidden')) {
    details.classList.remove('hidden');
    btn.textContent = 'Read Less';
  } else {
    details.classList.add('hidden');
    btn.textContent = 'Read More';
  }
});

// Event Modal
function openModal(eventType) {
  const modal = document.getElementById('event-modal');
  const title = document.getElementById('modal-title');
  const date = document.getElementById('modal-date');
  const location = document.getElementById('modal-location');
  const description = document.getElementById('modal-description');

  if (eventType === 'food-drive') {
    title.textContent = 'Food Donation Drive';
    date.textContent = 'Date: 21 January 2025';
    location.textContent = 'Location: City Community Center';
    description.textContent = 'Join us in collecting and distributing food to those in need. Your participation can make a real difference!';
  } else if (eventType === 'tree-plantation') {
    title.textContent = 'Tree Plantation Event';
    date.textContent = 'Date: 10 February 2025';
    location.textContent = 'Location: Green Park';
    description.textContent = 'Help us plant trees and contribute to a greener environment. Bring your friends and family!';
  }

  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('event-modal').classList.add('hidden');
}

function rsvp() {
  alert('Thank you for RSVPing! We look forward to seeing you there.');
  closeModal();
}

// Donation
let totalDonated = 0;
const goal = 10000;

function donate(amount) {
  totalDonated += amount;
  updateProgress();
  alert(`Thank you for donating ₹${amount}!`);
}

function donateCustom() {
  const customAmount = parseInt(document.getElementById('custom-amount').value);
  if (customAmount > 0) {
    totalDonated += customAmount;
    updateProgress();
    alert(`Thank you for donating ₹${customAmount}!`);
    document.getElementById('custom-amount').value = '';
  } else {
    alert('Please enter a valid amount.');
  }
}

function updateProgress() {
  const progressFill = document.getElementById('progress-fill');
  const currentAmount = document.getElementById('current-amount');
  const percentage = (totalDonated / goal) * 100;
  progressFill.style.width = Math.min(percentage, 100) + '%';
  currentAmount.textContent = `Current: ₹${totalDonated}`;
}


// Validate volunteer form
function validateVolunteerForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const city = document.getElementById('city').value.trim();
  const interest = document.getElementById('interest').value;

  if (!name || !email || !city || !interest) {
    alert('Please fill in all fields.');
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email.');
    return false;
  }

  // Show confirmation
  document.getElementById('confirmation').classList.remove('hidden');
  document.querySelector('.vol-form').reset();

  return false; // Prevent form submission for demo
}

// Login Modal Functions
function openLoginModal() {
  document.getElementById('login-modal').classList.remove('hidden');
}

function closeLoginModal() {
  document.getElementById('login-modal').classList.add('hidden');
  // Clear form and errors
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('login-emailError').textContent = '';
  document.getElementById('login-passwordError').textContent = '';
}

function validateLogin() {
  document.getElementById("login-emailError").textContent = "";
  document.getElementById("login-passwordError").textContent = "";

  let email = document.getElementById("login-email").value.trim();
  let password = document.getElementById("login-password").value.trim();
  let isValid = true;

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    document.getElementById("login-emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("login-emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    document.getElementById("login-passwordError").textContent =
      "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("login-passwordError").textContent =
      "Password must be at least 6 characters.";
    isValid = false;
  }

  if (isValid) {
    alert("Login Successful!");
    closeLoginModal();
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
  const loginModal = document.getElementById('login-modal');
  if (event.target === loginModal) {
    closeLoginModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeLoginModal();
  }
});
