document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const popup = document.getElementById("popup");

    submitBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to submit the form?"))
        {
          const inputField = document.getElementById("inputField");
          if (inputField.value === "") {
              alert("Please fill out the input field.");
              event.preventDefault(); // Prevent form submission
          } else {
              // Display a confirmation dialog when the submit button is clicked
              if (window.confirm("Are you sure you want to submit the form?")) {
                  // You can submit the form here if the user confirms
              } else {
                  event.preventDefault(); // Prevent form submission
                  
              }
          }
        }
      });
    

    resetBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to reset the form?")) {
            form.reset();
            popup.style.display = "none";
        }
    });
});
