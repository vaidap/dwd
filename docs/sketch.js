// KnobMakerC Example
// Miles DeCoster - CodeForArtists.com

// Create a variable for each instance of a knob or make bunch with an array
var p1_1_knob;
var p1_2_knob;
var p1_3_knob;
var p1_4_knob;
var p1_5_knob;

var p2_1_knob;
var p2_2_knob;
var p2_3_knob;
var p2_4_knob;
var p2_5_knob;

// active question
var question = 1;

// sound samples
var kick_1;
var kick_2;
var clap_1;
var clap_2;
var hihat_1;
var hihat_2;

// reverb
var reverb_p1_q1;
var reverb_p2_q1;
var reverb_p1_q2;
var reverb_p2_q2;
var reverb_p1_q3;
var reverb_p2_q3;

// filter
var filter_p1_q1;
var filter_p1_q2;
var filter_p1_q3;
var filter_p2_q1;
var filter_p2_q2;
var filter_p2_q3;

// distortion
var dist_p1_q1;

// vars for saving stats
var kick_1_vol = 0.5;
var kick_2_vol = 0.5;
var clap_1_vol = 0.5;
var clap_2_vol = 0.5;
var hihat_1_vol = 0.5;
var hihat_2_vol = 0.5;

var kick_1_rate = 1;
var kick_2_rate = 1;
var clap_1_rate = 1;
var clap_2_rate = 1;
var hihat_1_rate = 1;
var hihat_2_rate = 1;

var kick_1_reverb = 0;
var kick_2_reverb = 0;
var clap_1_reverb = 0;
var clap_2_reverb = 0;
var hihat_1_reverb = 0;
var hihat_2_reverb = 0;

var kick_1_filter;
var kick_2_filter;
var clap_1_filter;
var clap_2_filter;
var hihat_1_filter;
var hihat_2_filter;

// wave vis
var analyzer;
var numSamples = 1024;
var samples = [];
var transp_color;

// visual circle
var amplitude;

// line effects
var line_color;
var stroke_width = 4;

var color_p1_q1 = 0;
var color_p2_q1 = 0;
var color_p1_q2 = 0;
var color_p2_q2 = 0;
var color_p1_q3 = 0;
var color_p2_q3 = 0;

var color_1 = 0;
var color_2 = 0;
var color_3 = 0;

// rectangle effects

var rect_color;

var rect_color_p1_q1 = 127;
var rect_color_p2_q1 = 127;
var rect_color_p1_q2 = 127;
var rect_color_p2_q2 = 127;
var rect_color_p1_q3 = 127;
var rect_color_p2_q3 = 127;

var rect_color_1 = 254;
var rect_color_2 = 254;
var rect_color_3 = 254;

// matching mechanic
var matching = 0;
var pan = 0;

// start/stop of prototype
var playing = 0;

function preload(){
  kick_1 = loadSound('assets/kick_1.wav');
  kick_2 = loadSound('assets/kick_2.wav');
  clap_1 = loadSound('assets/clap_1.wav');
  clap_2 = loadSound('assets/clap_2.wav');
  hihat_1 = loadSound('assets/hihat_1.wav');
  hihat_2 = loadSound('assets/hihat_2.wav');
}

