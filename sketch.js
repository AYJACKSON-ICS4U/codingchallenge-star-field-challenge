//this creates the base code for a star
class Star {
  //declaring var for x and y positions and z
  float x;
  float y;
  float z;
  //previous z
  float pz;

  Star(){
    //sets random x and y positions and z
    x = random (-width, width);
    y = random(-height, height);
    z = random(width);
    //sets px and py to the new x and y positions
    pz = z;
  }
}
void update() {
  //change star position once it has left the screen so that the field appears endlesss
  z=z-speed;
  if(z<1) {
    z = width;
    x = random(-width, width);
    y = random(-height, height);
    pz = z;
  }
}

void show() {
  //white stars
  fill(255);
  
  float sx = map(x / z, 0, 1, 0, width);
  float sy = map(y / z, 0, 1, 0, height);
  
  noStroke();
  float r = map(z, 0, width, 16, 0);
  ellipse(sx, sy, 8, 8);

  float px = map(x / pz, 0, 1, 0, width);
  float py = map(y / pz, 0, 1, 0, height);
  //float psx = map(x / z, 0, 1, 0, width);
  //float psy = map(y / z, 0, 1, 0, height);

  stroke(255);
  line(px, py, sx, sy);

  //px = x;
  //py = y;
}
