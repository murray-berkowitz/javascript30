var konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight", "ArrowLeft","ArrowRight","b", "a"];

var konamiArray = [];

function removeTransition(keyPressed){
    keyPressed.addEventListener('transitionend', function(){
        this.classList.remove('active');
    })
}
function playSound(key){
    var keyPressed = document.querySelector(".keys[value='" + key + "']");
    var audio = document.querySelector("audio[value='" + key + "']");
    audio.currentTime = 0;
    removeTransition(keyPressed);
    keyPressed.classList.add('active');
    audio.play();
}
window.addEventListener("keydown", function(ele){
    var key = ele.key;
    if(key == 'a' || key == 's' || key == 'd' || key == 'f' || key == 'g' || key == 'h' || key == 'j' || key == 'k' || key == 'l'){
        playSound(key);
    }
    konamiArray.push(key);
    console.log(konamiArray);
    if(konamiArray.length == konami.length){
        for(var i = 0; i < konamiArray.length; i++){
            if(konamiArray[i] != konami[i]){
                konamiArray = [];
                break;
            }else if(konamiArray[konamiArray.length-1] == konami[konami.length-1]){
                console.log("code executed");
                document.querySelector("body").insertAdjacentHTML('afterbegin','<iframe id="ffx" width="1200" height="720" src="https://www.youtube.com/embed/OIh6sXRM_yQ?autoplay=1" frameborder="0" allowfullscreen></iframe>');
                konamiArray = [];
            }
        }
    }
    if(document.getElementById('ffx') && key == "Escape"){
        document.querySelector("body").removeChild(document.getElementById('ffx'));
        konamiArray = [];
    }
});
