window.onload = function() {
	document.querySelector("html").style.fontSize = document.documentElement.clientWidth / 10 + "px";
	//选项卡
	var btn = document.querySelectorAll("#videoName i");
	//		console.log(btn)
	var lis = document.querySelectorAll("#tab li");
	// console.log(lis)
	var h4 = document.querySelector("h4");
	//console.log(h4)
	isTrue = true;
	h4.addEventListener("click", function() {
		if (isTrue) {
			btn[1].classList.add("on");
			btn[0].classList.remove("on");
			lis[1].className = "current"
			lis[0].className = ""
			isTrue = false;
		} else {
			btn[0].classList.add("on");
			btn[1].classList.remove("on");
			lis[1].className = ""
			lis[0].className = "current"
			isTrue = true;
		}
	})

	//鼠标移入视频出现播放按钮
	//	var mv=document.querySelector(".video");
	//	console.log(mv)
	function Mv(element, pl) {
		this.element = element;
		this.pl=pl;
		var _this = this;
		this.element.onclick = function(){
			_this.show(this);
		}
	}

	Mv.prototype.show=function(obj) {
		if (isTrue) {
			this.pl[0].classList.add("play1")
			this.pl[1].classList.remove("play1")
			isTrue=false;
		} else {
			this.pl[1].classList.add("play1")
			this.pl[0].classList.remove("play1")
		isTrue=true;
		}
	}
//
//	var mv1 = document.querySelector(".video");
//	var pl1 = mv1.querySelectorAll("i");
//	
//	//console.log(pl1)
//	var one = new Mv(mv1, pl1);
	
	var mv2=document.querySelector(".mv2");
	var pl2=mv2.querySelectorAll("i");
	var two=new Mv(mv2,pl2)
	
	var mv3=document.querySelector(".mv3");
	var pl3=mv3.querySelectorAll("i");
	var two=new Mv(mv3,pl3)
//返回上一页
  var back1=document.querySelector("#back1");
  back1.onclick=function(){
  	window.location.href="mv.html"
  }
    //点赞操作  
   var like=document.querySelector("#like");
   like.onclick=function(){
   	if(isTrue){
   	this.style.color="red"
   		isTrue=false;
   	}else{
   		this.style.color=""
   		isTrue=true;
   	}
   }
   
   //评论点赞改变赞的数量
// var zan=document.querySelectorAll(".zan");
// //console.log(zan)
// var count=document.querySelectorAll(".count");
// 	console.log(zan)
// 	for (var i=0;i<zan.length;i++) {
// 		zan[i].index=i;
// 	var total=0;
// 	zan[i].onclick=function(){
// 	total+=1;
// 	count[this.index].innerHTML=total;
// 	this.style.color="#31C27C"
// 	}
// 	
// 	}

    //原型函数
    function Zan(Element,count){
    	this.Element=Element;
    	this.count=count;
    	var _this=this;
    	this.Element.onclick=function(){
//  	//console.log(this.Element)
//  		_this.Click(this);
//  		//alert(this.Element)
    	_this.count.innerHTML=parseInt(_this.count.innerHTML)+1;
    	this.style.color="#31C27C"
    	}
    }
    //创建实例对象
    //第一个评论
    var zan1=document.querySelector("#zan1");
    var count1=document.querySelector("#count1");
    var li1=new Zan(zan1,count1);
     
     //第二个评论
   var zan2=document.querySelector("#zan2");
    var count2=document.querySelector("#count2");
    var li2=new Zan(zan2,count2);
    
    //第三个评论
     var zan3=document.querySelector("#zan3");
    var count3=document.querySelector("#count3");
    var li3=new Zan(zan3,count3);
    
    //第四个评论
     var zan4=document.querySelector("#zan4");
    var count4=document.querySelector("#count4");
    var li4=new Zan(zan4,count4);
    
    //第五个评论
     var zan5=document.querySelector("#zan5");
    var count5=document.querySelector("#count5");
    var li5=new Zan(zan5,count5);
    
    
    
   
    
    
    
    
    
    
}