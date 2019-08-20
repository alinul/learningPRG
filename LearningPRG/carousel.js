var imagesArray = ["img\\1.png", "img\\2.png", "img\\3.png","img\\4.png"];

var x = 0;	

function changeImage(direction){
		
		if(direction=="next"){
			if(x==imagesArray.length-1){
				x=-1;
			}
			x++;
			document.getElementById("imageHolder").setAttribute("src", imagesArray[x]);			
		}
		
		if(direction=="prev"){
			if(x==0){
				x=imagesArray.length;
			}
			x--;
			document.getElementById("imageHolder").setAttribute("src", imagesArray[x]);			
		}
		
		
}