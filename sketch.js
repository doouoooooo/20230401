let points = [[0,0], [10,-10], [10,10],[20,20],[30,10],[20,10],[20,-10],[10,-20],[0,-10],[-10,-20],[-20,-10],[-30,-20],[-30,-10],[-20,0],[-10,-10]];
let sizeList = [20, 40, 60, 80, 100];
let scaleFactor = 1; // 初始縮放值

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(255);
  var clr1 = color("#d62828")
  var clr2 = color("#0096c7") 
  textSize(100); // 設定文字大小
  fill("#4a4e69"); // 設定文字顏色
  text("教育科技系", width/2, height/2); // 在中央位置繪製文字
  textAlign(CENTER, CENTER); // 將文字對齊方式設為中央對齊
  strokeWeight(5); //線條粗細
  translate(width/2, height/2);
  scale(scaleFactor); // 根據縮放值進行縮放
  scale(1, -1);//反轉畫面
  
  // 根據滑鼠 x 座標來決定縮放程度
  let factor = map(mouseX, 0, width, -0.5, 0.5);
  scaleFactor += factor;
  scaleFactor = constrain(scaleFactor, 0.5, 1.5); // 限制縮放值的範圍
  
  for (let i = 0; i < 5; i++) {
    push();
    let size = sizeList[i];
    scale(size/100);
    for (let j = 0; j < points.length-1; j++) {
      let clr = lerpColor(clr1, clr2, (j+0.5)/points.length);
      stroke(clr);
      line(points[j][0], points[j][1], points[j+1][0], points[j+1][1]);
    }
    let clr = lerpColor(clr1, clr2, (points.length-0.5)/points.length);
    stroke(clr);
    line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);
    pop();
  }
}