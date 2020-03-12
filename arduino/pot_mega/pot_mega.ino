    int pot_1 = A0;
    int pot_2 = A1;
    int output_1;
    int output_2;
 
    void setup()
    {
      Serial.begin(9600);
    }
    void loop()
    {
      output_1 = analogRead(pot_1);
      output_2 = analogRead(pot_2);
      int new_output_1 = map(output_1, 0, 1023, 0, 100);
      int new_output_2 = map(output_2, 0, 1023, 0, 100);
      Serial.println("A" + String(new_output_1));
      Serial.println("B" + String(new_output_2));
      delay(200);
    }
