canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var last_position_of_y, last_position_of_x;
color="red";
width_of_line=3;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent= "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e)
{
mouseEvent="mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent= "mouseUp";
}

canvas.addEventListener("mymousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientY - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if (mouseEvent== "mouseDown"){

        ctx.beginPath()
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;
    
        console.log("Last position of X and last position of Y coordinates =");
        console.log("X =" + last_position_of_x + "Y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
    
        console.log("Current position of X and last position of Y coordinates =");
        console.log("X =" + current_position_of_mouse_x + "Y =" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); 
        ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
}
