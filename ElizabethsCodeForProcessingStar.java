class Star {
  float x;
  float y;
  float z;
  float pz;
  
  Star() {
    x = random(-width, width);
    y = random(-height, height);
    z = random(width);
    pz = z;
  }
  
  void update(){
    z = z - speed;
    if (z < 1) {
      z = width;
      x = random(-width, width);
      y = random(-height, height);
      pz = z;
    }
  };

  void show() {
    fill(255);
    noStroke();

    float sx = map(this.x / this.z, 0, 1, 0, width);
    float sy = map(this.y / this.z, 0, 1, 0, height);


   float hue = (200 + this.x)/2; //hue on a blue scale
   float hue2 = (200 + this.x)*2; //controls opacity
   if (this.x<200) //if less than 200 (left side)
   {
     fill(hue, 255, 255, -hue+200);
   }
   else //if more than 200 (right side)
   {
     fill(hue, 255, 255, hue2-200);
   }

    noStroke(); //star shape
    beginShape();
    vertex(sx+7, sy+39);
    vertex(sx-8, sy+11);
    vertex(sx-27, sy+32);
    vertex(sx-20, sy+6);
    vertex(sx-47, sy+4);
    vertex(sx-21, sy-6);
    vertex(sx-47, sy-29);
    vertex(sx-13, sy-16);
    vertex(sx-15, sy-43);
    vertex(sx-4, sy-20);
    vertex(sx+20, sy-36);
    vertex(sx+7, sy-14);
    vertex(sx+36, sy-12);
    vertex(sx+12, sy-2);
    vertex(sx+29, sy+13);
    vertex(sx+4, sy+9);
    endShape(CLOSE);


    float px = map(this.x / this.pz, 0, 1, 0, width);
    float py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;


    noStroke();
    line(px, py, sx, sy);

  }
};
