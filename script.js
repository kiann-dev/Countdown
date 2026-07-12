document.addEventListener("DOMContentLoaded", () => {


/* =========================
   INTRODUÇÃO
========================= */


const enterBtn = document.getElementById("enterBtn");

const intro = document.getElementById("intro");

const mainContent = document.getElementById("mainContent");



enterBtn.addEventListener("click", () => {


    intro.style.opacity = "0";


    setTimeout(() => {


        intro.classList.add("hidden");


        mainContent.classList.remove("hidden");


        window.scrollTo({
            top:0,
            behavior:"smooth"
        });



    },800);







/* =========================
   DATA DO EVENTO
========================= */


const targetDate = new Date(
    "August 4, 2026 00:00:00"
).getTime();





const daysElement =
document.getElementById("days");


const hoursElement =
document.getElementById("hours");


const minutesElement =
document.getElementById("minutes");


const secondsElement =
document.getElementById("seconds");



const unlockStatus =
document.getElementById("unlockStatus");






function updateCountdown(){


const now =
new Date().getTime();



const distance =
targetDate - now;



if(distance <= 0){


    finishCountdown();


    return;


}



const days =
Math.floor(
distance /
(1000 * 60 * 60 * 24)
);



const hours =
Math.floor(
(distance %
(1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);



const minutes =
Math.floor(
(distance %
(1000 * 60 * 60))
/
(1000 * 60)
);



const seconds =
Math.floor(
(distance %
(1000 * 60))
/
1000
);




daysElement.innerHTML =
String(days).padStart(2,"0");


hoursElement.innerHTML =
String(hours).padStart(2,"0");


minutesElement.innerHTML =
String(minutes).padStart(2,"0");


secondsElement.innerHTML =
String(seconds).padStart(2,"0");



}




setInterval(
updateCountdown,
1000
);


updateCountdown();







/* =========================
   FRASES ROTATIVAS
========================= */


const messages = [


"Cada segundo nos aproxima de algo especial ❤️",


"A espera também faz parte da história ✨",


"Espero que essa surpresa faça você sorrir.",


"Algumas lembranças merecem ser preparadas com carinho.",


"Cada momento ao seu lado vale a pena.",


"Mal posso esperar para ver sua reação ❤️",


"O tempo passa, mas meu carinho por você só aumenta.",


"Tem algo lindo esperando pelo dia certo."



];



let messageIndex = 0;



const changingMessage =
document.getElementById(
"changingMessage"
);



setInterval(() => {


messageIndex =
(messageIndex + 1)
%
messages.length;



changingMessage.style.opacity = 0;



setTimeout(()=>{


changingMessage.innerHTML =
messages[messageIndex];



changingMessage.style.opacity = 1;



},400);



},5000);







/* =========================
   CORAÇÕES FLUTUANTES
========================= */


const heartsContainer =
document.querySelector(
".hearts-container"
);



function createHeart(){



const heart =
document.createElement(
"div"
);



heart.className =
"floating-heart";



heart.innerHTML =
["❤️","💖","✨","💕"]
[
Math.floor(
Math.random()*4
)
];



heart.style.left =
Math.random()*100+"%";



heart.style.animationDuration =
(5+Math.random()*5)+"s";



heart.style.fontSize =
(15+Math.random()*25)+"px";



heartsContainer.appendChild(
heart
);



setTimeout(()=>{


heart.remove();


},10000);



}



setInterval(
createHeart,
700
);



});

    /* =========================
       PLAYER DE MÚSICA
    ========================= */


    const songs = [

        {
            name:"Until I Found You - Stephen Sanchez",
            file:"assets/audio/until-i-found-you.mp3"
        },

        {
            name:"Perfect - Ed Sheeran",
            file:"assets/audio/perfect.mp3"
        },

        {
            name:"Here With Me - d4vd",
            file:"assets/audio/here-with-me.mp3"
        },

        {
            name:"Best Part - Daniel Caesar",
            file:"assets/audio/best-part.mp3"
        },

        {
            name:"golden hour - JVKE",
            file:"assets/audio/golden-hour.mp3"
        },

        {
            name:"Nothing - Bruno Major",
            file:"assets/audio/nothing.mp3"
        },

        {
            name:"Turning Page - Sleeping At Last",
            file:"assets/audio/turning-page.mp3"
        }

    ];



    const audioPlayer =
    document.getElementById(
        "audioPlayer"
    );


    const songName =
    document.getElementById(
        "songName"
    );


    const playPause =
    document.getElementById(
        "playPause"
    );


    const nextSong =
    document.getElementById(
        "nextSong"
    );


    const previousSong =
    document.getElementById(
        "previousSong"
    );


    const randomSong =
    document.getElementById(
        "randomSong"
    );



    let currentSong = 0;




    function loadSong(index){


        currentSong = index;


        audioPlayer.src =
        songs[index].file;


        songName.innerHTML =
        songs[index].name;


    }




    function playSong(){


        audioPlayer.play();


        playPause.innerHTML =
        "⏸️";


    }




    function pauseSong(){


        audioPlayer.pause();


        playPause.innerHTML =
        "▶️";


    }




    playPause.addEventListener(
    "click",
    ()=>{


        if(
        audioPlayer.paused
        ){

            playSong();

        }

        else{

            pauseSong();

        }


    });






    nextSong.addEventListener(
    "click",
    ()=>{


        currentSong++;



        if(
        currentSong >= songs.length
        ){

            currentSong = 0;

        }



        loadSong(currentSong);


        playSong();



    });







    previousSong.addEventListener(
    "click",
    ()=>{


        currentSong--;



        if(
        currentSong < 0
        ){

            currentSong =
            songs.length - 1;

        }



        loadSong(currentSong);


        playSong();



    });






    randomSong.addEventListener(
    "click",
    ()=>{


        let random;


        do{

            random =
            Math.floor(
            Math.random()
            *
            songs.length
            );


        }

        while(
        random === currentSong
        );



        loadSong(random);


        playSong();


    });






    // Escolhe uma música inicial aleatória


    loadSong(
        Math.floor(
            Math.random()
            *
            songs.length
        )
    );







    /* =========================
       CARTA
    ========================= */



    const openLetter =
    document.getElementById(
        "openLetter"
    );


    const closeLetter =
    document.getElementById(
        "closeLetter"
    );


    const letterModal =
    document.getElementById(
        "letterModal"
    );





    openLetter.addEventListener(
    "click",
    ()=>{


        letterModal
        .classList
        .add("active");


    });





    closeLetter.addEventListener(
    "click",
    ()=>{


        letterModal
        .classList
        .remove("active");


    });





    letterModal.addEventListener(
    "click",
    (e)=>{


        if(
        e.target === letterModal
        ){

            letterModal
            .classList
            .remove("active");

        }


    });








    /* =========================
       EASTER EGGS
    ========================= */



    const secretMessage =
    document.getElementById(
        "secretMessage"
    );



    const secrets = [


        "Você encontrou um pequeno segredo ❤️",


        "Cada detalhe foi feito pensando em você ✨",


        "Espero que você esteja sorrindo agora 💖",


        "Mais um detalhe escondido só para você 🌙",


        "A melhor surpresa ainda está chegando 🎁"


    ];



    document
    .querySelector(".secret-heart")
    .addEventListener(
    "click",
    ()=>{


        secretMessage.innerHTML =
        secrets[
            Math.floor(
            Math.random()
            *
            secrets.length
            )
        ];


    });





    document
    .querySelector(".secret-moon")
    .addEventListener(
    "click",
    ()=>{


        document.body
        .classList
        .toggle(
            "night-mode"
        );


    });





    document
    .querySelector(".secret-star")
    .addEventListener(
    "click",
    ()=>{


        alert(
        "Uma estrela guarda um desejo... ⭐❤️"
        );


    });

/* =========================
   FINAL DA CONTAGEM
========================= */


const finalScreen =
document.getElementById(
    "finalScreen"
);


const finalTitle =
document.getElementById(
    "finalTitle"
);


const finalText =
document.getElementById(
    "finalText"
);


const giftSection =
document.getElementById(
    "giftSection"
);


const giftBox =
document.getElementById(
    "giftBox"
);


const redirectSection =
document.getElementById(
    "redirectSection"
);




let finished = false;




function finishCountdown(){


    if(finished)
    return;


    finished = true;



    document
    .getElementById(
        "countdown"
    )
    .style.display =
    "none";



    unlockStatus.innerHTML =
    "O momento chegou ❤️";



    showFinalAnimation();



}







function showFinalAnimation(){



    finalScreen
    .classList
    .remove(
        "hidden"
    );



    const messages = [


        "Esperei por esse momento...",


        "Cada segundo valeu a pena...",


        "Obrigado por tornar meus dias melhores...",


        "Hoje completamos nosso primeiro mês...",


        "Feliz 1 mês, meu amor ❤️"


    ];



    let index = 0;



    function typeMessage(){


        if(index >= messages.length){


            setTimeout(()=>{


                finalScreen
                .classList
                .add(
                    "hidden"
                );


                giftSection
                .classList
                .remove(
                    "hidden"
                );


            },3000);


            return;


        }



        finalTitle.innerHTML =
        "";



        typeWriter(
            finalTitle,
            messages[index]
        );



        index++;



        setTimeout(
            typeMessage,
            3500
        );


    }



    typeMessage();



    createConfetti();



}








/* =========================
   EFEITO DE DIGITAÇÃO
========================= */



function typeWriter(
element,
text
){


    let i = 0;



    const timer =
    setInterval(()=>{


        element
        .innerHTML +=
        text.charAt(i);



        i++;



        if(i >= text.length){


            clearInterval(timer);


        }



    },70);



}









/* =========================
   CONFETES
========================= */


const confettiContainer =
document.getElementById(
    "confettiContainer"
);




function createConfetti(){


    for(
    let i = 0;
    i < 120;
    i++
    ){



        const confetti =
        document.createElement(
            "div"
        );



        confetti.className =
        "confetti";



        confetti.innerHTML =
        [
        "❤️",
        "✨",
        "💖",
        "🎉"
        ]
        [
        Math.floor(
        Math.random()*4
        )
        ];



        confetti.style.left =
        Math.random()*100+"%";



        confetti.style.animationDuration =
        (2+
        Math.random()*3)
        +"s";



        confettiContainer
        .appendChild(
            confetti
        );



        setTimeout(()=>{


            confetti.remove();


        },5000);



    }



}









/* =========================
   CAIXA DE PRESENTE
========================= */



giftBox.addEventListener(
"click",
()=>{


    giftBox
    .classList
    .add(
        "open"
    );



    setTimeout(()=>{


        giftSection
        .classList
        .add(
            "hidden"
        );



        redirectSection
        .classList
        .remove(
            "hidden"
        );



        startRedirect();



    },2000);



});








/* =========================
   REDIRECIONAMENTO
========================= */



function startRedirect(){


    const progress =
    document.getElementById(
        "loadingProgress"
    );


    const redirectText =
    document.getElementById(
        "redirectText"
    );



    let width = 0;



    const messages = [


        "Preparando sua surpresa ❤️",


        "Carregando todas as lembranças ✨",


        "Organizando cada detalhe 💖",


        "Quase pronto..."


    ];



    let msg = 0;



    const interval =
    setInterval(()=>{



        width += 2;



        progress.style.width =
        width+"%";



        if(width % 25 === 0){


            redirectText.innerHTML =
            messages[msg];


            msg++;


            if(msg >= messages.length)
            msg=0;


        }





        if(width >= 100){



            clearInterval(
                interval
            );



            setTimeout(()=>{


                window.location.href =
                "LINK_DO_SEU_SITE_DE_1_MES";



            },1000);



        }



    },50);



}

/* =========================
   MEMÓRIA DE VISITA
========================= */


const visited =
localStorage.getItem(
    "visitedCountdown"
);



if(visited){


    const welcome =
    document.createElement(
        "div"
    );


    welcome.className =
    "welcome-back";


    welcome.innerHTML =
    `
    ❤️ Bem-vinda de volta...
    <br>
    Espero que tenha sentido minha falta.
    `;



    document.body
    .appendChild(
        welcome
    );



    setTimeout(()=>{


        welcome.remove();


    },4000);



}



localStorage.setItem(
    "visitedCountdown",
    "true"
);








/* =========================
   VIBRAÇÕES ESPECIAIS
========================= */


function vibrateDevice(
    time
){


    if(
    navigator.vibrate
    ){

        navigator.vibrate(time);

    }


}




function checkSpecialTimes(){


    const now =
    new Date();


    const distance =
    targetDate -
    now.getTime();



    const hours =
    Math.floor(
    distance /
    (1000*60*60)
    );



    const minutes =
    Math.floor(
    distance /
    (1000*60)
    );




    if(hours === 24){


        vibrateDevice(100);


    }



    if(hours === 1){


        vibrateDevice(200);


    }



    if(minutes === 10){


        vibrateDevice(300);


    }



}



setInterval(
checkSpecialTimes,
60000
);








/* =========================
   RASTRO DO MOUSE
========================= */


document.addEventListener(
"mousemove",
(e)=>{


    const heart =
    document.createElement(
        "span"
    );



    heart.innerHTML =
    "❤️";



    heart.style.position =
    "fixed";



    heart.style.left =
    e.clientX+"px";



    heart.style.top =
    e.clientY+"px";



    heart.style.pointerEvents =
    "none";



    heart.style.fontSize =
    "12px";



    heart.style.animation =
    "fadeMouse .8s forwards";



    document.body
    .appendChild(
        heart
    );



    setTimeout(()=>{


        heart.remove();


    },800);



});








/* =========================
   EFEITO DE ABERTURA
========================= */



window.addEventListener(
"load",
()=>{


    document.body
    .classList
    .add(
        "loaded"
    );



});








/* =========================
   ATUALIZA STATUS
========================= */


function updateStatusText(){


    const now =
    new Date();



    const diff =
    targetDate -
    now.getTime();



    const days =
    Math.floor(
    diff /
    (1000*60*60*24)
    );



    if(days <= 30){


        unlockStatus.innerHTML =
        "Está chegando... ❤️";


    }



    if(days <= 7){


        unlockStatus.innerHTML =
        "Agora falta muito pouco ✨";


    }



    if(days <= 1){


        unlockStatus.innerHTML =
        "É amanhã... ❤️";


    }



}



setInterval(
updateStatusText,
3600000
);



updateStatusText();








/* =========================
   SEGURANÇA
========================= */


window.addEventListener(
"beforeunload",
()=>{


    localStorage.setItem(
        "lastVisit",
        new Date()
    );


});





});