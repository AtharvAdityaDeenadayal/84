canvas=document.getElementById('myCanvas');

ctx=canvas.getContext("2d");

nasa_images_array=["I.jpg","II.jpg","III.jpg"];
random_number=Math.floor(Math.random()*3);

rover_width=80;
rover_height=70;

background_image=nasa_images_array[random_number];


rover_image="rover.png";

rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    if (keyPressed=='38'){
        up();
    }
    if (keyPressed=='40'){
        down();
    }
    if (keyPressed=='37'){
        left();
    }
    if (keyPressed=='39'){
        right();
    }
}

function up(){
    if (rover_y>=0) {
        rover_y=rover_y-10;
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if (rover_y<=500) {
        rover_y=rover_y+10;
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if (rover_x>=0) {
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if (rover_x<=700) {
        rover_x=rover_x+10;
        uploadBackground();
        uploadrover();
    }
}