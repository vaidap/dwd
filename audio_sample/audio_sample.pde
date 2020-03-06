// setup arduino variables
import processing.serial.*;
Serial get_serial;


// setup audio variables
import processing.sound.*;
SoundFile kick_electro;
SoundFile kick_acoustic;
SoundFile hihat_electro;
SoundFile hihat_acoustic;

float amp_kick = 1;
float amp_hihat = 1;

void setup() {
  size(640, 360);
  background(255);
  
  // serial setup
  get_serial = new Serial(this, "COM3", 9600);
  get_serial.bufferUntil('\n'); 
    
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
  amp_hihat = float(get.readStringUntil('\n')) * 0.01;
  println(amp_hihat);
}

void update_amps() {
  kick_electro.amp(amp_kick);
  kick_acoustic.amp(1.0 - amp_kick);
  hihat_electro.amp(amp_hihat);
  hihat_acoustic.amp(1.0 - amp_hihat);
}
