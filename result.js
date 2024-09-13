let urlQueryParameters = new URLSearchParams(window.location.search);

const choices = ["a", "b", "c"];
const values = choices.map((name) => urlQueryParameters.get(name));
let largestValue = Math.max(...values);

choices
  .map((name) => document.getElementById(`choice-${name}`))
  .forEach(
    (column, index) =>
      (column.style = `height: ${(values[index] / largestValue) * 100}%;`)
  );
