      /* Java Script Code for the Etch-A-Sketch game */

      let canvasSize = 960;
      let gridDim = 16;
      let boxWidth = canvasSize/gridDim;
      let boxHeight = canvasSize/gridDim;
      let boxColors= [];
      let colorCheck = false;
      console.log(boxWidth);
      console.log(boxHeight);

      const container = document.querySelector('#container');
      container.style.width = `${canvasSize}px`;
      resetBoxes();
      resetEventListener();
      boxEventListener();
      colorEventListener();

      function resetBoxes()
      {
        boxWidth = canvasSize/gridDim;
        boxHeight = canvasSize/gridDim;
         
        for (let i = 0; i < gridDim*gridDim; ++i)
        {
            const cell = document.createElement("div");
 /*           cell.className = "grid";*/
            cell.classList.add("grid");
            cell.id = i.toString();
            cell.style.height = `${boxHeight}px`;
            cell.style.width = `${boxWidth}px`;
            cell.style.backgroundcolor = "white";
            container.appendChild(cell);
            boxColors.push(128);
        }
    }

    function deleteBoxes(){
        const boxes = document.getElementsByClassName("grid");
        while(boxes[0])
        {
          boxes[0].parentNode.removeChild(boxes[0]);
        }
      }
      
      function changeColor(boxId) 
      {
          let box = document.getElementById(boxId);
          let red = 255;
          let green = 0;
          let blue = 0;

          if (colorCheck == false)
          {
            red = Math.floor(Math.random() * 255);
            green = Math.floor(Math.random() * 255);
            blue = Math.floor(Math.random() * 255);
          }
          else
          {
            boxColors[boxId] = boxColors[boxId] > 25 ? boxColors[boxId]-25 : 0;
            red = boxColors[boxId];
            green = boxColors[boxId];
            blue = boxColors[boxId];
          }

          let decColor =0x1000000+ blue + 0x100 * green + 0x10000 *red ;
  
          box.style.backgroundColor = '#'+decColor.toString(16).substr(1);
      }
  
    function resetEventListener()
    {
      const resetButton = document.getElementById("resetButton");
        resetButton.addEventListener("click", (e) => 
        {
            gridDim = prompt("Enter a new size: ");
            if (gridDim > 64)
            {
              alert ("Maximum size is 64!");
              gridDim = 64;
            }
            deleteBoxes();
            resetBoxes();
            boxEventListener();
        });
    }

    function boxEventListener() 
    {
        const boxes = document.querySelectorAll(".grid");
        boxes.forEach(box => 
        {
          boxColors[box.id] = 255;
          box.addEventListener("mouseover", (e) => 
          {
            changeColor(box.id);
          })
        });
    }

    function colorEventListener(){
        const colorToggle = document.getElementById("colorCheck");
        colorToggle.addEventListener("click", (e) => {
          colorCheck = colorToggle.checked;
        });
      }
      
      