function setup() {
  var canvas = createCanvas(600, 600); 
  canvas.parent('sketch-holder');

  background(100);
  
  // create knobs
  p1_1_knob = new MakeKnobC("red", 80, 100, 300, 0, 100, 50, 0,"Affective", [0,200,200], 18);
  p1_2_knob = new MakeKnobC("red", 80, 200, 300, 100, 1200, 100, 0,"Cognitive", [0,200,200], 18);
  p1_3_knob = new MakeKnobC("red", 80, 300, 300, 0, 100, 0, 0,"Commitment", [0,200,200], 18);
  p1_4_knob = new MakeKnobC("red", 80, 400, 300, 0, 127, 0, 0,"Mutuality", [0,200,200], 18);
  p1_5_knob = new MakeKnobC("red", 80, 500, 300, 0, 127, 127, 0,"Physical", [0,200,200], 18);
  
// create knobs
  p2_1_knob = new MakeKnobC("green", 80, 100, 470, 0, 100, 50, 0,"Affective", [0,200,200], 18);
  p2_2_knob = new MakeKnobC("green", 80, 200, 470, 100, 1200, 100, 0,"Cognitive", [0,200,200], 18);
  p2_3_knob = new MakeKnobC("green", 80, 300, 470, 0, 100, 0, 0,"Commitment", [0,200,200], 18);
  p2_4_knob = new MakeKnobC("green", 80, 400, 470, 0, 127, 0, 0,"Mutuality", [0,200,200], 18);
  p2_5_knob = new MakeKnobC("green", 80, 500, 470, 0, 127, 127, 0,"Physical", [0,200,200], 18);
  
  // start sound and init pan
  // kick_1.loop();
  // kick_2.loop();
  // clap_1.loop();
  // clap_2.loop();
  // hihat_1.loop();
  // hihat_2.loop();
  
  kick_1.pan(-0.7);
  kick_2.pan(0.7);
  clap_1.pan(-0.7);
  clap_2.pan(0.7);
  hihat_1.pan(-0.7);
  hihat_2.pan(0.7);
  
  // init values
  kick_1.setVolume(0.5);
  kick_2.setVolume(0.5);
  clap_1.setVolume(0.5);
  clap_2.setVolume(0.5);
  hihat_1.setVolume(0.5);
  hihat_2.setVolume(0.5);
  
  amplitude = new p5.Amplitude();
  
  // for filter, knob values are: 40 min, 1200 max, 100 default
  // filter
//   filter_p1_q1 = new p5.BandPass();
//   filter_p1_q1.process(kick_1);
//   kick_1.disconnect();
//   kick_1.connect(filter_p1_q1);
  
//   filter_p2_q1 = new p5.BandPass();
//   filter_p2_q1.process(kick_2);
//   kick_2.disconnect();
//   kick_2.connect(filter_p2_q1);
  
//   filter_p1_q2 = new p5.BandPass();
//   filter_p1_q2.process(clap_1);
//   clap_1.disconnect();
//   clap_1.connect(filter_p1_q2);
  
//   filter_p2_q2 = new p5.BandPass();
//   filter_p2_q2.process(clap_2);
//   clap_2.disconnect();
//   clap_2.connect(filter_p2_q2);
  
//   filter_p1_q3 = new p5.BandPass();
//   filter_p1_q3.process(hihat_1);
//   hihat_1.disconnect();
//   hihat_1.connect(filter_p1_q3);
  
//   filter_p2_q3 = new p5.BandPass();
//   filter_p2_q3.process(hihat_2);
//   hihat_2.disconnect();
//   hihat_2.connect(filter_p2_q3);
  
  // init values
  // filter_p1_q1.freq(50);
  // filter_p1_q2.freq(50);
  // filter_p1_q3.freq(50);
  // filter_p2_q1.freq(50);
  // filter_p2_q2.freq(50);
  // filter_p2_q3.freq(50);
  
  // distortion
  // dist_p1_q1 = new p5.Distortion(0);
  // dist_p1_q1.process(filter_p1_q1);
  
  
  // reverb
  reverb_p1_q1 = new p5.Reverb();
  reverb_p2_q1 = new p5.Reverb();
  
  reverb_p1_q1.process(kick_1, 5, 5);
  reverb_p2_q1.process(kick_2, 5, 5);
  
  reverb_p1_q1.amp(0);
  reverb_p2_q1.amp(0);
  
  reverb_p1_q2 = new p5.Reverb();
  reverb_p2_q2 = new p5.Reverb();
  
  reverb_p1_q2.process(clap_1, 5, 5);
  reverb_p2_q2.process(clap_2, 5, 5);
  
  reverb_p1_q2.amp(0);
  reverb_p2_q2.amp(0);
  
  reverb_p1_q3 = new p5.Reverb();
  reverb_p2_q3 = new p5.Reverb();
  reverb_p1_q3.process(hihat_1, 5, 5);
  reverb_p2_q3.process(hihat_2, 5, 5);
  
  reverb_p1_q3.amp(0);
  reverb_p2_q3.amp(0);
   
  // visual wave vis
  analyzer = new p5.FFT(0, numSamples);
  analyzer.setInput();
  transp_color = color(0, 0, 0, 0);
  line_color = color(color_1, color_2, color_3, 255);
  rect_color = color(rect_color_1, rect_color_2, rect_color_3, 255);
}

