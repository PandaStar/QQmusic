window.onload=function(){
	//获取rem
//	document.querySelector("html").style.fontSize=document.documentElement.clientWidth/10+"px";
	
		var oTab = new TabSwitch("nav");
			
			var lis = null;
			var aDiv = null;

			function TabSwitch(id) {
				var nav = document.getElementById("nav");
				this.lis = nav.getElementsByTagName("li"); //全局变量 转变成属性
				this.aDiv = document.getElementsByClassName('box');
				var _this = this; //将这里的对象this存入_this中，方便在按钮点击里面用
				for(i = 0; i < this.lis.length; i++) {
					this.lis[i].index = i;
					this.lis[i].onclick = function() {
						_this.tab(this); //这里的this指的是li，把它作为参数传到函数中；
					}
				}
			}
			TabSwitch.prototype.tab = function(lis) { //函数 转变成对象的方法
				//        alert(this);  //li
				//        alert(this);    //这里的this指的是对象object;
				for(i = 0; i < this.lis.length; i++) {
					this.lis[i].className = '';
					this.aDiv[i].style.display = 'none';
				}
				lis.className = 'active';
				this.aDiv[lis.index].style.display = 'block';
			}
			
			
			var audio1=document.querySelector(".footer audio");
			var btn=document.querySelector("#btn");
			var icons=document.querySelectorAll("#btn svg");
			var marquer=document.querySelector(".words marquee");
			var marquer2=document.querySelector("#bos3 marquee");
			console.log(marquer)
			console.log(audio1)
//	console.log(audio)
			var img=document.querySelector(".title_4 img");
		isTrue=true;
	btn.onclick=function(){
		if(isTrue){
			icons[1].classList.add("play1");
			icons[0].classList.remove("play1")
			img.className="rotate"
			Play();
			marquer.start();
			marquer2.start();
			isTrue=false;
		}else{
			icons[0].classList.add("play1");
			icons[1].classList.remove("play1")
			img.className=""
			Pause();
			marquer.stop();
			marquer2.stop();
			isTrue=true;
		}
	}	
	
	
	
	function Play(){
		audio1.play();
	}
	function Pause(){
		audio1.pause();
	}
			
			//点赞收藏
			var taoxin=document.querySelector(".taoxin");
			var svgs=document.querySelectorAll(".taoxin svg");
			isTrue=true;
			taoxin.onclick=function(){
				if(isTrue){
					svgs[1].classList.add("xin");
					svgs[0].classList.remove("xin")
					
					isTrue=false;
				}else{
					svgs[0].classList.add("xin");
					svgs[1].classList.remove("xin")
					
					isTrue=true;
				}
			}
			
			
			
			
			
			
			
			
			
			
			
			
		}

//	function Tab(lis,divs){
// 	this.lis=lis;
// 	this.divs=divs;
// 	var _this=this;
// 	for(var i=0;i<this.lis.length;i++){
// 		this.lis[i].index=i;
//		this.lis[i].onclick=function(){
// 			_this.tab(this);
// 		}
// 	
//}
// }
////	//原型添加方法
//	Tab.prototype.tab=function(obj){
//		for(var j=0;j<this.lis.length;j++){
//			this.lis[j].classList.remove("on")
//			this.divs[j].classList.remove("current")
//		}
//		obj.classList.add("on")
//		this.divs[obj.index].classList.add("current")
//	}
//	//创建原型
//	var dome=document.querySelectorAll(".nav ");
//	
//	console.log(dome)
//	var L=document.querySelectorAll(".nav li");
//	console.log(L)
//	var D=document.querySelectorAll("#tab div");
//	console.log(D);
//	var m=new Tab(L,D);
//}