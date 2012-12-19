
var i = 0;

var item_id ='';

var child;
var image_slide = [];
var NumOfImages;	
	
	

function StartMySlide(item_Id) {
	
	var container = document.getElementById(item_Id.id);
	// 
	for (child = container.firstChild; child; child = child.nextSibling) {
	    if (child.id && child.nodeName === "A") {
		image_slide.push(child.id);
	    }
	}

       NumOfImages = image_slide.length;
	
	
	play = setInterval('Play()',2000);
 

								
}

function Play() {
 	
	var imageShow, imageHide;

	imageShow = i+1;
	imageHide = i;
     
	if (imageShow == image_slide.length) {
		
		SwapImage(0,imageHide);	
		i = 0;					
	} else {
			
		SwapImage(imageShow,imageHide);			
		i++;
	}
}
function SwapImage(x,y) {
	
	if(x==NumOfImages || x > NumOfImages)
	{
		
		x=1;
		y=0;
		i=0;
		imageShow = i+1;
		imageHide = i;
	}
	
	Effect.Appear(image_slide[x], { duration: 1.5 });
	Effect.Fade(image_slide[y], {duration: 1.5});
	
		
	
	
}
 function Stopit()
 {
	clearInterval(play);
	image_slide = [];
	
 }

