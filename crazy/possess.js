
function movemyMouse(num) {
    //$('html').css('cursor', 'url(images/cursor2.gif)');

    var bodyW = document.getElementsByTagName('html')[0].clientWidth;
    var bodyH = document.getElementsByTagName('html')[0].clientHeight;

    var rndW = Math.floor((Math.random() * bodyW) + 1);
    var rndH = Math.floor((Math.random() * bodyH) + 1);

    var rndT = Math.floor((Math.random() * 2000) + 500);

    $('.mousie').eq(num).animate({
        left: rndW,
        top: rndH
    }, rndT, function () {
        movemyMouse(num);
        //var myEle = document.elementFromPoint($(this).css('left'), $(this).css('top'));
        //$(this).click();
    });
}

var counter = 0;

function buildDiv(count) {
    setTimeout(function () {
        $('body').append('<div class="mousie" style="background-image:url(\'crazy/images/close.png\'); height:20px; width:20px; position:absolute; top:19px; right:31px; z-index:1000;"></div>');

        movemyMouse(counter);
        counter++;

        if (counter != count) {
            buildDiv(count);
        }

    }, 10);
}

function pageLoad() {
//    $('#div_clicker').click(function() {
//        //buildDiv(1);
//    });
}

$('html').click(function (e) {
    // $('.mousie').animate().stop();
    // $('.mousie').remove();
});


//R = -1;
//    x1 = .05;
//    y1 = .06;
//    x2 = -.02;
//    y2 = .04;
//    x3 = 2; //center stuff
//    y3 = 33;
//    x4 = 150; //width
//    y4 = 150; //height
//    x5 = 500; //left
//    y5 = 500; //top

    //R = 0; x1 = .02; y1 = .03; x2 = -.02; y2 = .04; x3 = 1.6; y3 = 0; x4 = 250; y4 = 250; x5 = 250; y5 = 250;
    //R = 0; x1 = .05; y1 = .0003; x2 = .06; y2 = .05; x3 = 5.1; y3 = .21; x4 = 200; y4 = 350; x5 = 220; y5 = 50;
    //R = 0; x1 = .1; y1 = .05; x2 = .25; y2 = .24; x3 = 1.6; y3 = .24; x4 = 100; y4 = 2000; x5 = 500; y5 = 500;
    //R = 0; x1 = .1; y1 = .05; x2 = .25; y2 = .24; x3 = 1.6; y3 = .24; x4 = 300; y4 = 2000; x5 = 200; y5 = 500;
    //R = 0; x1 = .05; y1 = .03; x2 = .06; y2 = .004; x3 = 5.1; y3 = -5; x4 = 200; y4 = 350; x5 = 220; y5 = 500;
    //R = 300; x1 = .05; y1 = .03; x2 = -.06; y2 = .04; x3 = -5.1; y3 = -5; x4 = 200; y4 = 250; x5 = 220; y5 = 250;

    //i = Math.floor((Math.random() * 500) + 1);

    //var toleft = Math.sin(R * x1 + i * x2 + x3) * x4 + x5 + 'px';
    //var totop = Math.cos(R * y1 + i * y2 + y3) * y4 + y5 + 'px';
