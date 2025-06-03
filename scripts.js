function createGrid(w, h) {
  const container = document.querySelector(".container");
  const colNum = w;
  const rowNum = h;

  // use mouseover to allow delegation
  container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("col")) {
      event.target.style.backgroundColor = "black";
    }
  });

  container.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("col")) {
      event.target.style.backgroundColor = "gray";
    }
  });

  for (let i = 0; i < rowNum; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < colNum; j++) {
      const col = document.createElement("div");
      col.classList.add("col");
      row.appendChild(col);
    }

    container.appendChild(row);
  }
}

function clearGrid() {
  const grid = document.querySelector(".container");
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }
}

const resizeBtn = document.querySelector("#resize-btn");
resizeBtn.addEventListener("click", () => {
  let resize;
  let valid = false;
  do {
    resize = prompt("How many pixels per sides ?\nLess than 100 please..");

    if (resize > 0 && resize <= 100) {
      valid = true;
    }
  } while (!valid);

  console.log(`ok -> ${resize}`);
  clearGrid();
  createGrid(resize, resize);
});

createGrid(16, 16);
