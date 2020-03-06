
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
    
  // Load a soundfile from the /data folder of the sketch and play it back
  kick_electro = new SoundFile(this, "kick_electro.wav");
  kick_acoustic = new SoundFile(this, "kick_acoustic.wav");
  kick_electro.amp(amp_kick);
  kick_acoustic.amp(1.0 - amp_kick);
  kick_electro.loop();
  kick_acoustic.loop();
  
  hihat_electro = new SoundFile(this, "hihat_electro.wav");
  hihat_acoustic = new SoundFile(this, "hihat_acoustic.wav");
  hihat_electro.amp(amp_hihat);
  hihat_acoustic.amp(1.0 - amp_hihat);
  hihat_electro.loop();
  hihat_acoustic.loop();
  
}      

void draw() {
}