function draw() {
  background(0);
  
  // wave vis

  // get a buffer of 1024 samples over time.
  samples = analyzer.waveform();
  var bufLen = samples.length;
  
  fill(rect_color);
  stroke(0);
  rect(0,70,600,170);
  
  // panning
  pan = map(matching, 0, 15, 0, 1);
  kick_1.pan(-pan);
  kick_2.pan(pan);
  clap_1.pan(-pan);
  clap_2.pan(pan);
  hihat_1.pan(-pan);
  hihat_2.pan(pan);

  // draw snapshot of the samples
  fill(transp_color);
  stroke(line_color);
  strokeWeight(31 - 2 * matching);
  beginShape();
  for (var i = 0; i < bufLen; i++){
    var x = map(i, 0, bufLen, 0, width);
    var y = map(samples[i], -1, 1, -height/3, height/3);
    vertex(x, y + 150); // was height/2
  }
  endShape();

  // visually separating the users
  fill(30);
  stroke(255);
  strokeWeight(2);
  rect(50,250,500,150);
  rect(50,420,500,150);
  
  strokeWeight(5);
  textSize(28);
  text('User 1', 60, 260);
  text('User 2', 60, 430);
  
  // reset pen settings
  fill(0);
  stroke(0);
  strokeWeight(1);
  
  p1_1_knob.update();
  p1_2_knob.update();
  p1_3_knob.update();
  p1_4_knob.update();
  p1_5_knob.update();
  
  p2_1_knob.update();
  p2_2_knob.update();
  p2_3_knob.update();
  p2_4_knob.update();
  p2_5_knob.update();

  // previous button
  fill(255);
  rect(410,20,60,30);
  fill(0);
  textSize(32);
  text('<', 440, 45);
    
  // next button
  fill(255);
  rect(480,20,60,30);
  fill(0);
  textSize(32);
  text('>', 510, 45);

  // start button
  if (playing == 0) {
    fill(0, 255, 0);
  }
  else {
    fill(255, 0, 0);
  }
  rect(550,20,40,30);
  fill(0);
  strokeWeight(1);
  textSize(10);
  text('SOUND', 570, 40);
  
  // question styling setup
  fill(255);
  textSize(18);
  textAlign(LEFT);
  
  // question display and button show/hide logic
  if (question == 1) {
    text('Q1. Currently, to what extent do you care for each dimension in a romantic relationship?', 10, 15, 400, 70);
    fill(0);
    rect(410,20,60,30);
  }
  else if (question == 2) {
    text('Q2. How would you describe an impressive romantic relationship you\'ve had in the past?', 10, 15, 400, 70);  
  }
  else {
    text('Q3. In the future, what is your expectation for an ideal romantic relationship?', 10, 15, 400, 70); 
    fill(0);
    rect(480,20,60,30);
  }
  
  // circle visualisation, affected by sound
  // let level = amplitude.getLevel();
  // let size = map(level, 0, 1, 0, 400);
  // fill(255);
  // ellipse(300, 130, size, size);
  
  // SOUND TO KNOB EFFECTS -----------------
  // knobs affecting sound
  if (question == 1) {
    kick_1_vol = p1_1_knob.knobValue * 0.01;
    kick_2_vol = p2_1_knob.knobValue * 0.01;
    kick_1_rate = p1_2_knob.knobValue * 0.01;
    kick_2_rate = p2_2_knob.knobValue * 0.01;
    kick_1_reverb = p1_3_knob.knobValue * 0.01;
    kick_2_reverb = p2_3_knob.knobValue * 0.01;
    // kick_1_filter = p1_4_knob.knobValue;
    // kick_2_filter = p2_4_knob.knobValue;
    
    kick_1.setVolume(kick_1_vol);
    kick_2.setVolume(kick_2_vol);
    
    kick_1.rate(kick_1_rate);
    kick_2.rate(kick_2_rate);
    
    reverb_p1_q1.amp(kick_1_reverb);
    reverb_p2_q1.amp(kick_2_reverb);
    
//     filter_p1_q1.freq(kick_1_filter);
//     filter_p2_q1.freq(kick_2_filter);
    
//     dist_p1_q1.set(p1_5_knob.knobValue * 0.01);
    
    // knobs affecting visuals
    color_p1_q1 = p1_4_knob.knobValue;
    color_p2_q1 = p2_4_knob.knobValue;
    color_1 = color_p1_q1 + color_p2_q1;
    line_color = color(color_1, color_2, color_3, 255 - matching *14);
    
    rect_color_p1_q1 = p1_5_knob.knobValue;
    rect_color_p2_q1 = p2_5_knob.knobValue;
    rect_color_1 = rect_color_p1_q1 + rect_color_p2_q1;
    rect_color = color(rect_color_1, rect_color_2, rect_color_3, 255 - matching *14);
    
  }
  else if (question == 2) {
    clap_1_vol = p1_1_knob.knobValue * 0.01;
    clap_2_vol = p2_1_knob.knobValue * 0.01;
    clap_1_rate = p1_2_knob.knobValue * 0.01;
    clap_2_rate = p2_2_knob.knobValue * 0.01;
    clap_1_reverb = p1_3_knob.knobValue * 0.01;
    clap_2_reverb = p2_3_knob.knobValue * 0.01;
    // clap_1_filter = p1_4_knob.knobValue;
    // clap_2_filter = p2_4_knob.knobValue;
    
    clap_1.setVolume(clap_1_vol);
    clap_2.setVolume(clap_2_vol);
    
    clap_1.rate(clap_1_rate);
    clap_2.rate(clap_2_rate);
    
    reverb_p1_q2.amp(clap_1_reverb);
    reverb_p2_q2.amp(clap_2_reverb);
    
//     filter_p1_q2.freq(clap_1_filter);
//     filter_p2_q2.freq(clap_2_filter);
    
    // knobs affecting visuals
    color_p1_q2 = p1_4_knob.knobValue;
    color_p2_q2 = p2_4_knob.knobValue;
    color_2 = color_p1_q2 + color_p2_q2;
    line_color = color(color_1, color_2, color_3, 255 - matching *17);
    
    rect_color_p1_q2 = p1_5_knob.knobValue;
    rect_color_p2_q2 = p2_5_knob.knobValue;
    rect_color_2 = rect_color_p1_q2 + rect_color_p2_q2;
    rect_color = color(rect_color_1, rect_color_2, rect_color_3, 255 - matching *17); 

  }
  else if (question == 3) {
    hihat_1_vol = p1_1_knob.knobValue * 0.01;
    hihat_2_vol = p2_1_knob.knobValue * 0.01;
    hihat_1_rate = p1_2_knob.knobValue * 0.01;
    hihat_2_rate = p2_2_knob.knobValue * 0.01;
    hihat_1_reverb = p1_3_knob.knobValue * 0.01;
    hihat_2_reverb = p2_3_knob.knobValue * 0.01;
    // hihat_1_filter = p1_4_knob.knobValue;
    // hihat_2_filter = p2_4_knob.knobValue;
    
    hihat_1.setVolume(hihat_1_vol);
    hihat_2.setVolume(hihat_2_vol);
    
    hihat_1.rate(hihat_1_rate);
    hihat_2.rate(hihat_2_rate);
    
    reverb_p1_q3.amp(hihat_1_reverb);
    reverb_p2_q3.amp(hihat_2_reverb);
    
//     filter_p1_q3.freq(hihat_1_filter);
//     filter_p2_q3.freq(hihat_2_filter);
    
    // knobs affecting visuals
    color_p1_q3 = p1_4_knob.knobValue;
    color_p2_q3 = p2_4_knob.knobValue;
    color_3 = color_p1_q3 + color_p2_q3;
    line_color = color(color_1, color_2, color_3, 255 - matching *17);
    
    rect_color_p1_q3 = p1_5_knob.knobValue;
    rect_color_p2_q3 = p2_5_knob.knobValue;
    rect_color_3 = rect_color_p1_q3 + rect_color_p2_q3;
    rect_color = color(rect_color_1, rect_color_2, rect_color_3, 255 - matching *17); 
    
  }
  
  // matching mechanic, each has to be range 0-1
  matching = abs(kick_1_vol - kick_2_vol);
  matching += map(abs(kick_1_rate - kick_2_rate), 0, 11, 0, 1);
  matching += abs(kick_1_reverb - kick_2_reverb);
  matching += abs(clap_1_vol - clap_2_vol);
  matching += map(abs(clap_1_rate - clap_2_rate), 0, 11, 0, 1);
  matching += abs(clap_1_reverb - clap_2_reverb);
  matching += abs(hihat_1_vol - hihat_2_vol);
  matching += map(abs(hihat_1_rate - hihat_2_rate), 0, 11, 0, 1);
  matching += abs(hihat_1_reverb - hihat_2_reverb);
  matching += map(abs(color_p1_q1 - color_p2_q1), 0, 127, 0, 1);
  matching += map(abs(color_p1_q2 - color_p2_q2), 0, 127, 0, 1);
  matching += map(abs(color_p1_q3 - color_p2_q3), 0, 127, 0, 1);
    matching += map(abs(rect_color_p1_q1 - rect_color_p2_q1), 0, 127, 0, 1);
    matching += map(abs(rect_color_p1_q2 - rect_color_p2_q2), 0, 127, 0, 1);
    matching += map(abs(rect_color_p1_q3 - rect_color_p2_q3), 0, 127, 0, 1);
  // print(matching);
  

}

