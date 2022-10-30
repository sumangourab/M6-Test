function validate() {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let gender = document.getElementsByName('gender')
    let country = document.getElementById('country').value
    let error = false


    let checkNumber = true;

    for (var i = 0; i < firstName.length; i++) {
        if (firstName[i] >=0 && firstName[i] <= 9) {
            checkNumber = false;
        }
    }
    if (firstName.length >= 3 && checkNumber == true) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }
    let checkNumber2 = true;

    for (var i = 0; i < lastName.length; i++) {
        if (lastName[i] >=0 && lastName[i] <= 9) {
            checkNumber2 = false;
        }
    }

    if (lastName.length >= 3 && checkNumber2 == true) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    if (
        email.includes("@") &&
        email.includes(".") &&
        email.indexOf("@") != 0 &&
        email.length - email.lastIndexOf(".") >= 3
    ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
    } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
        error = true
    }

    let phoneNumber = parseInt(phone)
    if (phone.length === 10 && !isNaN(phoneNumber) && phoneNumber >= 6000000000) {
        document.getElementById("phone-valid").style.display = "block";
        document.getElementById("phone-invalid").style.display = "none";
    } else {
        document.getElementById("phone-invalid").style.display = "block";
        document.getElementById("phone-valid").style.display = "none";
        error = true
    }

let genValue = false;

    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked == true) {
            genValue = true;
        }
    }
    if(genValue == true) {
        document.getElementById("gender-valid").style.display = "block";
        document.getElementById("gender-invalid").style.display = "none";
    } else {
        document.getElementById("gender-invalid").style.display = "block";
        document.getElementById("gender-valid").style.display = "none";
        error = true
    }


    if (country != 'None') {
        document.getElementById('country-valid').style.display = 'block'
        document.getElementById('country-invalid').style.display = 'none'
    } else {
        document.getElementById('country-invalid').style.display = 'block'
        document.getElementById('country-valid').style.display = 'none'
        error = true
    }


    if (!error) {
        alert('Your details have been saved successfully!')

        document.getElementById('registration-form').reset()

        let validFeedbacks = document.getElementsByClassName('valid-feedback')
        for (let i = 0; i < validFeedbacks.length; i++) {
            validFeedbacks[i].style.display = 'none'
        }
        let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
        for (let i = 0; i < invalidFeedbacks.length; i++) {
            invalidFeedbacks[i].style.display = 'none'
        }
    }
}