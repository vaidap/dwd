// initialise variables for sound
import processing.sound.*;
SinOsc sine;
SinOsc sine_bass;
float freq = 100;

// initialise variables for pulsating circle
float radius = 400.0;
float pulse_speed = 5;
float pulse_scale = 2;
//color pulse_color = color(255, 255, 255);

color from = color(204, 102, 0);
color to = color(0, 102, 153);
float lerp_step = 0.01;
int lerp_count = 0;
int lerp_dir = 0;
color inter_color = lerpColor(from, to, lerp_step);

void setup() {
  size(1400, 800);

  // Create sine oscillator
  sine = new SinOsc(this);
  sine.play();
}

void draw() {

  // update variables for animation
  // size change
  radius = radius - pulse_scale * sin( frameCount * pulse_speed / 60 );
  
  // color change
  lerp_count++;
  if (lerp_count > 200) {
    lerp_count = 0;
    if( lerp_dir == 0) {
      lerp_dir = 1;
    }
    else {
    lerp_dir = 0;
  }
  }

  if (lerp_dir == 0) {
    inter_color = lerpColor(inter_color, to, lerp_step);
  } else {
    inter_color = lerpColor(inter_color, from, lerp_step);
  }

  // redraw pulsating circle
  background(0);
  strokeWeight(15);
  //stroke(pulse_color);
  stroke(inter_color);
  fill(inter_color, 40);
  ellipse(700, 400, radius, radius);
  
  // update sound
  freq = freq - pulse_scale * sin( frameCount * pulse_speed / 60 );
  sine.freq(freq);
}
