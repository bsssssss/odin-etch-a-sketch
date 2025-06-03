function createGrid(w, h) {
  const container = document.querySelector(".container");
  const colNum = w;
  const rowNum = h;

  for (let i = 0; i < rowNum; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < colNum; j++) {
      const col = document.createElement("div");
      col.classList.add("col");

      col.addEventListener("mouseenter", (event) => {
        col.style.backgroundColor = "black";
      });

      col.addEventListener("mouseleave", (event) => {
        col.style.backgroundColor = "gray";
      });

      row.appendChild(col);
    }

    container.appendChild(row);
  }
}

createGrid(16, 16);
