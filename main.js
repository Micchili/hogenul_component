function init(){
    let push = document.getElementById("push");
    let pacman = document.getElementById("pacman");
    let i = ['#'];

    push.addEventListener('click' ,waitInstall(), true);

    function waitInstall(){
        console.log("押したよ");
        setInterval(install(),2000);
    }

    function install() {
        for (let index = 0; index < 10; index++) {
            pacman.innerHTML = i;
            i.push('#');
            console.log("可動したよ");
        }
    }    
}

window.onload(init());