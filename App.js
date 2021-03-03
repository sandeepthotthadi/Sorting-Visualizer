import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}
// Change this value for the speed of the animations.
let ANIMATION_SPEED_MS = 7;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS = 90;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'rgba(66, 134, 244, 0.8)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'rgb(255, 0, 0)';

let width = 5;

var algo_buttons = document.querySelectorAll(".algo button")
var generate = document.querySelector(".button")
var range = document.querySelector(".range")

function randomIntFromIntervals(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function getMergeSortAnimations(array){
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}
function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}
function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

function disable_button(){
  for(let i=0;i>algo_buttons.length;i++){
     algo_buttons[i].classList=[];
    algo_buttons.classList.add("lock_buttons");
    algo_buttons[i].disabled = true;
    generate.disabled = true;
    range.disabled = true;
  }
 }

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array:[],
    };
  }
  componentDidMount() {
    this.resetArray();
  }
      resetArray() {
        let number = 100;
        let min = 490;
        let max = 100
        var slider = document.getElementById('range');
        var output = document.getElementById('value');
         output.innerHTML = slider.value;
          slider.oninput = function() {
          output.innerHTML = this.value;
          }
          if(slider.value == 1){
            number = 4;
            min = 5;
            max = 200;
            width = 15;
            ANIMATION_SPEED_MS = 120;
         }else if(output.innerHTML == 2){
           number = 6;
           min = 5;
           max = 200;
           width = 15;
           ANIMATION_SPEED_MS = 100;
         }else if(output.innerHTML == 3){
          number = 8;
          min = 5;
          max = 200;
          width = 15;
          ANIMATION_SPEED_MS = 90;
        }else if(output.innerHTML == 4){
          number = 10;
          min = 5;
          max = 200;
          width = 15;
          ANIMATION_SPEED_MS = 80;
        }else if(output.innerHTML == 5){
          number = 12;
          min = 5;
          max = 250;
          width = 14;
          ANIMATION_SPEED_MS = 60;
        }else if(output.innerHTML == 6){
          number = 14;
          min = 5;
          max = 250;
          width = 14;
          ANIMATION_SPEED_MS = 60;
        }else if(output.innerHTML == 7){
          number = 16;
          min = 5;
          max = 250;
          width = 14;
          ANIMATION_SPEED_MS = 50;
        }else if(output.innerHTML == 8){
          number = 18;
          min = 5;
          max = 250;
          width = 14;
          ANIMATION_SPEED_MS = 50;
        }else if(output.innerHTML == 9){
          number = 20;
          min = 5;
          max = 250;
          width = 13;
          ANIMATION_SPEED_MS = 50;
        }else if(output.innerHTML == 10){
          number = 22;
          min = 5;
          max = 290;
          width = 13;
          ANIMATION_SPEED_MS = 50;
        }else if(output.innerHTML == 11){
          number = 24;
          min = 5;
          max = 290;
          width = 13;
          ANIMATION_SPEED_MS = 40;
        }else if(output.innerHTML == 12){
          number = 26;
          min = 5;
          max = 290;
          width = 13;
          ANIMATION_SPEED_MS = 40;
        }else if(output.innerHTML == 13){
          number = 28;
          min = 5;
          max = 250;
          width = 13;
          ANIMATION_SPEED_MS = 40;
        }else if(output.innerHTML == 14){
          number = 30;
          min = 5;
          max = 260;
          width = 12;
          ANIMATION_SPEED_MS = 40;
        }else if(output.innerHTML == 15){
          number = 32;
          min = 5;
          max = 270;
          width = 12;
          ANIMATION_SPEED_MS = 45;
        }else if(output.innerHTML == 16){
          number = 32;
          min = 5;
          max = 280;
          width = 12;
          ANIMATION_SPEED_MS = 45;
        }else if(output.innerHTML == 17){
          number = 34;
          min = 5;
          max = 290;
          width = 12;
          ANIMATION_SPEED_MS = 45;
        }else if(output.innerHTML == 18){
          number = 36;
          min = 5;
          max = 300;
          width = 13;
          ANIMATION_SPEED_MS = 30;
        }else if(output.innerHTML == 19){
          number = 37;
          min = 5;
          max = 310;
          width = 11;
          ANIMATION_SPEED_MS = 30;
        }else if(output.innerHTML == 20){
          number = 38;
          min = 5;
          max = 320;
          width = 11;
          ANIMATION_SPEED_MS = 30;
        }else if(output.innerHTML == 21){
          number = 38;
          min = 5;
          max = 330;
          width = 10;
          ANIMATION_SPEED_MS = 35;
        }else if(output.innerHTML == 22){
          number = 40;
          min = 5;
          max = 330;
          width = 10;
          ANIMATION_SPEED_MS = 32;
        }else if(output.innerHTML == 23){
          number = 40;
          min = 5;
          max = 340;
          width = 10;
          ANIMATION_SPEED_MS = 31;
        }else if(output.innerHTML == 24){
          number = 42;
          min = 5;
          max = 360;
          width = 11;
          ANIMATION_SPEED_MS = 30;
        }else if(output.innerHTML == 25){
          number = 44;
          min = 5;
          max = 370;
          width = 9;
          ANIMATION_SPEED_MS = 27;
        }else if(output.innerHTML == 26){
          number = 46;
          min = 5;
          max = 380;
          width = 9;
          ANIMATION_SPEED_MS = 25;
        }else if(output.innerHTML == 27){
          number = 48;
          min = 5;
          max = 390;
          width = 8;
          ANIMATION_SPEED_MS = 22;
        }else if(output.innerHTML == 28){
          number = 50;
          min = 5;
          max = 300;
          width = 8;
          ANIMATION_SPEED_MS = 20;
        }else if(output.innerHTML == 29){
          number = 52;
          min = 5;
          max = 310;
          width = 8;
          ANIMATION_SPEED_MS = 20;
        }else if(output.innerHTML == 30){
          number = 54;
          min = 5;
          max = 320;
          width = 7;
          ANIMATION_SPEED_MS = 15;
        }else if(output.innerHTML == 31){
          number = 56;
          min = 5;
          max = 330;
          width = 7;
          ANIMATION_SPEED_MS = 20;
        }else if(output.innerHTML == 32){
          number = 58;
          min = 5;
          max = 340;
          width = 7;
          ANIMATION_SPEED_MS = 19;
        }else if(output.innerHTML == 33){
          number = 60;
          min = 5;
          max = 350;
          width = 7;
          ANIMATION_SPEED_MS = 19;
        }else if(output.innerHTML == 34){
          number = 62;
          min = 5;
          max = 360;
          width = 7;
          ANIMATION_SPEED_MS = 18;
        }else if(output.innerHTML == 35){
          number = 64;
          min = 5;
          max = 370;
          width = 7;
          ANIMATION_SPEED_MS = 17;
        }else if(output.innerHTML == 36){
          number = 66;
          min = 5;
          max = 380;
          width = 7;
          ANIMATION_SPEED_MS = 16;
        }else if(output.innerHTML == 37){
          number = 68;
          min = 5;
          max = 390;
          width = 6;
          ANIMATION_SPEED_MS = 15;
        }else if(output.innerHTML == 38){
          number = 70;
          min = 5;
          max = 400;
          width = 6;
          ANIMATION_SPEED_MS = 14;
        }else if(output.innerHTML == 39){
          number = 72;
          min = 5;
          max = 410;
          width = 6;
          ANIMATION_SPEED_MS = 13;
        }else if(output.innerHTML == 40){
          number = 74;
          min = 5;
          max = 410;
          width = 6;
          ANIMATION_SPEED_MS = 12;
        }else if(output.innerHTML == 41){
          number = 76;
          min = 5;
          max = 420;
          width = 5;
          ANIMATION_SPEED_MS = 11;
        }else if(output.innerHTML == 42){
          number = 78;
          min = 4;
          max = 430;
          width = 5;
          ANIMATION_SPEED_MS = 10;
        }else if(output.innerHTML == 43){
          number = 80;
          min = 5;
          max = 440;
          width = 5;
          ANIMATION_SPEED_MS = 9;
        }else if(output.innerHTML == 44){
          number = 82;
          min = 5;
          max = 450;
          width = 5;
          ANIMATION_SPEED_MS = 8;
        }else if(output.innerHTML == 45){
          number = 84;
          min = 5;
          max = 450;
          width = 5;
          ANIMATION_SPEED_MS = 7;
        }else if(output.innerHTML == 46){
          number = 86;
          min = 5;
          max = 460;
          width = 5;
          ANIMATION_SPEED_MS = 6;
        }else if(output.innerHTML == 47){
          number = 88;
          min = 5;
          max = 490;
          width = 4;
          ANIMATION_SPEED_MS = 5;
        }else if(output.innerHTML == 48){
          number = 90;
          min = 5;
          max = 490;
          width = 4;
          ANIMATION_SPEED_MS = 4;
        }else if(output.innerHTML == 49){
          number = 92;
          min = 5;
          max = 490;
          width = 4;
          ANIMATION_SPEED_MS = 4;
        }else if(output.innerHTML == 50){
          number = 94;
          min = 5;
          max = 490;
          width = 4;
          ANIMATION_SPEED_MS = 3;
        }
       let array = [];
          for (let i = 0; i < number; i++) {
            array.push(randomIntFromIntervals(min, max));
            console.log(array[i]);
          }
          this.setState({array});     
  }
  mergeSort() {
     disable_button()
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;

          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }


