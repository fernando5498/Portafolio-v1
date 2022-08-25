let imgCardSelec = document.querySelectorAll('.payment-card')
let imgCardSelecPreview = document.getElementById('payment__form__tarjet__seleccion')

imgCardSelec.forEach(element => {
    element.addEventListener('click', () => {
        imgCardSelec.forEach(item => {
            item.classList.remove('active')
        })
        element.classList.add('active')

        let UrlImg = element.firstElementChild.getAttribute('src')
        imgCardSelecPreview.src = UrlImg

    })
})