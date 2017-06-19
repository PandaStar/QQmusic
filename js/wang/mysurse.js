window.onload=function(){
	//获取rem
		document.querySelector("html").style.fontSize=document.documentElement.clientWidth/10+"px"
	//切换我的  音乐馆 发现
   //设置构造函数
   function Tab(lis,divs){
   	this.lis=lis;
   	this.divs=divs;
   	var _this=this;
   	for(var i=0;i<this.lis.length;i++){
   		this.lis[i].index=i;
   		this.lis[i].onclick=function(){
   			_this.tab(this);
   		}
   	
}
   }
	//原型添加方法
	Tab.prototype.tab=function(obj){
		for(var j=0;j<this.lis.length;j++){
			this.lis[j].classList.remove("on")
			this.divs[j].classList.remove("current")
		}
		obj.classList.add("on")
		this.divs[obj.index].classList.add("current")
	}
	//创建原型
	var L=document.querySelectorAll("header li");
//	console.log(L)
	var D=document.querySelectorAll(".se1>div");
	//console.log(D);
	var m=new Tab(L,D);
	
	
	//点击播放 和暂停进行歌曲的播放和暂停
	var btn=document.querySelector("#btn");
	var icons=document.querySelectorAll("#btn i");
	var audio=document.querySelector("footer audio");
//	console.log(audio)
var img=document.querySelector("footer img");
		isTrue=true;
	btn.onclick=function(){
		if(isTrue){
			icons[1].classList.add("play");
			icons[0].classList.remove("play")
			img.className="rotate"
			audio.play();
			isTrue=false;
		}else{
			icons[0].classList.add("play");
			icons[1].classList.remove("play")
			img.className=""
			audio.pause();
			isTrue=true;
		}
		
	}
	
	function play(){
		audio.play();
	}
	function pause(){
		audio.pause();
	}
	
	
	//添加颜色
	var mydiv=document.querySelectorAll(".mydiv");
	console.log(mydiv)
	
	for(var i=0;i<mydiv.length;i++){
		mydiv[i].onclick=function(){
			for(var j=0;j<mydiv.length;j++){
				mydiv[j].style.background=""
			}
			this.style.background="#FFEFCD"
		}
	}
	
	
	
	
	
	
	
	
	
}