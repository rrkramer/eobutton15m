function play() {
        
    returnsoundbite();
    var audio = document.getElementById("audio");
    audio.setAttribute("src",returnsoundbite())
    audio.play();
  }

function returnsoundbite(){
    var soundbites = ["geefruimte","denkaan15m"];
    var randomnumber = Math.floor(Math.random()*soundbites.length);
    var randomsoundbite = soundbites[randomnumber]; 
    // Files need to be .wav formatted. OGG files are not natively supported in browsers on iOS.
    var soundbite = 'soundbite/'+randomsoundbite+'.wav';
    console.log(soundbite);
    return soundbite;     
  }