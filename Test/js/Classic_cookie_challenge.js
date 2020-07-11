// Create a new empty array
var rows, cols, a, z, length;
var chocoLine = [[], []];
function c3Input() {
  rows = 3; // prompt("Enter numbe of rows");
  cols = 3; //prompt("Enter numbe of columns");
  a = Array(rows)
    .fill()
    .map(() => Array(cols));
  length = 0;

  // get inputs of the array
  for (var i = 0; i < rows; i++) {
    for (j = 0; j < cols; j++) {
      a[i][j] = parseInt(
        prompt(`Enter value of the[${i}][${j}]th Element`, "1 0r 0"),
        2
      );
    }
  }
  z = Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));
  console.table(a);
  console.table(z);
  runC3();
}
function runC3() {
  checkChocos();
  function checkAdjacentH(i, j) {
    console.log("Inside checkAdjacentH i= " + i + " j= " + j);
    z[i][j] = 1;
    length = +1;
    while (a[i][j] == 1) {
      if (i < rows && j < cols - 1) {
        if (a[i][j + 1] == 1 && z[i][j + 1] == 0) {
          j = j + 1;
          checkAdjacentH(i, j);
        } else {
          
          break;
        }
      } else {
        console.log("Inside checkAdjacentH if clause i= " + i + " j= " + j);
      
        break;
      }
    }
    console.log("Inside checkAdjacentH after while i= " + i + " j= " + j);
    return [i, j, length];
  }
  function checkAdjacentV(i, j) {
    console.log("Inside checkAdjacentV i= " + i + " j= " + j);
    z[i][j] = 1;
    length = +1;
    while ((a[i][j] == 1) && (z[i ][j] == 0)) {
      if (i < rows - 1 && j < cols) {
        if (a[i + 1][j] == 1 && z[i + 1][j] == 0) {
          i = i + 1;
          checkAdjacentV(i, j);
        } else {
          return [i, j, length];
        }
      } else {
        return [i, j, length];
      }
    }
  }
  function findChocoStart() {
    length = 0;
    for (i = 0; i < rows; i++) {
      for (j = 0; j < cols; j++) {
        if (z[i][j] == 0 && a[i][j] == 1) {
          return [i, j];
        }
      }
    }
  }
  function checkChocos() {
    while (findChocoStart()) {
      var startP = findChocoStart();
      console.log(
        `After findChocoStart i= ${startP[0]} j= ${startP[1]} length =${length}`
      );
      if (typeof startP !== "undefined") {
        var endH = checkAdjacentH(startP[0], startP[1]);
        console.log(
          `After checkAdjacentH i= ${endH[0]} j= ${endH[1]} length =${length}`
        );
        var endV = checkAdjacentV(endH[0], endH[1]);
        console.log(
          `After checkAdjacentV i= ${endV[0]} j= ${endV[1]} length =${length}`
        );
        var endP = [endV[0], endV[1]];
        console.log(startP, endP, endV[2]);
        chocoLine.push(startP, endP, endV[2]);
      }
      console.table(a);
      console.table(z);
    }
    console.log("number of choco line =" + chocoLine.length);
    console.log(chocoLine);
  }
}
