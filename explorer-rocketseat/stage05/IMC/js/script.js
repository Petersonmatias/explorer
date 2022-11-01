import { modal } from './modal.js'
import { alertError } from './alert-error.js'
import {calculateIMC, notNumber } from './utils.js'

const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#heigth')

inputWeigth.oninput = ()=> alertError.close()
inputHeigth.oninput = ()=> alertError.close()

form.onsubmit = (event) => {
    event.preventDefault()

    const weigth = inputWeigth.value
    const heigth = inputHeigth.value

    const weigthOrHeigthIsNotNumber = notNumber(weigth) || notNumber(heigth)

    if (weigthOrHeigthIsNotNumber) {
        alertError.open()
        return;
    }

    alertError.close()

    const result = calculateIMC(weigth, heigth)
    displayresultMenssage(result)
}
function displayresultMenssage(result){
    const message = `Seu IMC é de ${result}`

    modal.message.innerText = message
    modal.open()
}

