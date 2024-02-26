const volume = document.getElementById('volume')
const audio = document.getElementById('soundtrack')

volume.addEventListener('change', update)
audio.addEventListener('input', update)    

function update() {
    audio.volume =  volume.value / volume.getAttribute("max")

}

