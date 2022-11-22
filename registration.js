const RegistrationForm = {
  props: [],
  template: `
        <h3>Register User</h3>
        <hr/>
        <form class="needs-validation mt-5" novalidate autocomplete="off">
            <text-input name="firstName" label="First Name" required="true" type="text" />
            <text-input name="lastName" label="Last Name" required="true" type="text" />
            <text-input name="email" label="Email" required="true" type="email" />
            <text-input name="password" label="Password" required="true" type="password" />
            <hr />
            <input type="submit" class="btn btn-outline-primary" value="Register" />
        </form>
    `,
  components: {
    "text-input": TextInput,
  },
  mounted() {
    (function () {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  },
};
