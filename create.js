var timer;
var end = false;
var success = false;
var title;
var timer;

function create() {
 game.stage.backgroundColor = '#000';

    game.add.sprite(150,50,'shell');
    //  Create our Timer
    timer = game.time.create(false);

    //  Set a TimerEvent to occur after 2 seconds
    timer.loop(10000, gameOver, this);

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();

}

function gameOver() {

    end = true;

}
