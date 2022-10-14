const btnSubmit = document.querySelector('.btn-send');
const mainContact = document.querySelector('.subscription__done');

const all = document.querySelector('.main__form');
const inputEmail = document.querySelector('#input__email');
const parrafo = document.querySelector('#warnings')

all.addEventListener("submit", handlerSubmit) 
function handlerSubmit(event) {
    event.preventDefault()  

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
    if(!regexEmail.test(inputEmail.value) === true ) {
        parrafo.innerHTML = `El email no es válido <br>`
    } else { 
        const form = new FormData(this)
    
        console.log(form.get('name'))
        console.log(form.get('lastname'))
        console.log(form.get('phone'))
        console.log(form.get('email'))

        all.style.display = 'none';
        let subsDone = document.createElement('div');
        subsDone.innerHTML = '<h3>Gracias por subscribirte</h3>'
        subsDone.style.padding = '2rem'
        mainContact.appendChild(subsDone)
    }
    console.log(regexEmail.test(inputEmail.value))
}





