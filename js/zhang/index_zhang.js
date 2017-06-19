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
	var audio=document.querySelector("footer video");
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
	
	//图片轮播
	var slider=document.querySelector("#slider");
	var nagvs=document.getElementById("navigation").querySelectorAll("li");
	//console.log(nagvs);
	var imgs=document.getElementById("slide").querySelectorAll("li");
	var pravice=document.getElementById("pravice");
	var next=document.querySelector("#next");
	var num=0;
	var timer=null;
	//先点击12345给li添加事件，让对应得img显示
	for(var i=0;i<nagvs.length;i++){
		nagvs[i].index=i;
		nagvs[i].onclick=function(){
			move(num);
			num=this.index;
			add(num);
		}
	}
	
	//清除样式
	function move(){
		nagvs[num].className=""
		imgs[num].className=""
	}
	//添加样式
	function add(){
		nagvs[num].className="current"
		imgs[num].className="active"
	}
	
	//图片自动轮播
	function Move(){
		move(num);
		num++;
		if(num>nagvs.length-1){
			num=0;
		}
			add(num);
	}
	timer=setInterval(Move,1000);
	//slider最外面的添加鼠标移入和移除事件
	slider.onmouseover=function(){
		clearInterval(timer);
	}
	slider.onmouseout=function(){
		timer=setInterval(Move,1000);
	}
	//点击左边按钮，图片轮播
	pravice.onclick=function(){
		move(num);
		num--;
		if(num<0){
			num=nagvs.length-1;
		}
		add(num);
	}
	//点击右边按钮，图片切换
	next.onclick=function(){
		Move(num);
	}
	
	//进入mv界面
  var mv=document.querySelector("#mv");
  mv.onclick=function(){
//console.log(mv)
  	window.location.href="mv.html"
  }
//tab2卡点击歌曲，下面的footer部分进行播放
   var list=document.querySelector(".music").querySelectorAll("li");
	
 //console.log(list)
   var footerImg=document.querySelector("footer img");
   var footerSpan=document.querySelector("footer span");
   var footerVideo=document.querySelector("footer video");
   for(var i=0;i<list.length;i++){
   	list[i].onclick=function(){
   		footerImg.src=this.firstElementChild.src;
   		footerSpan.innerHTML=this.firstElementChild.nextElementSibling.firstElementChild.innerHTML;
   		footerVideo.src=this.lastElementChild.src;
   		// console.log(this.lastElementChild);
   			if(isTrue){
			icons[1].classList.add("play");
			icons[0].classList.remove("play")
			img.className="rotate"
			footerVideo.play();
			isTrue=false;
		}else{
			icons[0].classList.add("play");
			icons[1].classList.remove("play")
			img.className=""
			footerVideo.pause();
			isTrue=true;
		}
		
   		
   	}
   }
	//tab3卡点击歌曲，下面的footer部分进行播放
   var list1=document.querySelector(".music1").querySelectorAll("li");
	
// console.log(list1)
   var footerImg=document.querySelector("footer img");
   var footerSpan=document.querySelector("footer span");
   var footerVideo=document.querySelector("footer video");
   for(var i=0;i<list1.length;i++){
   	list1[i].onclick=function(){
   		footerImg.src=this.firstElementChild.src;
   		footerSpan.innerHTML=this.lastElementChild.firstElementChild.innerHTML;
   		footerVideo.src=this.lastElementChild.src;
   		 console.log(this.lastElementChild);
   			if(isTrue){
			icons[1].classList.add("play");
			icons[0].classList.remove("play")
			img.className="rotate"
			footerVideo.play();
			isTrue=false;
		}else{
			icons[0].classList.add("play");
			icons[1].classList.remove("play")
			img.className=""
			footerVideo.pause();
			isTrue=true;
		}
		
   		
   	}
   }
	
	
	
	
	
	
	
	
	
	
	
	
}
