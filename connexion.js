const formulaire=document.querySelector("form")

function envoyerFormulaire (e) {
    e.preventDefault();
    const email=e.target.querySelector('#email').value
document.querySelector('.formulaire').style.display='none'
document.querySelector('.success').style.display="block"
document.querySelector('.success').innerHTML='vous \u00eates connect\u00e9 sur ' + email

}

formulaire.addEventListener('submit', envoyerFormulaire, false)