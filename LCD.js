var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
// I2C LCD, PCF8574T
  var lcd = new five.LCD({controller: "PCF8574T"});
  
  // The starting position of the LCD display
  lcd.cursor(0, 10);
 

  lcd.autoscroll().print("Bloop").print("Bleep");
});
  
