/*
*	
*	Description: When detecting a large amount of green light, the flash turns on.
*	by elgambitero - https://github.com/elgambitero 
*
*/

var camera = ui.addCameraView("back", 0, 0, 500, 500);
var active = false;

ui.addButton("Test", 0, 800, 500, 100).onClick(function() { 
    
    camera.onNewBitmap(function(bitmap){ 
        var sum = 0.0;//java.lang.reflect.Array.newInstance(int, [bitmap.getWidth(),bitmap.getHeight()]);
        //pixel = bitmap.getPixel(0,0);
        for(i=0;i<bitmap.getHeight()/16;i++){
            for(j=0;j<bitmap.getWidth()/16;j++){
                sum = sum + (bitmap.getPixel(16*j,16*i) >> 8) & 0xFF;
            }
        }
        
        //pixel = (pixel >> 8) & 0xFF
        var quantity = bitmap.getWidth()*bitmap.getHeight()/16;
        var smems = sum/quantity;
        console.log('Smems is: ' + smems);
        if(smems>0.0005){
            camera.turnOnFlash(true);
        }else{
            camera.turnOnFlash(false);
        }
       
    });
});
