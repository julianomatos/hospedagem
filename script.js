const horario = document.getElementById('horario')

function atualizarHorario(){
    const agora = new Date()
    horas = agora.getHours().toString().padStart(2,     )
    minutos = agora.getMinutes().toString().padStart(2, '0')
    segundos = agora.getSeconds().toString().padStart(2, '0')
    // dia = agora.getDate()
    // mes = agora.getMonth() + 1
    // ano = agora.getFullYear()
    horario.textContent = `${horas}:${minutos}:${segundos}`
}

setInterval(atualizarHorario, 1000)