range(){
  let number = 100;
  let min = 490;
  let max = 100
 var slider = document.getElementById('range');
 var output = document.getElementById('value');
   output.innerHTML = slider.value;
    slider.oninput = function() {
    output.innerHTML = this.value;
  }
  if(slider.value == 1){
    number = 4;
    min = 5;
    max = 200;
    width = 15;
    ANIMATION_SPEED_MS = 120;
 }else if(slider.value == 2){
   number = 6;
   min = 5;
   max = 200;
   width = 15;
   ANIMATION_SPEED_MS = 100;
 }else if(output.innerHTML == 3){
  number = 8;
  min = 5;
  max = 200;
  width = 15;
  ANIMATION_SPEED_MS = 90;
}else if(output.innerHTML == 4){
  number = 10;
  min = 5;
  max = 200;
  width = 15;
  ANIMATION_SPEED_MS = 80;
}else if(output.innerHTML == 5){
  number = 12;
  min = 5;
  max = 250;
  width = 14;
  ANIMATION_SPEED_MS = 60;
}else if(output.innerHTML == 6){
  number = 14;
  min = 5;
  max = 250;
  width = 14;
  ANIMATION_SPEED_MS = 60;
}else if(output.innerHTML == 7){
  number = 16;
  min = 5;
  max = 250;
  width = 14;
  ANIMATION_SPEED_MS = 50;
}else if(output.innerHTML == 8){
  number = 18;
  min = 5;
  max = 250;
  width = 14;
  ANIMATION_SPEED_MS = 50;
}else if(output.innerHTML == 9){
  number = 20;
  min = 5;
  max = 250;
  width = 13;
  ANIMATION_SPEED_MS = 50;
}else if(output.innerHTML == 10){
  number = 22;
  min = 5;
  max = 290;
  width = 13;
  ANIMATION_SPEED_MS = 50;


}else if(output.innerHTML == 11){
  number = 24;
  min = 5;
  max = 290;
  width = 13;
  ANIMATION_SPEED_MS = 40;
}else if(output.innerHTML == 12){
  number = 26;
  min = 5;
  max = 290;
  width = 13;
  ANIMATION_SPEED_MS = 40;
}else if(output.innerHTML == 13){
  number = 28;
  min = 5;
  max = 250;
  width = 13;
  ANIMATION_SPEED_MS = 40;
}else if(output.innerHTML == 14){
  number = 30;
  min = 5;
  max = 260;
  width = 12;
  ANIMATION_SPEED_MS = 40;
}else if(output.innerHTML == 15){
  number = 32;
  min = 5;
  max = 270;
  width = 12;
  ANIMATION_SPEED_MS = 45;
}else if(output.innerHTML == 16){
  number = 32;
  min = 5;
  max = 280;
  width = 12;
  ANIMATION_SPEED_MS = 45;
}else if(output.innerHTML == 17){
  number = 34;
  min = 5;
  max = 290;
  width = 12;
  ANIMATION_SPEED_MS = 45;
}else if(output.innerHTML == 18){
  number = 36;
  min = 5;
  max = 300;
  width = 13;
  ANIMATION_SPEED_MS = 30;
}else if(output.innerHTML == 19){
  number = 37;
  min = 5;
  max = 310;
  width = 11;
  ANIMATION_SPEED_MS = 30;
}else if(output.innerHTML == 20){
  number = 38;
  min = 5;
  max = 320;
  width = 11;
  ANIMATION_SPEED_MS = 30;
}else if(output.innerHTML == 21){
  number = 38;
  min = 5;
  max = 330;
  width = 10;
  ANIMATION_SPEED_MS = 35;
}else if(output.innerHTML == 22){
  number = 40;
  min = 5;
  max = 330;
  width = 10;
  ANIMATION_SPEED_MS = 32;
}else if(output.innerHTML == 23){
  number = 40;
  min = 5;
  max = 340;
  width = 10;
  ANIMATION_SPEED_MS = 31;
}else if(output.innerHTML == 24){
  number = 42;
  min = 5;
  max = 360;
  width = 11;
  ANIMATION_SPEED_MS = 30;
}else if(output.innerHTML == 25){
  number = 44;
  min = 5;
  max = 370;
  width = 9;
  ANIMATION_SPEED_MS = 27;
}else if(output.innerHTML == 26){
  number = 46;
  min = 5;
  max = 380;
  width = 9;
  ANIMATION_SPEED_MS = 25;
}else if(output.innerHTML == 27){
  number = 48;
  min = 5;
  max = 390;
  width = 8;
  ANIMATION_SPEED_MS = 22;
}else if(output.innerHTML == 28){
  number = 50;
  min = 5;
  max = 300;
  width = 8;
  ANIMATION_SPEED_MS = 20;
}else if(output.innerHTML == 29){
  number = 52;
  min = 5;
  max = 310;
  width = 8;
  ANIMATION_SPEED_MS = 20;
}else if(output.innerHTML == 30){
  number = 54;
  min = 5;
  max = 320;
  width = 7;
  ANIMATION_SPEED_MS = 15;


}else if(output.innerHTML == 31){
  number = 56;
  min = 5;
  max = 330;
  width = 7;
  ANIMATION_SPEED_MS = 20;
}else if(output.innerHTML == 32){
  number = 58;
  min = 5;
  max = 340;
  width = 7;
  ANIMATION_SPEED_MS = 19;
}else if(output.innerHTML == 33){
  number = 60;
  min = 5;
  max = 350;
  width = 7;
  ANIMATION_SPEED_MS = 19;
}else if(output.innerHTML == 34){
  number = 62;
  min = 5;
  max = 360;
  width = 7;
  ANIMATION_SPEED_MS = 18;
}else if(output.innerHTML == 35){
  number = 64;
  min = 5;
  max = 370;
  width = 7;
  ANIMATION_SPEED_MS = 17;
}else if(output.innerHTML == 36){
  number = 66;
  min = 5;
  max = 380;
  width = 7;
  ANIMATION_SPEED_MS = 16;
}else if(output.innerHTML == 37){
  number = 68;
  min = 5;
  max = 390;
  width = 6;
  ANIMATION_SPEED_MS = 15;
}else if(output.innerHTML == 38){
  number = 70;
  min = 5;
  max = 400;
  width = 6;
  ANIMATION_SPEED_MS = 14;
}else if(output.innerHTML == 39){
  number = 72;
  min = 5;
  max = 410;
  width = 6;
  ANIMATION_SPEED_MS = 13;
}else if(output.innerHTML == 40){
  number = 74;
  min = 5;
  max = 410;
  width = 6;
  ANIMATION_SPEED_MS = 12;
}else if(output.innerHTML == 41){
  number = 76;
  min = 5;
  max = 420;
  width = 5;
  ANIMATION_SPEED_MS = 11;
}else if(output.innerHTML == 42){
  number = 78;
  min = 4;
  max = 430;
  width = 5;
  ANIMATION_SPEED_MS = 10;
}else if(output.innerHTML == 43){
  number = 80;
  min = 5;
  max = 440;
  width = 5;
  ANIMATION_SPEED_MS = 9;
}else if(output.innerHTML == 44){
  number = 82;
  min = 5;
  max = 450;
  width = 5;
  ANIMATION_SPEED_MS = 8;
}else if(output.innerHTML == 45){
  number = 84;
  min = 5;
  max = 450;
  width = 5;
  ANIMATION_SPEED_MS = 7;
}else if(output.innerHTML == 46){
  number = 86;
  min = 5;
  max = 460;
  width = 5;
  ANIMATION_SPEED_MS = 6;
}else if(output.innerHTML == 47){
  number = 88;
  min = 5;
  max = 490;
  width = 4;
  ANIMATION_SPEED_MS = 5;
}else if(output.innerHTML == 48){
  number = 90;
  min = 5;
  max = 490;
  width = 4;
  ANIMATION_SPEED_MS = 4;
}else if(output.innerHTML == 49){
  number = 92;
  min = 5;
  max = 490;
  width = 4;
  ANIMATION_SPEED_MS = 4;
}else if(output.innerHTML == 50){
  number = 94;
  min = 5;
  max = 490;
  width = 4;
  ANIMATION_SPEED_MS = 3;
}

  let array = []
  for (let i = 0; i < number; i++) {
    array.push(randomIntFromIntervals(min, max));
  }
  this.setState({array});
}



  render() {
    const {array} = this.state;   
    return (
 
        <div className="header">

      
          <header>
      <div className='text'>
      
        <ul>
          <h3>
            <div className="algo">
            <li><div className="button" id="button" href onClick={() => this.resetArray()}>Generate New Array</div></li>
            <li><div className="buttons">Change Array Size and Sorting Speed : </div></li>
            <li><input type="range" className="range" id="range" min="1" max="50" onClick={() => this.range()}></input></li>
            <li> <span id="value"></span> </li>
            <li><div className="button" id="button2" href onClick={() => this.mergeSort()}>Merge Sort</div></li>
            <li> <span id="time"></span> </li>
            </div>

          
  </h3>
  </ul>
  </div>


   </header>

   <center>
         <div className="array-container">
        
 
        {array.map((value) => (
          <div className="array-bar"
          
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
              width,
              
            }}>
              
                .

            </div>
        ))}

      </div>
      </center>
      </div>
    );
 

  }
}








