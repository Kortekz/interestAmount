// Calculate Interest

// declaring variables
let display = document.querySelector('[data-answer]')
let display2 = document.querySelector('[data-display]')
let btn = document.querySelector('[data-btn]')
let VAT = 0.15
btn.addEventListener('click', interest)

// funtion to calulate and display minutes to seconds
function interest(){
    let input = document.querySelector('[data-value]').value
    let calc = eval (`${input} * 0.15`)
    let answer = eval (`${calc} + ${input}`)
    display.value = calc
    display2.value = answer
}
// makes the input display read only
document.querySelector('[data-display]').readOnly = true