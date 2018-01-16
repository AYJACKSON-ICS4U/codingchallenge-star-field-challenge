Star[] stars = new Star [800];

float speed;

void settings() {
  size(400, 300);
  //createCanvas(windowWidth, windowHeight);
}

void setup() {
  
  for (int i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
};

void draw() {
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  for (int i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
};
