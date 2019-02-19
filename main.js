
let push = document.getElementById("b");
let pacman = document.getElementById("pacman");
let i = ['#'];

b.addEventListener('click' ,waitInstall(), true);

function waitInstall(){
    setInterval(install(),500);
}

function install() {
        for (let index = 0; index < 10; index++) {
            pacman.innerHTML = i;
            i.push('#');
        }
}