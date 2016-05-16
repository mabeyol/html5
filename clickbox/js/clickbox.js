var oLi=document.querySelectorAll(".content ul li");
var oA=document.querySelector(".content a");
var oImg=document.querySelectorAll("#content_box img");
var back=document.getElementById("content_back");
var box=document.getElementById("content_box");
var index=0;
box.style.width=8.755556*3+"rem";
oA.onclick=function(){
	index++;
	if (index>oLi.length-1) {
		index=0;
	}
	for (var i = 0; i<oLi.length; i++){
		oLi[i].className="";
	}
	oLi[index].className="active";
	box.style.left=-index*8.555556+"rem";
}
for (var i = 0; i<oLi.length;i++){
	oLi[i].index=i;
	oLi[i].onclick=function(){
	index=this.index;
	for (var i = 0; i<oLi.length; i++) {
		oLi[i].className="";
	}
	oLi[this.index].className="active";
	box.style.left=-this.index*8.555556+"rem";
	}
}
var imgarr=["1c.gif","2c.gif","3c.gif","1c.gif","2c.gif","3c.gif","1c.gif","2c.gif","3c.gif"]
var arrimg=["9.png","10.png","11.png","9.png","10.png","11.png","9.png","10.png","11.png"]
var putli=document.querySelectorAll(".header ul li")[3];
var aSpan=document.querySelector(".content h1 span");
var j=0;
var m=12;
var dbclick=true;
function randFn(min,max){
	return parseInt(Math.random()*(max-min)+min);
}
	for (var i = 0; i<oImg.length;i++){
		oImg[i].j=i;
		oImg[i].onclick=function(){
			if (dbclick==true) {
				dbclick=false;
				for (var i = 0; i <oImg.length; i++) {
				oImg[i].src="img/"+arrimg[i];
			}
			m=m-1;
			if (m<0) {
				alert("宝箱已用完，请获得宝箱");
				return 0;
			}
			aSpan.innerHTML=m;
			this.src="img/"+imgarr[this.j];
			var timer=setTimeout(function(){
				for (var i =0; i <oImg.length; i++) {
					oImg[i].src="img/"+arrimg[i];
				}
				dbclick=true;
				var r=randFn(1,10)
				if (r==5) {
					putli.style.backgroundColor = '#fa3530';
					var uImg=document.createElement("img");
					uImg.src="img/"+randFn(1,4)+"a.png";
					putli.innerHTML="";
					putli.appendChild(uImg);
					var btimer=setTimeout(function(){
						putli.style.backgroundColor = '#ffffd5';
						putli.removeChild(uImg);
						
					},2000)
				}else{
					putli.innerHTML="未获得";
				}
			},2000)
			}

		}
	}

