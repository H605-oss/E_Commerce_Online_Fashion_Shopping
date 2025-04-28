(function () {
  function $(selector) {
    return document.querySelector(selector);
  }

  function validateForm(fields) {
    let isValid = true;

    fields.forEach(field => {
      $(`#${field}Error`).textContent = "";
    });

    fields.forEach(field => {
      const value = $(`#${field}`).value.trim();

      if (value === "") {
        $(`#${field}Error`).textContent = "This field is required.";
        isValid = false;
      } else {
        if (field.toLowerCase().includes("email") && !/^\S+@\S+\.\S+$/.test(value)) {
          $(`#${field}Error`).textContent = "Invalid email format.";
          isValid = false;
        }
        if (field.toLowerCase().includes("password") && value.length < 8) {
          $(`#${field}Error`).textContent = "Password must be at least 8 characters long.";
          isValid = false;
        }
      }
    });

    return isValid;
  }

  function on(event, selector, callback) {
    $(selector).addEventListener(event, callback);
  }

  // LOGIN form submit
  on("submit", "#myForm", function (event) {
    const isValid = validateForm(["name", "email", "loginPassword", "message"]);
    if (!isValid) {
      event.preventDefault();
    }
  });

  // JOIN form submit
  on("submit", "#joinForm", function (event) {
    const isValid = validateForm(["joinName", "joinEmail", "joinPassword", "joinMessage"]);
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Toggle password visibility for LOGIN
  on("click", "#toggleLoginPassword", function () {
    const passwordField = $("#loginPassword");
    const eyeIcon = $("#eyeIconLogin");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  });

  // Toggle password visibility for JOIN
  on("click", "#toggleJoinPassword", function () {
    const passwordField = $("#joinPassword");
    const eyeIcon = $("#eyeIconJoin");

    if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  });

})();