    int potentiometer_pin = A0;
    int output;
    void setup()
    {
      Serial.begin(9600);
    }
    void loop()
    {
      output = analogRead(potentiometer_pin);
      int new_output = map(output, 0, 1023, 0, 100);
      Serial.println(new_output);
      delay(50);
    }
