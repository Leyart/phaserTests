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
