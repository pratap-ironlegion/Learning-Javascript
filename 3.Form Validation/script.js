let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    let isValid = true;

    let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailregex.test(email.value)) {
        document.querySelector("#emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }


    if (!passwordregex.test(password.value)) {
        document.querySelector("#passwordError").textContent = "Wrong Password.";
        isValid = false;
    }

    if (isValid) {
        document.querySelector(".result").textContent = "Everything is correct";
    }

})