function mousePressed() { 
  p1_1_knob.active(); 
  p1_2_knob.active();
  p1_3_knob.active(); 
  p1_4_knob.active(); 
  p1_5_knob.active(); 
  
  p2_1_knob.active(); 
  p2_2_knob.active();
  p2_3_knob.active(); 
  p2_4_knob.active(); 
  p2_5_knob.active(); 
  
  // previous button clicked logic
  if (mouseX > 410 && mouseX < 470 && mouseY > 20 && mouseY < 50) {
    if (question == 2 || question == 3) {
      question -= 1;
    }
    
    if (question == 1) {
      
      p1_1_knob.reset(kick_1_vol * 100); 
      p2_1_knob.reset(kick_2_vol * 100); 
      p1_2_knob.reset(kick_1_rate * 100);
      p2_2_knob.reset(kick_2_rate * 100);
      p1_3_knob.reset(kick_1_reverb * 100);
      p2_3_knob.reset(kick_2_reverb * 100);
      
      p1_4_knob.reset(color_p1_q1);
      p2_4_knob.reset(color_p2_q1);
      p1_5_knob.reset(rect_color_p1_q1);
      p2_5_knob.reset(rect_color_p2_q1);
      
    }
    else if (question == 2) {
      
      p1_1_knob.reset(clap_1_vol * 100); 
      p2_1_knob.reset(clap_2_vol * 100); 
      p1_2_knob.reset(clap_1_rate * 100);
      p2_2_knob.reset(clap_2_rate * 100);
      p1_3_knob.reset(clap_1_reverb * 100);
      p2_3_knob.reset(clap_2_reverb * 100);
      
      p1_4_knob.reset(color_p1_q2);
      p2_4_knob.reset(color_p2_q2);
      p1_5_knob.reset(rect_color_p1_q2);
      p2_5_knob.reset(rect_color_p2_q2);

    }
    else if (question == 3) {
      
      p1_1_knob.reset(hihat_1_vol * 100); 
      p2_1_knob.reset(hihat_2_vol * 100); 
      p1_2_knob.reset(hihat_1_rate * 100);
      p2_2_knob.reset(hihat_2_rate * 100);
      p1_3_knob.reset(hihat_1_reverb * 100);
      p2_3_knob.reset(hihat_2_reverb * 100);
      
      p1_4_knob.reset(color_p1_q3);
      p2_4_knob.reset(color_p2_q3);
      p1_5_knob.reset(rect_color_p1_q3);
      p2_5_knob.reset(rect_color_p2_q3);
    }
    
  }   // next button clicked logic
  else if (mouseX > 480 && mouseX < 540 && mouseY > 20 && mouseY < 50) {
    if (question == 1 || question == 2) {
      question += 1;
    }
    
    // testing knob reset
    // this is a knob value, so needs to be re-multiplied
    if (question == 1) {
      
      p1_1_knob.reset(kick_1_vol * 100); 
      p2_1_knob.reset(kick_2_vol * 100); 
      p1_2_knob.reset(kick_1_rate * 100);
      p2_2_knob.reset(kick_2_rate * 100);
      p1_3_knob.reset(kick_1_reverb * 100);
      p2_3_knob.reset(kick_2_reverb * 100);
      
      p1_4_knob.reset(color_p1_q1);
      p2_4_knob.reset(color_p2_q1);
      p1_5_knob.reset(rect_color_p1_q1);
      p2_5_knob.reset(rect_color_p2_q1);
      
    }
    else if (question == 2) {
      
      p1_1_knob.reset(clap_1_vol * 100); 
      p2_1_knob.reset(clap_2_vol * 100); 
      p1_2_knob.reset(clap_1_rate * 100);
      p2_2_knob.reset(clap_2_rate * 100);
      p1_3_knob.reset(clap_1_reverb * 100);
      p2_3_knob.reset(clap_2_reverb * 100);
      
      p1_4_knob.reset(color_p1_q2);
      p2_4_knob.reset(color_p2_q2);
      p1_5_knob.reset(rect_color_p1_q2);
      p2_5_knob.reset(rect_color_p2_q2);

    }
    else if (question == 3) {
      
      p1_1_knob.reset(hihat_1_vol * 100); 
      p2_1_knob.reset(hihat_2_vol * 100); 
      p1_2_knob.reset(hihat_1_rate * 100);
      p2_2_knob.reset(hihat_2_rate * 100);
      p1_3_knob.reset(hihat_1_reverb * 100);
      p2_3_knob.reset(hihat_2_reverb * 100);
      
      p1_4_knob.reset(color_p1_q3);
      p2_4_knob.reset(color_p2_q3);
      p1_5_knob.reset(rect_color_p1_q3);
      p2_5_knob.reset(rect_color_p2_q3);
      
    }
    
  }

  // start/stop button logic
  else if ( mouseX > 550 && mouseX < 590 && mouseY > 20 && mouseY < 50) {
    playing = !playing;
    
    if (playing == 0) {
      kick_1.pause();
      kick_2.pause();
      clap_1.pause();
      clap_2.pause();
      hihat_1.pause();
      hihat_2.pause();
    }
    
    else {
      kick_1.loop();
      kick_2.loop();
      clap_1.loop();
      clap_2.loop();
      hihat_1.loop();
      hihat_2.loop();
    }
  }

}

function mouseReleased() {
  p1_1_knob.inactive();
  p1_2_knob.inactive();
  p1_3_knob.inactive();
  p1_4_knob.inactive();
  p1_5_knob.inactive();

}
