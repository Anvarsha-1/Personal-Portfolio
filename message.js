document
  .querySelector(".contact-form")
  .addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    let params = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
    };
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
 
   // Prepare parameters for EmailJS
   let params = {
     name: name,
     email: email,
     subject: subject,
     message: message,
   };

    emailjs
      .send("service_vtkr2cn", "template_879uhv8", params)
      .then(() => {
        alert("Email has been sent!");
        document.getElementsByClassName("contact-form")[0].reset(); // Reset form after success
      })
      .catch((error) => {
        alert("Oops! Something went wrong.");
        console.error("Error:", error);
      });
  });
