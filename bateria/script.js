//reconhecer as teclas que digito no teclado, // apertar a tecla e solta KEYUP
document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase()); //chamar a função PLAYSOUND e usando o toLowerCase para colocar o texto em minusculo 

});

document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector("#input").value; // pegar a composisação informada no INPUT

    if(song !== ""){
       let songArray = song.split(""); 
       playComposition(songArray);
    }
});


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`) // pegando o elemento e armazenando na variavel
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    if(audioElement){ // verificando se nosso elemento existe. Se exixte audio na tecla
        audioElement.currentTime = 0; // reiniciando o audio, para que toda vez q clicar na letra ele reiniciar
        audioElement.play(); // após verificado se existir, tocar
        
    }

    if(keyElement){
        keyElement.classList.add('active'); // adicionando as bordas amarelas ao elemento(letra clicada)

        setTimeout(()=>{
            keyElement.classList.remove('active'); // Removendo as bordas amarelas ao elemento(letra clicada) após 300 milissegundos
        }, 300);
    }
}

function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;   
    }
}