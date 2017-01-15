function CanvasSupported(){
  var elem = document.createElement('canvas');
  return !!(elem.getContext && elem.getContext('2d'));
}

function ES6Supported(){
  try {
    new Function("(a = 0) => a");
    return true;
  }
  catch (err) {
    return false;
  }
};

function NotMobile(){
  if(window.innerWidth <= 1000 && window.innerHeight <= 1000) {
     return false;
   } else {
     return true;
   }
}

if (CanvasSupported() && ES6Supported() && NotMobile()){

(function Glitch() {

//Initialize variables
var container = {},
    canvas = {},
    cubes = {coord: []},
    tris = {count: 0, list: []},
    mouse = {},
    ctx,
    date,
    manual = false,
    maxWin;

//Constructor for Triangles
function Tri(i, x, y) {
  //Unique indentifier
  this.i = i;

  //State of the Tri
  this.even = i % 2 == 0;
  this.active = false;
  this.opacity = 1;

  //Coordinates of angles
  //Starting wit 90 degree
  this.x = x;
  this.y = y;

  //Other two Coordinates
  //depend on if the hypotenuse
  //is up or down
  if (this.even) {
    // Coord to the right
    this.a = x + cubes.dimension;
    this.b = y;
    // Coord to the bottom
    this.m = x;
    this.n = y + cubes.dimension;
  } else {
    // Coord to the left
    this.a = x - cubes.dimension;
    this.b = y;
    // Coord to the top
    this.m = x;
    this.n = y - cubes.dimension;
  }
}

//Helper function to reset Tri and activate it
Tri.prototype.activate = function () {
  this.active = true;
  this.opacity = 1;
}

function setDimensions() {
  //Pick the higher of width and height
  maxWin = Math.max(window.innerHeight, window.innerWidth);
  //Determine the size of the cubes
  cubes.dimension = maxWin / 30;
  //Set the number of rows and columns
  cubes.rows = cubes.cols = (maxWin / cubes.dimension);
  //Determine the number of cubes
  cubes.count = cubes.rows * cubes.cols;
  //Set the size of the canvas element
  canvas.dimension = cubes.dimension * cubes.rows;
}

function initialize() {
  var winHeight = window.innerHeight;
  var navHeight = document.getElementById('nav-wrapper').scrollHeight;

  //Init canvas
  container.self = document.getElementById('canvas-container');
  container.self.style.height = winHeight - navHeight + "px";
  container.self.style.width = "100vw";
  canvas.self = document.createElement('canvas');
  ctx = canvas.self.getContext('2d');

  //Set canvas size
  canvas.self.width = canvas.self.height = canvas.dimension;

  //Interate over cubes and create two tris each
  for (var i = 0; i < cubes.count; i++) {
    //Top tri
    cubes.coord[0] = cubes.dimension * (i % cubes.cols);
    cubes.coord[1] = Math.floor(i / cubes.cols) * cubes.dimension;
    tris.list.push(new Tri(tris.count++, ...cubes.coord));

    //Bottom tri
    cubes.coord[0] += cubes.dimension;
    cubes.coord[1] += cubes.dimension;
    tris.list.push(new Tri(tris.count++, ...cubes.coord));
  }

  container.self.appendChild(canvas.self);

  //Add mousemove to container
  container.self.addEventListener('mousemove', function(e) {
    if (!manual) {
      //Change to manual mode when mouse moves
      manual = true;
      var popup = document.getElementById('canvas-popup');
      popup.style.opacity = "1";
    }

    //Determine where mouse is
    canvas.bounds = canvas.self.getBoundingClientRect();
    mouse.x = e.clientX - canvas.bounds.left;
    mouse.y = e.clientY - canvas.bounds.top;
  });
}

//Do this each frame
function step() {
  tris.list.forEach((tri) => {
    //Draw the trangles
    ctx.beginPath();
    ctx.moveTo(tri.x, tri.y);
    ctx.lineTo(tri.a, tri.b);
    ctx.lineTo(tri.m, tri.n);

    //If in manual mode
    if (manual) {
      //If mouse pointer is in triangle path activate tri
      if (ctx.isPointInPath(mouse.x, mouse.y)) {
        tri.activate()
      }
    }
    //If in auto mode
    else {
      //Semi-randomly grab tris and activate them
      date = new Date();
      date = date.getMilliseconds();
      if (date > 2 && tri.i % date == 0) {
        tri.activate();
      }
    }

    //Deactive tri when it's faded out
    if (tri.opacity <= 0.04) {
      tri.active = false;
    }

    //If try is active
    if (tri.active) {
      //Clear pixels so they can be redrawn at different opacity
      ctx.clearRect(tri.x, tri.y, cubes.dimension, cubes.dimension);

      //Randomly change colors
      if (date % tri.i == 42) {
        //Green
        ctx.fillStyle = `rgba(94,121,42,${tri.opacity})`;
      } else if (date % tri.i == 87) {
        //Purple
        ctx.fillStyle = `rgba(121,43,94,${tri.opacity})`;
      } else {
        //But default to blue
        ctx.fillStyle = `rgba(43,94,121,${tri.opacity})`;
      }

      //Start fading out
      tri.opacity -= 0.001;

      //Fill tri
      ctx.fill();
    } else {
      //Set deactive tris to white so they don't pop up later
      ctx.fillStyle = 'white';
      //This needs to be here or tris don't fade properly
      ctx.fillRect(tri.x, tri.y, cubes.dimension, cubes.dimension);
    }
  });

  //Request next frame
  window.requestAnimationFrame(step);
}

//Start the program
setDimensions();
initialize();
window.requestAnimationFrame(step);

})();

}
