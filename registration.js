const RegistrationForm = {
  props: ["items"],
  data() {
    return {
      sameAddressChecked: false,
    };
  },
  template: `
        <h3>Register User</h3>
        <hr/>
        <form class="needs-validation mt-5" novalidate autocomplete="off">
            <text-input name="firstName" label="First Name" required="true" type="text" />
            <text-input name="lastName" label="Last Name" required="true" type="text" />
            <text-input name="email" label="Email" required="true" type="email" />
            <text-input name="password" label="Password" required="true" type="password" />
            <select-input name="color" label="Favorite Color" required="true" :items="items" />
            <check-input name="terms" label="Agree terms and conditions" required="required" />
            <text-input name="address" label="Address" required="true" type="text" />
            <text-input name="city" label="City" required="true" type="text" />
            <text-input name="postalcode" label="Postal Code" required="true" type="text" />
            <check-input name="sameAddress" label="Same as communication address" v-model="sameAddressChecked" @click="sameAddress" />
            <div v-if="sameAddressChecked === false">
                <text-input name="mailingAddress" label="Mailing Address" type="text" />
                <text-input name="mailingCity" label="Mailing City" type="text" />
                <text-input name="mailingPostalcode" label="Mailing Postal Code" type="text" />
            </div>
            <hr />
            <input type="submit" class="btn btn-outline-primary" value="Register" />
        </form>
    `,
  components: {
    "text-input": TextInput,
    "select-input": SelectInput,
    "check-input": CheckBoxInput,
  },
  methods: {
    sameAddress() {
      this.sameAddressChecked = !this.sameAddressChecked;
    },
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
