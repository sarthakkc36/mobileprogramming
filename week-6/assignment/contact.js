import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaGs6BUVZwQ18ng1uo3aXHerbMBnL-qEo",
  authDomain: "mobileprogramming-837a4.firebaseapp.com",
  databaseURL: "https://mobileprogramming-837a4-default-rtdb.firebaseio.com",
  projectId: "mobileprogramming-837a4",
  storageBucket: "mobileprogramming-837a4.firebasestorage.app",
  messagingSenderId: "217167152180",
  appId: "1:217167152180:web:590f197cdd525e4aeef661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// DOM elements
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');
const statusMessage = document.getElementById('statusMessage');

// Show status message
function showStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${type}`;
  statusMessage.classList.remove('hidden');
  
  setTimeout(() => {
    statusMessage.classList.add('hidden');
  }, 5000);
}

// Toggle loading state
function setLoading(isLoading) {
  submitBtn.disabled = isLoading;
  btnText.classList.toggle('hidden', isLoading);
  btnLoader.classList.toggle('hidden', !isLoading);
}

// Handle form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  setLoading(true);
  
  const formData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    subject: document.getElementById('subject').value.trim(),
    message: document.getElementById('message').value.trim(),
    timestamp: new Date().toISOString(),
  };

  try {
    // Save to Firebase Realtime Database
    const contactRef = ref(database, 'contacts');
    await push(contactRef, formData);
    
    showStatus('Message sent successfully! We\'ll get back to you soon.', 'success');
    form.reset();
  } catch (error) {
    console.error('Error submitting form:', error);
    showStatus('Failed to send message. Please try again.', 'error');
  } finally {
    setLoading(false);
  }
});