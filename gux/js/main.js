



var names = ['David Cohen', 'George Constanza', 'Baba Sheep', 'Super man', 'Max im', 'Bass busa'];


var speed = 0;

function afterLoading() {

    var name = document.getElementById('nameId');
    // var nameTimer = setInterval( nameChanging, 3000);


    var mrefreshinterval = 500; // update display every 500ms
    var lastmousex=-1;
    var lastmousey=-1;
    var lastmousetime;
    var mousetravel = 0;
    var time = Date.now() / 1000;

    $('html').mousemove(function(e) {
        var mousex = e.pageX;
        var mousey = e.pageY;
        if (lastmousex > -1) {
            var timeDelta = Date.now() / 1000 - time;
            mousetravel = Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
            speed = Math.floor(mousetravel / timeDelta * 1000);
        }
        console.log('speed='+Math.floor(100000 / speed));
        lastmousex = mousex;
        lastmousey = mousey;
        setTimeout( nameChanging, Math.floor(100000 / speed));
    });

}



function nameChanging(){
    var rand = Math.floor(Math.random()*names.length);
    var nam = document.getElementById('nameId');
    nam.value = names[rand];
}



