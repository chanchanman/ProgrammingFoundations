var image; 

var fgImage = null;
var bgImage = null;

var greenThreshold = null;

function loadForegroundImage(){
  
  var imageFile = document.getElementById("fgfile");
  
  fgImage = new SimpleImage(imageFile);
  
  var canvas = document.getElementById("d1");
  
  fgImage.drawTo(canvas);
  
}

function loadBackgroundImage(){
  
  var imageFile = document.getElementById("bgfile");
  
  bgImage = new SimpleImage(imageFile);
  
  var canvas = document.getElementById("d2");
  
  bgImage.drawTo(canvas);
  
}

function greenScreen(){
  
  if(fgImage == null || !fgImage.complete()){
    alert("foreground image not loaded");
  }
  
  if(bgImage == null || !bgImage.complete()){
    alert("background image not loaded");
  }
  
  clearCanvas();
  
  var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());
  
  for(var pixel of fgImage.values()){
    
    var x = pixel.getX();
    var y = pixel.getY();
    
    if(pixel.getGreen() > pixel.getBlue() + pixel.getRed()){
      
      var bgPixel = bgImage.getPixel(x,y);
      output.setPixel(x,y,bgPixel);
    }
    else{
      output.setPixel(x,y,pixel);
    }
  }
  
  var c1 = document.getElementById("d3");
  
  output.drawTo(c1);
}

function clearCanvas(){
  
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  
  var ctx1 = dd1.getContext("2d");
  var ctx2 = dd2.getContext("2d");
  
  ctx1.clearRect(0,0,dd1.width,dd1.height);
  ctx2.clearRect(0,0,dd2.width,dd2.height);
  
}

function upload(){
  
  var dd1 = document.getElementById("d1");
  
  var fileinput = document.getElementById("finput");
  
  image = new SimpleImage(fileinput);
  
  image.drawTo(dd1);
  
}

function makeGray(){
  
  for(var pixel of image.values()){
    
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
    
  }
  
  var imgcanvas = document.getElementById("d1");
  
  image.drawTo(imgcanvas);
  
}
