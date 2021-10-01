$(function()
{    
    var action=false;
    var paint_erase="paint";
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    var container=$("#myBoard");
    var mouse={x:0,y:0};
    $("#mySlider").slider({
        min:3,
        max:30,
        step:1,
        value:3,
        slide:function(event,ui){
            $("#myColor").css({"width":ui.value,
                                "height":ui.value});
                                ctx.lineWidth=ui.value;
        }
    })
    /*Variable declaration */
    
    ctx.lineJoin="round";
    ctx.lineCap="round";
    ctx.lineWidth=3;
    $("#paintColor").change(function()
    {
       $("#myColor").css("background-color",$(this).val());
       ctx.strokeStyle=$("#paintColor").val();
    })

    container.mousedown(function(e)
    {
        action=true;
        ctx.beginPath();
            mouse.x=e.pageX-this.offsetLeft;
            mouse.y=e.pageY-this.offsetTop;
            ctx.moveTo(mouse.x,mouse.y);
        
    });

    container.mousemove(function(e)
    {
        if(action==true)
        {   mouse.x=e.pageX-this.offsetLeft;
            mouse.y=e.pageY-this.offsetTop;
            if(paint_erase=="paint")
            {
            // ctx.strokeStyle=$("#paintColor").val();
            }
            else{
                ctx.strokeStyle="white";
            }
            ctx.lineTo(mouse.x,mouse.y);
            ctx.stroke();
        }
        
    });
    container.mouseup(function()
    {
        action=false;
    });
})