
let b = document.getElementById("b");
let pacman = document.getElementById("pacman");
let i = ['#'];

b.addEventListener('click' ,a(), true);

function a(){
    setInterval(install(),500);
}

function install() {
        for (let index = 0; index < 10; index++) {
            pacman.innerHTML(i);
            i.push('#');
        }
}