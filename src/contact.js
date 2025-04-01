import { BACKEND_URL } from "./config.js";

    const contactForm = document.querySelector(".php-email-form");
    console.log("Script loaded and running!");
    console.log(contactForm);
  
    if (contactForm) {
      contactForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission
  
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData.entries());
        formObject.organisation = "orbitlinker";
        const jsonStringForm = JSON.stringify(formObject);
        const submitButton = contactForm.querySelector("button[type='submit']");
        const loadingIndicator = contactForm.querySelector(".loading");
        const errorMessage = contactForm.querySelector(".error-message");
        const successMessage = contactForm.querySelector(".sent-message");
        
        // console.log(jsonStringForm); 
        // Reset messages
        
        errorMessage.style.display = "none";
        successMessage.style.display = "none";
        loadingIndicator.style.display = "block";
        submitButton.disabled = true;

  
        // Send data to the backend (Example using fetch)
        fetch(BACKEND_URL + "/api/v1/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonStringForm,
        })
          .then((response) => response.json())
          .then((data) => {
            loadingIndicator.style.display = "none";
            submitButton.disabled = false;
            // console.log("Server Response:", data.error); // Debugging
            console.log(data)
            if (data) {
              successMessage.style.display = "block";
              setTimeout(() => {
                successMessage.style.display = "none";
              }, 5000);
              contactForm.reset();
            } else {
              errorMessage.textContent = data.error || "Something went wrong. Please try again.";
              errorMessage.style.display = "block";
              setTimeout(() => {
                errorMessage.style.display = "none";
              }, 5000);
            }

          })
          .catch((error) => {
            loadingIndicator.style.display = "none";
            submitButton.disabled = false;
            errorMessage.textContent = "Error submitting the form. Please check your network.";
            errorMessage.style.display = "block";
            setTimeout(() => {
                errorMessage.style.display = "none";
              }, 5000);
          });
      });
    }
  