const btnOrder = document.querySelectorAll('#btnOrder')

btnOrder.forEach( event => {
    event.addEventListener('click', openModal)
})

function openModal(){
    document.body.insertAdjacentHTML('afterbegin', renderModal())
    const closeModal = document.querySelector('.closeModal')
    closeModal.addEventListener('click', funcloseModal)
}

function funcloseModal() {
    let modal = document.querySelector('.modal')
    modal.remove()
}

function renderModal(){
    return `
    <div class="modal">
        <div class="overlayModal">
            <div class="windowModal">
                <div class="headerModal">
                <h2>Зробити замовлення</h2>
                <button class="closeModal">X</button>
                </div>
                <div class="bodyModal">
                    <form action="" class="formOrder">
                        <div class="block_input"><input id="inputName" name="name" type="name" placeholder="Ваше ім'я" class="input"></div>
                        <div class="block_input"><input id="inputEmail" name="email" type="email" placeholder="Ваш E-Mail" class="input"></div>
                        <div class="block_input"><textarea name="comment" type="text" id="inputComment" placeholder="Коммент" class="textarea"></textarea></div>
                        <button class="btn">Відправити</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `
}

