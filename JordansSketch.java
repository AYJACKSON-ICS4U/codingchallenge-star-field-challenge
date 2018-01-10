class Star {
  //declare var for position and movement
  float x;
  float y;
  float z;
  //declare var for previous z
  float pz;

  Star(){
    //set initial position and z
    x = random (-width, width);
    y = random(-height, height);
    z = random(width);
    pz = z;
  }
  
  void update() {
    //decrease z
    z = z - speed;
    //once star is off the canvas, declare new positions
    if(z < 1) {
      z = width;
      x = random(-width, width);
      y = random(-height, height);
      x = random(-mouseX, mouseX);
      y = random(-mouseY, mouseY);
      pz = z;
    }
  }
  
  void show() {
    float sx = map(x / z, 0, 1, 0, width);
    float sy = map(y / z, 0, 1, 0, height);
    
    //set colour depending on mouse position
    //light blue
    if (mouseX < width/3) {
      int colour1 = 255-mouseX*2;
       fill(colour1, 255, 255);
       stroke(colour1, 255, 255);
    }
    //yellow
    else if (mouseX > width/3 && mouseX < (width/3)*2) {
      int colour2 = 255-mouseX;
      fill(255, 255, colour2);
      stroke(255, 255, colour2);
    }
    //red/pink
    else {
      int colour3 = 255-mouseX;
      fill(255, colour3, 255);
      stroke(255, colour3, 255);
    }

    //noStroke();
    
    //have size increase the closer the ellipse goes to the edge of the canvas
    float r = map(z, 0, width, 8, 0);
    ellipse(sx, sy, r, r);
    
    //set variables for the position of the line
    float px = map(x / pz, 0, 1, 0, width);
    float py = map(y / pz, 0, 1, 0, height);
    
    //draw line
    //stroke(255);
    line(px, py, sx, sy);
  }
}
