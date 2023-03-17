//function: 1
//  Use this function for get all input value
function getElementByValue(id){
    const inputValue = document.getElementById(id);
    const inputValueString =inputValue.value;
    const inputValueNumber = parseFloat(inputValueString);
    inputValue.value = '';
    return inputValueNumber;
}
// function: 2
// Use this function set the result of area calculation 
   let sumNumber = 0;
   let dot = ".";
    function createElement(name , value){
      const calculationArea = document.getElementById('container');
      const tr = document.createElement('tr');
      sumNumber++
       tr.innerHTML = `
       <td>${sumNumber}</td>
       <td>${dot}</td>
        <td>${name}</td>
        <td>${value}<span>cm <sup>2</sup></span> </td>
        <div class="text-white "><button class="bg-cyan-500 px-2  rounded">${'convart to '}<span>m <sup>2</sup></span></button></div>
        
        `;
        calculationArea.appendChild(tr);
    }

// get the triangle area result.

  document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleBase =getElementByValue('triangle-base');
    const triangleHight =getElementByValue('triangle-hight');

    // Trinagle input validation
    if (isNaN(triangleBase) || isNaN(triangleHight) || triangleBase<= 0 || triangleHight <= 0  ){
      alert('please input number type value');
      return ;
    }
    const triangleArea = (0.5 * triangleBase * triangleHight).toFixed(2);
    // set element in calculation area by this function.
    createElement('triangle', triangleArea);
})


// get the rectangle card area result
document.getElementById('rectangle-btn').addEventListener('click', function(){
  const rectangleWidth = getElementByValue('rectangle-width');
  const rectangleLength = getElementByValue('rectangle-length');

  // Rectangle input validation 
  if (isNaN(rectangleWidth) || isNaN(rectangleLength) || rectangleWidth <= 0 || rectangleLength <= 0  ){
    alert('please input number type value');
    return ;
  }
  const rectangleArea =(rectangleWidth * rectangleLength).toFixed(2) ;

  // set element in calculation area by this function.
  createElement('rectangle', rectangleArea);
})
// get the Parallelogram area and set the area calculation
document.getElementById('parallelogram-btn').addEventListener('click', function(){
  const parallelogramBase = getElementByValue('parallelogram-base');
  const parallelogramHeight = getElementByValue('parallelogram-height');
  // Parallelogram  input validation.
  if (isNaN(parallelogramBase ) || isNaN(parallelogramHeight) || parallelogramBase  <= 0 || parallelogramHeight<= 0  ){
    alert('please input number type value');
    return ;
  }
  const parallelogramArea = (parallelogramBase * parallelogramHeight).toFixed(2);
// set element in calculation area by this function.
  createElement('parallgram', parallelogramArea);
})
// get the Rhombus area and set the area calculation
document.getElementById('rhombus-btn').addEventListener('click', function(){
  const rhombusFirstDiagonal = getElementByValue('rhombus-first-diagonal');
  const rhombusSecondDiagonal = getElementByValue('rhombus-second-diagonal');
  // rhombus  input validation
  if (isNaN(rhombusFirstDiagonal ) || isNaN( rhombusSecondDiagonal) || rhombusFirstDiagonal <= 0 || rhombusSecondDiagonal<= 0  ){
    alert('please input number type value');
    return ;
  }
  const rhombusArea =( 0.5 * rhombusFirstDiagonal * rhombusSecondDiagonal).toFixed(2);
  // set element in calculation area by this function
  createElement('rhombus', rhombusArea);
})


// get the Pentagon area and set the area calculation
document.getElementById('pentagon-btn').addEventListener('click', function(){
  const pentagonPerimeter =getElementByValue('pentagon-perimeter');
  const pentagonApothem = getElementByValue('pentagon-apothem');
  // Pentagon input validation.
  if (isNaN(pentagonPerimeter ) || isNaN(pentagonApothem) || pentagonPerimeter  <= 0 || pentagonApothem<= 0  ){
    alert('please input number type value');
    return ;
  }
  const pentagonArea = (0.5 * pentagonPerimeter * pentagonApothem).toFixed(2);
    // set element in calculation area by this function
  createElement('pentagon', pentagonArea);
})


// get the Ellipse area and set the area calculation
document.getElementById('ellipse-btn').addEventListener('click', function(){
  const ellipseMajorAxis = getElementByValue('ellipse-major axis');
  const ellipseMinorAxis = getElementByValue('ellipse-minor axis');
  // Ellipse input validation..
  if (isNaN(ellipseMajorAxis ) || isNaN(ellipseMinorAxis) || ellipseMajorAxis  <= 0 || ellipseMinorAxis<= 0  ){
    alert('please input number type value');
    return ;
  }
  const ellipseArea =( 3.14 * ellipseMajorAxis * ellipseMinorAxis).toFixed(2);
  // set element in calculation area by this function
  createElement('ellipse', ellipseArea);
})

// Random color change for using this function .
function randomColor(id){
  const getCard = document.getElementById(id);
  const randomColor = Math.floor(Math.random()* 16777215).toString(16);
  getCard.style.backgroundColor = "#" + randomColor;
}

// Triangle card random bg color change for using function
document.getElementById('triangle-card').addEventListener('mouseenter', function(){
  randomColor('triangle-card')
})

// Rectangke card  random bg color change for using function
document.getElementById('rectangle-card').addEventListener('mouseenter', function(){
  randomColor('rectangle-card');
})

// Parallelogram card  random bg color change for using function
document.getElementById('parallelogram-card').addEventListener('mouseenter', function(){
  randomColor('parallelogram-card')
})

// Rhombus card  random bg color change for using function
document.getElementById('rhombus-card').addEventListener('mouseenter', function(){
  randomColor('rhombus-card')
})
// Pentagon card  random bg color change for using function
document.getElementById('pentagon-card').addEventListener('mouseenter', function(){
  randomColor('pentagon-card')
})

// Ellipse card  random bg color change for using function
document.getElementById('ellipse-card').addEventListener('mouseenter', function(){
  randomColor('ellipse-card')
})



