function Star(){
    this.x = random(-width/2,width/2);
    this.y = random(-height/2,height/2);
    this.z = random(width/2);
    this.pz = this.z;


    this.update=function (speed){
      this.z = this.z-speed;
      if (this.z<1){
    this.z= width;
    this.x = random(-width/2, width/2);
    this.y = random(-height/2,height/2);
    this.pz = this.z;
    }
  }

  this.show = function(){
    fill(255);
    this.sx = map(this.x/this.z,0,1,0,width/2);
    this.sy = map(this.y/this.z,0,1,0,height/2);
    noStroke();
    this.r = map (this.z,0,width/216,0);
    ellipse(this.sx,this.sy,this.r,this.r);
    this.px = map (this.x/this.pz,0,1,0,width/2);
    this.py = map(this.y/this.pz,0, 1, 0, height/2);
    this.pz =this.z ;
    stroke(255);
    line( this.px,this.py,this.sx,this.sy);
  }
}
