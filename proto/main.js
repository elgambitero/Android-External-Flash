/*
*	
*	Description: When detecting a large amount of green light, the flash turns on.
*	by elgambitero - https://github.com/elgambitero 
*
*/

var camera = ui.addCameraView("back", 0, 0, 500, 500);
var active = false;
//var a = java.lang.reflect.Array.newInstance(java.lang.String, );

function seekGreens(pixels) {
    var sum = 0;
    for(i=0;i>=pixels.length;i++){
        for(j=0;i>=pixels[i].length;j++){
            sum = sum + Color.green(pixels[i][j]);
        }
    }
    quantity = pixels.length*pixels[0].length;
    result = sum/quantity;
    return result;
    
}

ui.addToggle("Active",0,700,500,100,false).onChange(function(state){
   active = !active;
});

ui.addButton("Test", 0, 800, 500, 100).onClick(function() { 
    
    camera.onNewBitmap(function(bitmap){ 
        var pixel = 0;//java.lang.reflect.Array.newInstance(int, [bitmap.getWidth(),bitmap.getHeight()]);
        pixel = bitmap.getPixel(0,0);
        console.log('Value is: ' + pixel);
        /*
        if(seekGreens(pixels)>80){
            camera.turnOnFlash(true);
        }else{
            camera.turnOnFlash(false);
            
        }
        */
    });
});

/*
if(active){
    var pixels;
    camera.onNewBitmap(function(bitmap){ 
        bitmap.getPixels(pixels,0,3,0,0,bitmap.getWidth(),bitmap.getHeight());
        if(seekGreens(pixels)>80){
            camera.turnOnFlash(true);
        }else{
            camera.turnOnFlash(false);
    }
    });
    
    
}else{
    camera.turnOnFlash(false)
}

*/
