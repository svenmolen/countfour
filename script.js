const modelId = [];

onload = () => {
  const tableT = document.createElement("table");
      for (let i = 1; i < 7; i++) {
    const tableRow = tableT.insertRow();
        for (let j = 1; j < 8; j++) {
      const idNum = i + "" + j;
      modelId.push(idNum);
      const tableData = tableRow.insertCell();
      tableData.id = idNum;
      tableData.className = 'startstyle'
      tableData.addEventListener('click',()=>{
        const element = document.getElementById(idNum);
        element.style.backgroundColor = 'red';
        speelbeurt();
    });
;
      
          }
  }
  document.getElementById("tableToPlay").appendChild(tableT);
}

console.log(modelId);


function speelbeurt(){
    console.log('het werkt')
}

