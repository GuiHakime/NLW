const bot = document.querySelector('#add-time')

bot.addEventListener('click', function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')
    //CLEAN
    fields.forEach(function (field) {
        field.value = ""
    })


    document.querySelector('#schedule-items').appendChild(newFieldContainer)
})