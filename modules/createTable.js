export function createTable(tableData) {
  const table = document.createElement("table");
  table.classList.add("table");
  let row = {};
  let cell = {};

  tableData.forEach(rowData => {
    row = table.insertRow(-1);
    rowData.forEach(cellData => {
      cell = row.insertCell();
      cell.textContent = cellData;
    });
  });
  return table;
}
