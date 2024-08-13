function buttoon() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let birthday = document.getElementById("birthday").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    if (
      fname == "" ||
      lname == "" ||
      birthday == "" ||
      email == "" ||
      phone == "" ||
      (!male && !female)
    ) {
      window.alert("Please fill all the fields!!!");
      return false;
    }
    if(phone.length<11){
        alert("Phone Number Invalid☠️☠️")
        event.preventDefault();
        return false;
    }

    else {
      window.alert("Form submitted succesfully🥳🥳");
      return true;
    }
  }