var originalImage=null; 
var grayImage=null;
var regImage=null;

function loadImage(){
  
  var file = document.getElementById("finput");
	originalImage = new SimpleImage(file);
	grayImage = new SimpleImage(file);
	redImage = new SimpleImage(file);
	
	originalImage.drawTo(canvas);
  
}

function clearCanvas(){
  
  var dd1 = document.getElementById("d1");
  
  var ctx1 = dd1.getContext("2d");
  
  ctx1.clearRect(0,0,dd1.width,dd1.height);
}

function upload(){
  
  var dd1 = document.getElementById("d1");
  
  var fileinput = document.getElementById("finput");
  
  image = new SimpleImage(fileinput);
  
  image.drawTo(dd1);
  
}

function makeRed(){
  
  for(var pixel of image.values()){
    
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    
    if(avg < 128){
      pixel.setRed(avg*2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(avg*2 - 255);
      pixel.setBlue(avg*2 - 255);
    }
    
  }
  
  var imgcanvas = document.getElementById("d1");
  
  image.drawTo(imgcanvas);
  
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
