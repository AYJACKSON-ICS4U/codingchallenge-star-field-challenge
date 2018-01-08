class Star {
  float x;
  float y;
  float z;

  float px;
  float py;

  Star(){
    x = random (-width, width);
    y = random(-height, height);
    z = random(width);
  }
}
void update() {
  z=z-speed;
  if(z<1) {
    z = width;
  }
}

void show() {
  fill(255);

float sx = map(x / z, 0, 1, 0, width);
float sy = map(y / z, 0, 1, 0, height);

  
  noStroke();
  float r = map(z, 0, width, 16, 0);
  ellipse(sx, sy, 8, 8);
  stroke(255);
  line(px, py, sx, sy);

  px = sx;
  py = sy;
}
