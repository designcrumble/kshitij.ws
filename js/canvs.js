// Grab canvas element from DOM
var canvas = document.getElementById('canvas'),
	 // Pass in 2d context
	 ctx = canvas.getContext('2d');

// Canvas doesnt work well off %. Elements are not rendered correctly. Add width & height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a empty array for the shapes to be added to
var shapes = [],
	 // Array of colors to be used to color in the shapes	 
	 colors = ['#6c3cf2', '#ff005a', '#00ff96', '#9000ff'],
	 // Generate random number of shapes to be added to the canvas
	 totalShapes = Math.floor(Math.random() * (5)) + 20;
	 // Store the center of the canvas
var centerX = canvas.width/2,
	 centerY = canvas.height/2;


// Inner radius circles will animate to this point/circumference
var innerRadius = 50;

// Work out size of innder circle
var r = innerRadius+25+Math.random()*160;

// Loop out the amount of circles we need
for (var i = 0; i < totalShapes; i++) {
	
		 // Grab random number between 0 & 1
	var p = Math.random(),
		 // These work out where to plot circle on inner radius
		 x = centerX + innerRadius * Math.cos(2 * Math.PI * p),
		 y = centerY + innerRadius * Math.sin(2 * Math.PI * p),
		 radius = Math.floor(Math.random() * 35) + 2,
		 shapeType = 'circle';
	
	// Create a shape & if its a circle pass in (x, y, radius of circle, random color)
	if (i > 50) {
		shapeType = 'circle';
	}
	
	var shape = new Shape(shapeType,x,y,radius,colors[Math.floor(i%colors.length)]);


	// Setup points where circle will animate from & to
	// Current x pos (needed so animation can return to this position)
	shape.innerX = x;
	// Extended x pos
   shape.outerX = centerX + r * Math.cos(2 * Math.PI * p);
	// Current y pos
   shape.innerY = y;
	// Extended y pos
   shape.outerY = centerY + r * Math.sin(2 * Math.PI * p);
	// Radius
	shape.radius = radius;
	// Push circle to circles array
	shapes.push(shape);
}

// Shape Object
function Shape(shapeType, x, y, rad, color) {
	
	// Store refernce to the shape
	var _this = this;
	
	// Constructor
	// Reference to values we will use
	_this.x = x || null;
	_this.y = y || null;
	_this.radius = rad || null;
	_this.color = color || null;
		
	// Draw circle
	this.draw = function(ctx) {
		
		// Check to see we have all of thr values(if not throw a error)
		if(!_this.x || !_this.y || !_this.radius || !_this.color) {
			console.error('Circle requires an x, y, radius and color');
			return; 
		}
		
		// Start drawing path
		ctx.beginPath();
		 // Draw a arc/circle (center x, center y, radius, start angle, PI * 2)
		if (shapeType === 'circle') {
			ctx.arc(_this.x, _this.y, _this.radius, 0, 2 * Math.PI, false);
		} else {
			ctx.rect(_this.x, _this.y, 10, 10);
		}

		// Set fill color
		ctx.fillStyle = _this.color;
		// Add fill
		ctx.fill();
		
	};
	
}

// Animation loop
function loop() {
	
	// Clear canvas for redrawing, else elements drawin on top of each other/overlap
	ctx.clearRect(0,0,canvas.width, canvas.height);
  	
	// Loop over circles array and draw circle
	for(var i = 0; i < shapes.length; i++) {
   	shapes[i].draw(ctx);
  	}
 	
	// Start request animation frame, recall function
	requestAnimationFrame(loop);
}

// Init loop
loop();

// Tween the circles
for (var i = 0; i < shapes.length; i++) {
	tweenShape(shapes[i]);
}

function tweenShape(shape, newCenter) {
	
	// Change position shapes animate to
	if (newCenter) {
		shape.outerX = newCenter.x;
		shape.outerY = newCenter.y;
	}
	
	// Using Greensock tween shape at random speed
	TweenLite.to(shape, 0.5 + Math.random(), {
		x: shape.outerX,  
		y: shape.outerY,
		radius: shape.radius,
		ease: Cubic.easeInOut,
		onComplete: function() {

			// Tween back to oringal position
			TweenLite.to(shape, 0.5 + Math.random(), {
				x: shape.innerX,
				y: shape.innerY,
				ease: Cubic.easeInOut,
				// Change size of shape to random size
				radius: Math.floor(Math.random() * 12) + 2,
				onComplete: function() {
					// Restart it once shape has animated to & from
					tweenShape(shape);
				}
			})
		}
	});
}



// Get mouse current positon on canvas
function getMousePosition(e) {
	// Get canvas details
	var rect = canvas.getBoundingClientRect();
	return {
		// Minus x pos from top left to work out where it is
		x: parseInt((e.x - rect.left)),
		y: parseInt((e.y - rect.top))
	};
}

canvas.addEventListener('click', function(e) {
	
	// Get mouse position
	var newCenter = getMousePosition(e);
	
	for (var i = 0; i < shapes.length; i++) {
		tweenShape(shapes[i], newCenter);
	}

}, false);
