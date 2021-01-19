const form = document.querySelector("form")

const user = (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const emailConfirmation = document.getElementById("email_confirmation").value;
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("password_confirmation").value;
    const cgu = document.getElementById("cgu");

    checkForm(firstName, lastName, age, email, emailConfirmation, password, passwordConfirmation, cgu)
}

const checkForm = (firstName, lastName, age, email, emailConfirmation, password, passwordConfirmation, cgu) => {

    if (!firstName || firstName.length < 3) {
        alert("Veuillez fournir un prénom de 3 caractères minimum");
        return false
    }

    if (!lastName) {
        alert("Veuillez fournir un nom");
        return false
    }

    if (!age || age < 18) {
        alert("Il faut avoir plus de 18 ans");
        return false;
    }

    const regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/;
    if (!email || !email.match(regexEmail) || email.length < 8 || email.length > 30) {
        alert("Votre email n'est pas valide")
        return false
    }

    if (!emailConfirmation) {
        alert("Veuillez confirmer votre email");
        return false;
    }

    if (email !== emailConfirmation) {
        alert("Veuillez entrer 2 email identique");
        return false;
    }

    if (!password || password.length < 6) {
        alert("Veuillez fournir un mot de passe de 6 caractères minimum");
        return false;
    }

    if (!passwordConfirmation) {
        alert("Veuillez confirmer votre mot de passe");
        return false;
    }

    if (password !== passwordConfirmation) {
        alert("Veuillez entrer 2 mots de passe identique");
        return false;
    }

    if (!cgu.checked) {
        alert("Veuillez accepter les CGU");
        return false;
    }

    window.location.replace("https://www.thehackingproject.org/");

}

form.addEventListener("submit", user);