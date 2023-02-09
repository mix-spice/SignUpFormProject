
    // Get the form element
    var form = document.querySelector("form");

   

    // Add a submit event listener to the form
    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the email value
    var email = document.querySelector("#email").value;

    var phone = document.querySelector("#phone").value;
        

    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }


    function validatePhone(phone) {
      var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return re.test(phone);
    }

    if(validateEmail(email) && validatePhone(phone)){
      form.sumbit();
    }

    else {

    if(!validateEmail(email)){
      alert("Invalid Email Adress");
    }
    
    if(!validatePhone(phone)){
      alert("Invalid Phone Number");
    }

    }

 });