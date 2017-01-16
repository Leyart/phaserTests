/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/xaEwKoIY
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
 game.load.crossOrigin = 'anonymous';    
 game.load.image('shell', 'https://raw.githubusercontent.com/Lucg/phaserTests/master/image/shell.png');
}

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


function update() {
if(game.input.keyboard.isDown(Phaser.Keyboard.A)) {
    success = true;
    end = true;
}
}

var endStarted = false;
function render() {
   if(!end) {
   game.debug.text('PRESS A BUTTON TO CONTINUE', 300, 250,'#1ec503');
   game.debug.text('Time until check: ' + timer.duration.toFixed(0), 300, 300,'#1ec503');
   }
   else{
     if(!endStarted){
         timer = game.time.create(false);
         timer.loop(5000, goToGameJam, this);
         timer.start();
         endStarted = true;
     }
     if(!success){
          game.debug.text('FATAL: YOU HAVE NOT PRESSED A BUTTON. WE WILL STILL BE WATCHING YOU.', 100, 250,'#1ec503');
     }
     else {
         game.debug.text('TEST PASSED: YOU ARE SMART ENOUGH.', 250, 250,'#1ec503');
         game.debug.text('REMOVING BROKEN MIRROR ENTRY.', 250, 284,'#1ec503');
     }
   }
}

function goToGameJam() {
    window.location.href = "http://www.globalgamejam.org";
}
