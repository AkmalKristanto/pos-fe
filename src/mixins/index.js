const mixins = {
  methods: {
    /**
     *
     * @param {*} routeName
     */
    navigateToPage(routeName, hashName) {
      if (hashName == null) {
        this.$router.push({ name: routeName });
      } else {
        this.$router.push({ name: routeName, hash: hashName });
      }
    },

    /**
     *
     * @param {*} fullName
     */
    initials(fullName) {
      // Create a array from fullName
      if (fullName.indexOf(" ") < 1) {
        return fullName.charAt(0).toUpperCase();
      } else {
        var arrName = fullName.split(" ");

        // Select the first letter of the name
        var iniName = fullName.charAt(0);

        // Select the first letter of the lastname
        var iniLname = arrName[1].charAt(0);

        // Return the initials
        return (iniName + iniLname).toUpperCase();
      }
    },

    /**
     *
     * @param {*} evt
     */
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },

    /**
     *
     * @param {*} value
     */
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    /**
     *
     * @param {*} value
     * @param {*} length
     */
    truncate(value, length) {
      if (value.length > length) {
        return value.substring(0, length) + "...";
      } else {
        return value;
      }
    },

    /**
     *
     * @param {*} partialValue
     * @param {*} totalValue
     */
    percentage(partialValue, totalValue) {
      return (100 * partialValue) / totalValue;
    },

    /**
     *
     * @param {*} id
     */
    switchVisibility(id) {
      const passwordField = document.querySelector(id + " > .form-control");
      const btnToggle = document.querySelector(id + " > .btn > #btn-eye");
      if (passwordField.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
        btnToggle.classList.remove("fa-eye");
        btnToggle.classList.add("fa-eye-slash");
      } else {
        passwordField.setAttribute("type", "password");
        btnToggle.classList.add("fa-eye");
        btnToggle.classList.remove("fa-eye-slash");
      }
    },

    /**
     *
     * @param {*} el
     */
    scrollTo(el) {
      var element = document.getElementById(el);
      var headerOffset = 100;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },

    /**
     *
     * @param {*} maxDate
     */
    maxDate(maxDate) {
      let date = new Date();
      let now =
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2);

      //if same date
      if (now == maxDate) {
        return true;
      }

      //if now > max date
      if (now > maxDate) {
        return true;
      }
      return false;
    },

    /**
     *
     * @param {*} maxDate
     */
    countDay(maxDate) {
      let date = new Date();
      let now =
        date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2);

      let dt1 = new Date(now);
      let dt2 = new Date(maxDate);

      let result = Math.floor(
        (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
          Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
          (1000 * 60 * 60 * 24)
      );

      if (result < 0) {
        return 0;
      }

      return result;
    },

    makeid(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    },
  },
};

export default mixins;
