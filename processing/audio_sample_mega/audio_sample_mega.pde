// setup arduino variables
import processing.serial.*;
Serial get_serial;


// setup audio variables
import processing.sound.*;
SoundFile kick_electro;
SoundFile kick_acoustic;
SoundFile hihat_electro;
SoundFile hihat_acoustic;

float amp_kick = 1; // for testing: q a
float amp_hihat = 1; // w s

void setup() {
  size(640, 360);
  background(255);
  
  // serial setup
  //get_serial = new Serial(this, "COM4", 9600);
  //get_serial.bufferUntil('\n'); 
    
  // Load a soundfile from the /data folder of the sketch and play it back
  kick_electro = new SoundFile(this, "kick_electro.wav");
  kick_acoustic = new SoundFile(this, "kick_acoustic.wav");
  kick_electro.loop();
  kick_acoustic.loop();
  
  hihat_electro = new SoundFile(this, "hihat_electro.wav");
  hihat_acoustic = new SoundFile(this, "hihat_acoustic.wav");
  hihat_electro.loop();
  hihat_acoustic.loop();
  
  update_amps();
  
}      

void draw() {
  update_amps();
}

void serialEvent (Serial get)
{
  String value = get.readStringUntil('\n');
  if (value.charAt(0) == 'A') {
    amp_hihat = float(value.substring(1)) * 0.01;
  }
  if(value.charAt(0) == 'B') {
    amp_kick = float(value.substring(1)) * 0.01;
  }
 
}

void update_amps() {
  kick_electro.amp(amp_kick);
  kick_acoustic.amp(1.0 - amp_kick);
  hihat_electro.amp(amp_hihat);
  hihat_acoustic.amp(1.0 - amp_hihat);
}

// be able to debug without arduino
void keyPressed() {
  if (key == 'q') {
    if (amp_kick < 1.0) {
      amp_kick += 0.01;
    }
  } 
  if (key == 'a') {
    if (amp_kick > 0.0) {
      amp_kick -= 0.01;
    }
  } 
  if (key == 'w') {
    if (amp_hihat < 1.0) {
      amp_hihat += 0.01;
    }
  } 
  if (key == 's') {
    if (amp_hihat > 0.0) {
      amp_hihat -= 0.01;
    }
  } 
}
