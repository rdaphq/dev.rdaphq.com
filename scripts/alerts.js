function displayAlert(type, message) {
    const alerts = document.getElementById('alerts')

    alerts.innerHTML = `<div id="alert" class="alert" role="alert">${message}</div>`

    const alert = document.getElementById('alert')

    if (type === 'warn') {
        alert.style.color = '#111'
        alert.style.backgroundColor = '#ffc107'
        alert.style.border = '1px solid #111'
    } else if (type === 'error') {
        alert.style.color = '#111'
        alert.style.backgroundColor = '#dc3545'
        alert.style.border = '1px solid #111'
    } else if (type === 'success') {
        alert.style.color = '#fff'
        alert.style.backgroundColor = '#28a745'
        alert.style.border = '1px solidrgb(0, 124, 29)'
    } else {
        alert.style.color = '#fff'
        alert.style.backgroundColor = '#0073ee'
        alert.style.border = '1px solid #002955'
    }

    alert.classList.add('alert-slide')
    alert.style.display = 'block'

    setTimeout(() => {
        alert.style.display = 'none'
        alert.innerHTML = ''
    }, 4000)
}

//////////// 

const quikie = document.getElementById('quikie')
const quikieView = document.getElementById('quikie_view')

quikie.addEventListener('click', (a) => {
    a.preventDefault()
    displayAlert('warn', `Quikie is under development!`)
});

quikieView.addEventListener('click', (a) => {
    a.preventDefault()
    displayAlert('warn', `Quikie is under development!`)
});