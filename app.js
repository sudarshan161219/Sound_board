const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']



sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.textContent = sound

    btn.addEventListener("click", () => {
        stopPlay()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)

})

function stopPlay () {
    sounds.forEach( sound => {
        const play =  document.getElementById(sound)
        play.pause()
        play.currentTime = 0
    })
}