// fuction to change gallery image
let picNum = 0;
let pics = ["pic1.jpeg","pic2.jpeg","pic3.jpeg"];
let background = ["blue","#f99206",'green']
function gallery(direction){
	if(direction == 1) {
		picNum++;
	}else{
		picNum--;
	}
	if(picNum == pics.length){
		picNum = 0;
	}
	if(picNum < 0){
		picNum = pics.length - 1;
	}
	document.getElementById('myImage').src = pics[picNum];
	document.body.style.background = background[picNum];
}
