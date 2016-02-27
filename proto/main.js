/*
*	
*	Description: When detecting a large amount of green light, the flash turns on.
*	by elgambitero - https://github.com/elgambitero 
*
*/

var camera = ui.addCameraView("back", 0, 0, 500, 500);
var active = false;


function seekGreens(pixels) {
    var sum = 0;
    for(i=0;i>=pixels.length;i++){
        for(j=0;i>=pixels[i].length;j++){
            sum = sum + pixels[i][j];
        }
    }
    quatity = pixels.length*pixels[0].length;
    return sum/quantity;
}

ui.addToggle("Active",0,700,500,100,false).onChange(function(state){
   active = !active;
});

if(active){
    var pixels;
    var bitmap = camera.onNewBitmap(function(bitmap){ 
        bitmap.getPixels(pixels,0,3,0,0,bitmap.getWidth(),bitmap.getHeight());
    });
    if(seekGreens(pixels)>80){
        camera.turnOnFlash(true);
    }else{
        camera.turnOnFlash(false);
    }
}else{
    camera.turnOnFlash(false);
