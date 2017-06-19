window.onload=function(){
	document.querySelector("html").style.fontSize=document.documentElement.clientWidth/10+"px"

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
	
	//播放视频
//	var vide=document.querySelector("video");
//	vide.onclick=function(){
//		Play();
//	}
//	function Play(){
//		vide.play();
//	}

//返回主界面
	var back=document.querySelector("#back");
	back.onclick=function(){
		window.location.href="index_zhang.html"
	}

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
	
//跳转到mv播放页
var mvplay=document.querySelector(".video1");
//	console.log(mvplay)
mvplay.onclick=function(){
	window.location.href="mvPlay.html"
}























}
