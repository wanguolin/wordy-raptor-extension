function wordyraptor_help(){
    alert("help");
}


document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    // Alert the key name and key code on keydown
    if(name === 'h' || name === '?') {
        wordyraptor_help();
    }

}, false);