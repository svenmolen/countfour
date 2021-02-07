let modelId = [];
let player = true;
const colorForWin = [];
const greenArray = [];
const redArray = [];

//display table with eventlistener-functionality
onload = () => {
  const tableT = document.createElement("table");
  for (let i = 1; i < 7; i++) {
    const tableRow = tableT.insertRow();
    for (let j = 1; j < 8; j++) {
      const idNum = i + "" + j;
      modelId.push(idNum);
      const tableData = tableRow.insertCell();
      tableData.id = idNum;
      tableData.className = "startstyle";
      tableData.addEventListener("click", () => {
        const element = document.getElementById(idNum);
        getButtomElement(element);
      });
    }
  }
  document.getElementById("tableToPlay").appendChild(tableT);
};

console.log(modelId);

// when clicked on a row, find Id of lowest free spot
function getButtomElement(element) {
  const rowCollum = Array.from(element.id.toString());
  for (let i = 6; i >= 1; i--) {
    const idCheck = i + "" + rowCollum[1];
    if (modelId.includes(idCheck)) {
      //if the lowest row is available.
      modelId.splice(modelId.indexOf(idCheck), 1);
      playTurn(idCheck);
      break;
    }
  }
}

// players Turn -color field + push to color-array
function playTurn(idCheck) {
  if (player == true) {
    color = "red";
    redArray.push(idCheck);
    player = false;
    const newElement = document.getElementById(idCheck);
    newElement.style.backgroundColor = color;
    //newElement.classList.add(color);
    checkForWin(redArray);
  } else {
    color = "green";
    greenArray.push(idCheck);
    player = true;
    const newElement = document.getElementById(idCheck);
    newElement.style.backgroundColor = color;
    //newElement.classList.add(color);
    checkForWin(greenArray);
  }
}

//checking if either Red or Green have won
function checkForWin(anArray) {
  rowLoop: for (let s = 1; s <= 6; s++) {
    for (let r = 1; r <= 7; r++) {
      let number = s + "" + r;
      let row2 = parseInt(number) + 1;
      let row3 = parseInt(number) + 2;
      let row4 = parseInt(number) + 3;
      let col2 = parseInt(number) + 10;
      let col3 = parseInt(number) + 20;
      let col4 = parseInt(number) + 30;
      let dia2 = parseInt(number) + 11;
      let dia3 = parseInt(number) + 22;
      let dia4 = parseInt(number) + 33;
      let rdia2= parseInt(number) + 9;
      let rdia3= parseInt(number) + 18;
      let rdia4= parseInt(number) + 27;

      if (
        (anArray.includes(number) &&
          anArray.includes(row2.toString()) &&
          anArray.includes(row3.toString()) &&
          anArray.includes(row4.toString())) ||
        (anArray.includes(number) &&
          anArray.includes(col2.toString()) &&
          anArray.includes(col3.toString()) &&
          anArray.includes(col4.toString())) ||
        (anArray.includes(number) &&
          anArray.includes(dia2.toString()) &&
          anArray.includes(dia3.toString()) &&
          anArray.includes(dia4.toString()))||
          (anArray.includes(number) &&
            anArray.includes(rdia2.toString()) &&
            anArray.includes(rdia3.toString()) &&
            anArray.includes(rdia4.toString()))
      ) {
        console.log("het werkt");
        document.getElementById('textoutput').innerHTML = '4 op een rij!!';
        modelId = [];
        
            document.getElementById('button').setAttribute("class","visible")
       
        break rowLoop;
      }
    }
  }
}

//rowWin

//collumWin

//diagonalWin

document.getElementById("button").addEventListener("click", ()=> location.reload());
  