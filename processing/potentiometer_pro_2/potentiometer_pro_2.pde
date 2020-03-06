import processing.serial.*;
Serial get;
float background_color ;

void setup()
{
  size(500,500);
  get = new Serial(this, "COM3", 9600);
  get.bufferUntil('\n'); 
  print("started processing sketch");
}

void draw()
{
  background(150,50,background_color);
}

void serialEvent (Serial get)
{
  //background_color = float(get.readStringUntil('\n'));
  //print(get.readStringUntil('\n'));
  String value = get.readStringUntil('\n');
  if (value.charAt(0) == 'A') {
    println("A VALUE!");
  }
  if(value.charAt(0) == 'B') {
    println("B VALUE!");
  }
    
}
