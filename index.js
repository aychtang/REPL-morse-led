  var five = require("../lib/johnny-five.js"),
  morse = require('./morsec.js'),
  board;

  board = new five.Board();

  board.on("ready", function() {
    console.log( "Ready event. Repl instance auto-initialized" );

    var led = new five.Led(13);
    var queue = [];
    var timeUnit = 50;

    var process = function() {
      if (queue.length) {
        var letter = queue.shift();

        if (letter === ' ') {
          setTimeout(finish, 7 * timeUnit);
        }
        else if (letter === '.') {
          led.on();
          setTimeout(finish, 1 * timeUnit);
        }
        else if (letter === '-') {
          led.on();
          setTimeout(finish, 3 * timeUnit);
        }
      }
      else {
        console.log('finished sentance');
      }
    };

    var finish = function() {
      led.off();
      setTimeout(process, timeUnit);
    };

    this.repl.inject({
      run: function(str) {
        var code = morse(str);
        for (var i = 0; i < code.length; i++) {
          queue.push(code[i]);
        };
        process();
      }
    });

  });
