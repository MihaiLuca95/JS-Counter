const div = document.getElementById('count')
const btnDec = document.getElementById('btnDecrease')
const btnInc = document.getElementById('btnIncrease')

let count = 0;
div.textContent = count

// decrease number
btnDec.addEventListener('click', () => {
    if(count > 0) {
        div.textContent = --count
    }
})

// increase number
btnInc.addEventListener('click', () => {
        div.textContent = ++count
})