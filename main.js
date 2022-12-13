let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
let interval;

function run() {
    update();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    draw()
}

function init() {
    load();
    let interval = setInterval(run, 1000/60);
}

init();