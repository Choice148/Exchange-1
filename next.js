  function goToStep(step) {
    // Hide all steps
    document.querySelectorAll('.step').forEach((el) => el.classList.remove('active'));

    // Show the target step
    document.querySelector(`#step-${step}`).classList.add('active');
  }

  // Initialize step 1
  document.getElementById('step-1').classList.add('active');

  function verifyOtp() {
    // Add your OTP verification logic here
    alert('OTP Verified!');
  }
