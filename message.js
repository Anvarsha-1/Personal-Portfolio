    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validation
    if (!name) {
      alert("Name cannot be blank!");
      return;
    }

    if (!email) {
      alert("Email cannot be blank!");
      return;
    }

    if (!subject) {
      alert("Subject cannot be blank!");
      return;
    }

    if (!message) {
      alert("Message cannot be blank!");
      return;
    }

    // Prepare params for EmailJS
    let params = {
      name,
      email,
      subject,
      message,
    };

    // Send email using EmailJS
    emailjs
      .send("service_vtkr2cn", "template_879uhv8", params)
      .then(() => {
        alert("Email has been sent!");
        document.getElementsByClassName("contact-form")[0].reset().preventDefault(); // Reset form after success
      })
      .catch((error) => {
        alert("Oops! Something went wrong.");
        console.error("Error:", error);
      });
  });
