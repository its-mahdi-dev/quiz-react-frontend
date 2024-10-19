let tables = document.getElementsByClassName("able-search");
for (let i = 0; i < tables.length; i++) {
  let table = tables[i];
  let inputId = table.dataset.input;
  let index = table.dataset.index;
  let input = document.getElementById(inputId);
  input.onkeyup = () => {
    let tableTr = table
      .getElementsByTagName("tbody")[0]
      .getElementsByTagName("tr");
    for (let j = 0; j < tableTr.length; j++) {
      let tr = tableTr[j];
      let td = tr.getElementsByTagName("td")[Number(index)];
      if (td.textContent.includes(input.value)) tr.classList.remove("hidden");
      else tr.classList.add("hidden");
    }
  };
}
