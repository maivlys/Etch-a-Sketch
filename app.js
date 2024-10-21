const screenContainer = document.querySelector("#screen");

const blackColor = document.querySelector("#black");
const whiteColor = document.querySelector("#white");
const rgbColor = document.querySelector("#rgb");
const eraser = document.querySelector("#eraser");
const resetBtn = document.querySelector("#resetBtn");

blackColor.addEventListener("click", () => draw("black"));
whiteColor.addEventListener("click", () => draw("white"));
rgbColor.addEventListener("click", () => draw("rgb"));
eraser.addEventListener("click", () => draw("eraser"));
resetBtn.addEventListener("click", () => {
  let cellsNodeList = document.querySelectorAll(".dynamic-div");
  cellsNodeList.forEach((item) => {
    item.style.backgroundColor = "#ffffff8c";
  });
  draw("black");
});

window.onload = () => {
  createScreen(60);
};

function createScreen(width) {
  while (screenContainer.hasChildNodes()) {
    screenContainer.removeChild(screenContainer.firstChild);
  }

  for (let i = 0; i < width * width; i++) {
    const div = document.createElement("div");
    div.classList.add("dynamic-div");
    screenContainer.appendChild(div);
  }
  screenContainer.style.gridTemplateColumns = `repeat(${width}, auto)`;

  draw("black");
}

function draw(color) {
  let cellsNodeList = document.querySelectorAll(".dynamic-div");
  cellsNodeList.forEach((item) => {
    item.addEventListener("mousemove", () => {
      switch (color) {
        case "black":
          item.style.backgroundColor = "#0000009c";
          // 0000009c
          break;
        case "white":
          item.style.backgroundColor = "#ffffffe1";
          break;
        case "rgb":
          item.style.backgroundColor = randomColor();
          break;
        case "eraser":
          item.style.backgroundColor = "#ffffff8c";
          break;

        default:
          item.style.backgroundColor = "#0000009c";
          break;
      }
    });
  });
}

function randomColor() {
  let randomNo = Math.floor(Math.random() * 4 + 1);
  switch (randomNo) {
    case 1:
      return "#7A93F0";
    case 2:
      return "#7AF08C";
    case 3:
      return "#F07A96";
    case 4:
      return "#F0D17A";

    default:
      "#595E70";
  }
}
