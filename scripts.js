const container = document.querySelector(".container");
const rowNum = 16;
const colNum = 16;

for (let i = 0; i < rowNum; i++) {
  const row = document.createElement("div");

  for (let j = 0; j < colNum; j++) {
    const col = document.createElement("div");
    row.appendChild(col);
  }

  container.appendChild(row);
}
