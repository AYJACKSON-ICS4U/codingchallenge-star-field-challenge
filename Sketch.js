//create 800 stars
Star[] stars = new Star [800];

//declare speed variable
float speed;
void setup() {
  //set canvas size
  size(800, 800);
  for (int i = 0; i < stars.length; i++){
    stars[i] = new Star();
  }
}
void draw() {
  //map the speed so that it changes with the mouse position
  speed = map(mouseX, 0, width, 0, 20);
  //make background black
  background(0, 0, 0);
  //move stars to center of canvas
  translate(width/2, height/2);
  //call functions for each star in array
  for (int i = 0; i < stars.length; i++){
    stars[i] = update();
    stars[i].show();
  }
}
