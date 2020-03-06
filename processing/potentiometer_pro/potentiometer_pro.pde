import processing.serial.*;
Serial get;
float background_color ;

void setup()
{
  size(500,500);
  get = new Serial(this, "COM3", 9600);
  get.bufferUntil('\n'); 
}

void draw()
{
  background(150,50,background_color);
}

void serialEvent (Serial get)
{
  background_color = float(get.readStringUntil('\n'));
  println(background_color);
}
