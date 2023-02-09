const formulaire = document.querySelector("form")

function envoyerFormulaire(e) {
    e.preventDefault();
    const target = e.target

    const email = target.querySelector('#email').value
    const motdepasse = target.querySelector('#password').value
    const motdepasse2 = target.querySelector('#password2').value

    if (motdepasse === motdepasse2) {
        document.querySelector('.title').style.display = 'none';
        document.querySelector('.imageetform').style.display = 'none';

        document.querySelector('.success').style.display = 'block';
        document.querySelector('.success').innerHTML = 'Merci pour votre inscription ! Vous allez recevoir un email de confirmation à ' + email
        return false;
    } else {
        alert("erreur")
    }
}

formulaire.addEventListener('submit', envoyerFormulaire, false)