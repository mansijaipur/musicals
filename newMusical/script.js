window.onload = () =>{
    const WHITE_KEYS = ['z','x','c','v','b','n','m']
    const BLACK_KEYS = ['s','d','g','h','j']
    const whiteKeys = document.querySelectorAll('.key.white');
    const blackKeys = document.querySelectorAll('.key.black');
    const keys = document.querySelectorAll('.key');
    setTimeout(() => {
        keys.forEach( (key) => {
            key.addEventListener('click', () => playNote(key));
        });
        
    }, 5000);

    document.addEventListener('keydown', e => {

        if(e.repeat) return //If key is pressed repeatedly multiple time then it returns without being played

        const key =e.key; //key that we pressed

        //getting white key and black key index of pressed key
        const whiteKeyIndex = WHITE_KEYS.indexOf(key) 
        const blackKeyIndex = BLACK_KEYS.indexOf(key)

        //-1 returned if it can't find anything
        if(whiteKeyIndex > -1){
            playNote(whiteKeys[whiteKeyIndex]);
        }
        if(blackKeyIndex > -1){
            playNote(blackKeys[blackKeyIndex]);
        }
        

    });
    
    let playNote = (key) => {
        const noteSound = document.getElementById(key.dataset.note);
        // console.log(noteSound);
        noteSound.currentTime = 0;
        noteSound.play();
        key.classList.add('active');
        noteSound.addEventListener('ended', () =>{
            key.classList.remove('active');
        });
    };
}; 




