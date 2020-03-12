// source: https://www.reddit.com/r/processing/comments/28sx5s/kaleidoscope/

PImage img;
PImage img2;
int slices = 12;
float angle = PI/slices;
PShape mySlice;
PShape mySlice2;
float radius;
int alpha_fade = 150;

void setup() {
  size(1000, 500, P2D);                      

  radius = max(width, height)/2*0.9; // for size of viz
  mySlice = createShape(); 
  img = loadImage("Screenshot_1.png");
  img2 = loadImage("lips.jpg");
}

float offset = 0;
void draw() {
  background(0);
  offset+=PI/180;

  mySlice = createShape();
  mySlice.beginShape(TRIANGLE);
    mySlice.texture(img);
    mySlice.tint(#aaffaa, alpha_fade); // opacity
    mySlice.noStroke();
    mySlice.vertex(0, 0, img.width/2, img.height/2);
    mySlice.vertex(cos(angle)*radius, sin(angle)*radius, cos(angle+offset)*radius+img.width/2, sin(angle+offset)*radius+img.height/2);
    mySlice.vertex(cos(-angle)*radius, sin(-angle)*radius, cos(-angle+offset)*radius+img.width/2, sin(-angle+offset)*radius+img.height/2);
  mySlice.endShape();
  
  mySlice2 = createShape();
  mySlice2.beginShape(TRIANGLE);
    mySlice2.texture(img2);
    mySlice2.tint(#ff00aa, 255 - alpha_fade); // opacity
    mySlice2.noStroke();
    mySlice2.vertex(0, 0, img2.width/2, img2.height/2);
    mySlice2.vertex(cos(angle)*radius, sin(angle)*radius, cos(angle+offset)*radius+img2.width/2, sin(angle+offset)*radius+img2.height/2);
    mySlice2.vertex(cos(-angle)*radius, sin(-angle)*radius, cos(-angle+offset)*radius+img2.width/2, sin(-angle+offset)*radius+img2.height/2);
  mySlice2.endShape();

  translate(width/2, height/2);
  for (int i = 0; i < slices; i++) {
    rotate(angle*2);
    shape(mySlice);
    shape(mySlice2);
  }
}

void keyPressed() {
  if (key == 'q') {
    slices++;
    angle = PI/slices;
  } 
  if (key == 'a') {
    slices--;
    angle = PI/slices;
  }
  //if (key == 'w') {
  //  img = loadImage("Screenshot_1.png");
  //} 
  //if (key == 's') {
  //  img = loadImage("lips.jpg");
  //}
  if (key == 'e') {
    if (alpha_fade < 240) {
    alpha_fade+= 10;
    println(alpha_fade);
  }
  } 
  if (key == 'd') {
    if (alpha_fade > 10) {
    alpha_fade-= 10;
    println(alpha_fade);
  }
  } 
} 
