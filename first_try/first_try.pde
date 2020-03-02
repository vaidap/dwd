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

color from = #1e2dcc;
color to = #f90904;
float lerp_step = 0.01;
int lerp_counter = 0;
// make this transition between colours in a softer way, rather than hardcoded?
int lerp_max_count = 250;
int lerp_dir = 0;
color inter_color = lerpColor(from, to, lerp_step);

// initialise interview data arrays and variables
 float[] radius_arr = {200, 600, 300, 400};
 float[] freq_arr = {50, 400, 100, 200};
 color[] start_color_arr = {#87b5f2, #2e5918, #e4efe1, #e22716};
 color[] end_color_arr = {#632955, #aa1da8, #48376b, #109699};
 int interview = 0;

void setup() {
  size(1400, 800);

  // Create sine oscillator
  sine = new SinOsc(this);
  sine.play();
  
  update_values(0);
 
}

void draw() {

  // update variables for animation
  // size change
  radius = radius - pulse_scale * sin( frameCount * pulse_speed / 60 );
  
  // color change
  lerp_counter++;
  if (lerp_counter > lerp_max_count) {
    lerp_counter = 0;
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
  fill(inter_color, 80);
  ellipse(700, 400, radius, radius);
  
  // update sound
  freq = freq - pulse_scale * sin( frameCount * pulse_speed / 60 );
  sine.freq(freq);
}

// interate through data using a key press
void keyPressed() {
  if (key == CODED) {
    if (keyCode == RIGHT) {
      interview++;
      if (interview == radius_arr.length) {
        interview = 0;
      }
      update_values(interview);
      
    } 
  }
}

// update visualisation & sound values based on interview number
void update_values(int value) {
    radius = radius_arr[value];
    freq = freq_arr[value];
    from = start_color_arr[value];
    to = end_color_arr[value];
    inter_color = lerpColor(from, to, lerp_step);
    lerp_dir = 0;
    lerp_counter = 0;
}
