let sizeOfTree = 120;
let angle = 2 / 11;
let ratio = 0.75;

function setup() {
  createCanvas(600, 600);
  angle *= PI;
}

function Build_Tree(x1, y1, x2, y2, lvl, c) {
  if (lvl < 11) {
    lvl++;
    c *= ratio;

    let v_r = createVector(x2 - x1, y2 - y1);
    let v_l = createVector(x2 - x1, y2 - y1);

    v_r.normalize();
    v_l.normalize();
    v_r.mult(c);
    v_l.mult(c);
    v_r.rotate(angle);
    v_l.rotate(-angle);

    let n_r = createVector(x2, y2);
    let n_l = createVector(x2, y2);
    n_r.add(v_r);
    n_l.add(v_l);
    stroke(
      noise(lvl) * 255,
      noise(lvl + 10000) * 255,
      noise(lvl + 20000) * 255
    );
    line(x2, y2, n_r.x, n_r.y);
    line(x2, y2, n_l.x, n_l.y);
    Build_Tree(x2, y2, n_r.x, n_r.y, lvl, c);
    Build_Tree(x2, y2, n_l.x, n_l.y, lvl, c);
  }
}

function draw() {
  background(0);
  stroke(noise(0) * 255, noise(10000) * 255, noise(20000) * 255);
  line(width / 2, height, width / 2, height - sizeOfTree);
  Build_Tree(width / 2, height, width / 2, height - sizeOfTree, 0, sizeOfTree);
}
