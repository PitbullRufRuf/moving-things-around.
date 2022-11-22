var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");

hour = 0
bg_color = 'lightblue'

posX = 100;
posY = 100;

// visuals
function draw()
{
	// clears the screen
	context.clearRect(0, 0, 800, 900);
	context.beginPath();

	// draws the background
	context.fillStyle = bg_color;
	context.fillRect(0, 0, 800, 900);
	
	// draws the timer
	context.fillStyle = "black";
	context.font = "30px Arial";
	hour_round = Math.round(hour)
	context.fillText(hour_round, 30, 50);

	//draws the sun (fill and stroke)
	context.fillStyle ="yellow";
	context.arc(posX, 100, 50, 0, Math.PI*2);

	context.strokeStyle = "black";
	context.lineWidth = 5;
	context.arc(posX, 100, 50, 0, Math.PI*2);
	context.stroke();

	context.fill();
}

// logics
function update()
{
	hour = hour + 0.5;
	posX = posX + 0.4;
	if (hour > 10)
	{
		bg_color = 'orange';
	}

	if (hour > 100 && hour < 200)
	{
		bg_color = 'red';
	}

	if (hour > 200 && hour < 300)
	{
		bg_color = 'lightblue'
	}

	if (hour > 300 && hour < 400)
	{
		bg_color = 'purple'
	}

	if (hour > 400 && hour < 500)
	{
		bg_color = 'pink'
	}

	if (hour > 500)
	{
		hour = 0;
		posX = 0;
	}

	posX = posX + 0.4;

	draw();
	setTimeout(update,10);
}

update();