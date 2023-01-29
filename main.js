canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
greenCarWidth = 75;
greenCarHeight = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greenCarX = 5;
greenCarY = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage;
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greenCarX, greenCarY, greenCarWidth, greenCarHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greenCarY >= 0) 
	{ greenCarY = greenCarY - 10; 
	console.log("x = ", greenCarX, "y = ", greenCarY); 
	uploadBackground(); 
	uploadgreencar();
}}

function down()
{
	if (greenCarY <=800) { greenCarY = greenCarY + 10; 
	console.log("x = ", greenCarX, "y = ", greenCarY); 
	uploadBackground(); 
	uploadgreencar();
}}

function left()
{
	if (greenCarX >=0) { greenCarX = greenCarX - 10; 
	console.log("x = ", greenCarX, "y = ", greenCarY); 
	uploadBackground(); 
	uploadgreencar();
}}

function right()
{
	if (greenCarX <=800) { greenCarX = greenCarX + 10; 
		console.log("x = ", greenCarX, "y = ", greenCarY); 
		uploadBackground(); 
		uploadgreencar();
}}
