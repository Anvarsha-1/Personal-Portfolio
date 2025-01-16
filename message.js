function sendmail() {
   // Get form values
   let name = document.getElementById("name").value.trim();
   let email = document.getElementById("email").value.trim();
   let subject = document.getElementById("subject").value.trim();
   let message = document.getElementById("message").value.trim();
 
   // Validate form inputs
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
 
   // Send email using EmailJS
   emailjs
     .send("service_vtkr2cn", "template_879uhv8", params)
     .then(() => {
       alert("Email has been sent!");
       document.getElementsByClassName("contact-form").reset(); // Reset form
     })
     .catch((error) => {
       alert("Oops! Something went wrong.");
       console.error("Error:", error);
     });
 }
 