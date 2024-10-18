let userInput = document.querySelector("#user-input");
const resizeBtn = document.querySelector("#resize-btn");
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

resizeBtn.addEventListener("click", () => {
  let width = userInput.value;
  width = Number(width);
  userInput.value = "";
  createScreen(width);
});

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
          item.style.backgroundColor = "#2cdcf3da";
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

function changeColor(params) {}
