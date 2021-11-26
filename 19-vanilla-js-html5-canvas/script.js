/*
! SOME NOTES
* https://mothereffinghsl.com/ -> This website helps to visual like HSL (hue, saturation, and lightness) (aka rainbow)
* There are different type of 'canvas rendering context' which can give different effects so you can google about it if you want
*/

/*
TODO step 1: Default settings before working with the canvas
*/
// get the canvas from component tree
const canvas = document.getElementById("draw-area");

// get context of canvas
const ctx = canvas.getContext("2d");

/*
TODO step 2: Setting attributes for the canvas
*/
// change width and height of the canvas to be full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*
TODO step 3: Setting attributes for the canvas' context
*/
// brush color
ctx.strokeStyle = "#BADA55";
// brush type
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;

/*
TODO step 4: Setting variables to manipulate the brush / the drawing action
*/
// boolean to keep track of the drawing action
let isDrawing = false;
// keep track of the last position of the brush
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

/*
TODO step 6: Implememnt the method to render the drawings on the canvas
*/
const painter = (e) => {
  // if the mouse is not clicked and dragged, do nothing
  if (!isDrawing) return;
  console.log(e);

  // create drawing line
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // begin render the line
  ctx.beginPath();
  // starting from here, create a line to...
  ctx.moveTo(lastX, lastY);
  // ... to here
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  /*
  TODO Step 6.1: move last X and last Y to last destination X and Y wherever mouse moves to recoordinate the starting location of the brush
  */
  [lastX, lastY] = [e.offsetX, e.offsetY];

  /*
  TODO Step 6.2: create rainbow effect using hsl()
  */
  // increment hue to change color -> create rainbow effect
  hue++;
  // if the color has finshed the whole color palette, r
  // reset the hue to not get the number to be too big
  if (hue >= 360) hue = 0;

  /*
  TODO Step 6.3: change the brush width, while drawing
  */
  // flip the direction of the line width goes too big or too small as defined
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) direction = !direction;
  // change the width of the brush
  if (direction) ctx.lineWidth++;
  else ctx.lineWidth--;
};

/*
TODO step 5: binding events with the canvas and the brush (the mouse)
*/
// only when the user click and drag, that the canvas shows something
canvas.addEventListener("mousedown", (e) => {
  // set mode as it is drawing
  isDrawing = true;
  // recoordinate the starting point of the mouse before dragging
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", painter);
// only when the user click and drag, otherwise, ignore
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
