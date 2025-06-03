function getRandomRgb() {
  let values = [0, 0, 0];
  for (let i in values) {
    values[i] = Math.floor(Math.random() * 255);
  }
  return values;
}

function IncrOpacity(count) {
  return Math.max(0, Math.min(1, (count + 1) / 10));
}

function createGrid(w, h) {
  const container = document.querySelector(".container");
  const colNum = w;
  const rowNum = h;

  container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("col")) {
      let currentCount = parseInt(event.target.dataset.hoverCount || "0");
      let rgb = getRandomRgb();
      let opacity = IncrOpacity(currentCount);

      currentCount++;
      event.target.dataset.hoverCount = currentCount;

      event.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
      event.target.style.opacity = opacity;
    }
  });

  container.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("col")) {
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
