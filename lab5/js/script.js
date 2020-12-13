const textarea = document.querySelector('#exampleFormControlTextarea1')
const email = document.querySelector('#exampleFormControlInput1')
const form = document.querySelector('#form')

form.addEventListener('submit', FORM)

function FORM(){
    email.value === '' ? email.style = "border: 1px solid red" : email.style = ""
    textarea.value === '' ? textarea.style = "border: 1px solid red" : textarea.style = ""
    if(email.value > '' && textarea.value > ''){
        alert("Ви відправили" + "\n" +"Ваше ім'я: " + email.value + "\n" + "Ваш коммент: " + textarea.value) 
    }
    
}
