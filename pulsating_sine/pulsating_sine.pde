int freq = 51;
int dir = 0;

import processing.sound.*;
SinOsc sine;
SinOsc sine_bass;

void setup() {
  size(640, 360);
  background(255);
    
  // Create the sine oscillator
  sine = new SinOsc(this);
  sine.play();
  
}      

void draw() {
  
  if (dir == 0) {
    freq += 5;
  }
  else {
  freq-= 5;
  }
  
  if (freq >= 300) {
    dir = 1;
  }
  if (freq <= 50) {
    dir = 0;
  }

  sine.freq(freq);
}

int sound_lerp_dir(int freq) {
  
   return 0;
}
