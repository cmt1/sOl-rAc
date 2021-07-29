function right() {
    const r = document.getElementById('mainc');
    r.style.left = `${r.offsetLeft + 30}px`;
}


function left() {
    const l = document.getElementById('mainc');
    l.style.left = `${l.offsetLeft - 30}px`;
}

function up() {
    const l = document.getElementById('mainc');
    l.style.top = `${l.offsetTop - 50}px`;
}

function down() {
    const l = document.getElementById('mainc');
    l.style.top = `${l.offsetTop + 30}px`;
}

function move() {
    var mover = document.getElementById('right');
   
    if (mover.style.display === "none") {
        mover.style.display = "block";


    }
  
}
function mover() {
   
    var stand = document.getElementById('mainc');

    if (stand.style.display === "block") {
        stand.style.display = "none";


    }
   
}


 
