//this creates the base code for a star
class Star {
  //declaring var for x and y positions and z which is used for making the stars move to the edges of the canvas
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
    //sets previous z
    pz = z;
  }
}
void update() {
  //change star position once it has left the screen so that the field appears endless
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
  //sets the position of the ellipses
  float sx = map(x / z, 0, 1, 0, width);
  float sy = map(y / z, 0, 1, 0, height);
  
  noStroke();
  //make stars bigger as they approach the edge of the canvas
  float r = map(z, 0, width, 16, 0);
  ellipse(sx, sy, 8, 8);
  
  //set previous x and y positions so that we can draw a line from the star, creating a trail
  float px = map(x / pz, 0, 1, 0, width);
  float py = map(y / pz, 0, 1, 0, height);
  
  //draw line
  stroke(255);
  line(px, py, sx, sy);
}
