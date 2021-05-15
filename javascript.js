const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 7500
const breatheTime = (totalTime/5)*2
const holdTime = totalTime/5

breadtheAnimation ()

function breadtheAnimation (){
    text.innerHTML= 'Breath In!'
    responsiveVoice.speak(text.innerHTML)
    container.className= 'container grow'
    
    setTimeout( ()=>{
        text.innerText= 'Hold'
        responsiveVoice.speak(text.innerHTML)

        setTimeout(() =>{
            text.innerText = 'Breathe Out!'
            responsiveVoice.speak(text.innerHTML)
            container.className= 'container shrink'
        },holdTime)

    }, breatheTime)
}
setInterval(breadtheAnimation, totalTime)