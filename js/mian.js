window.onload=function(){
	var oRecommed=document.getElementById('recommed');
	var oClose=document.getElementsByClassName('close')[0];
	oClose.onclick=function(){
		oRecommed.style.display="none";
	}//头部下拉
	var oInput=document.getElementById('input');
	var ofont=document.getElementById('find-font');
	var oXiala=document.getElementsByClassName('xiala')[0]
    oInput.onclick=function(ev){
    	ofont.style.display='none';
    	oXiala.style.display='block';
    	var oEvent=ev||event;
    	if(oEvent&&oEvent.stopPropagation){
    		oEvent.stopPropagation();
    	}
    	else{
    		oEvent.cancelBubble=true;
    	}//取消冒泡
    }
    oXiala.onclick=function(ev){
    	var oEvent=ev||event;
    	if(oEvent&&oEvent.stopPropagation){
    		oEvent.stopPropagation();
    	}
    	else{
    		oEvent.cancelBubble=true;
    	}//取消冒泡
    }
    document.onclick=function(){
    	ofont.style.display='block'
    	oXiala.style.display='none'
         var dd=document.createElement('dd');
         dd.innerHTML=oInput.value;
         var dl=oXiala.getElementsByTagName('dl')[0]
        dl.insertBefore(dd,dl.firstElementChild);
         oInput.value='';  
    }
    //搜索框
    var oLeftnav=document.getElementsByClassName('left-nav')[0];
    var oLeftnavdd=oLeftnav.children;
    var oRight=document.getElementsByClassName('right-cont')[0];  
    Ajax('GET','json/main.json',function(text){
    	var json1=JSON.parse(text);
     for(let i=0;i<oLeftnavdd.length;i++){
     	oLeftnavdd[i].onmouseover=function(ev){
     		 oRight.style.display='block'
     		 	var oEvent=ev||event;
    	if(oEvent&&oEvent.stopPropagation){
    		oEvent.stopPropagation();
    	}
    	else{
    		oEvent.cancelBubble=true;
    	}//取消冒泡
     	let {a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15}=json1[i].cont[0];	
     	 let str=``;
    	  let str1=``;
      	 
    		for(var j=0;j<json1[i].shopshow.length;j++){
    			
    		 	let {src,showtitle,showprice}=json1[i].shopshow[j];
 		 	
    		 	str1+=`<li>
	  	     	    <div class="img">
	  	     	    	<img src="${src}" alt="" />
	  	     	    </div>
	  
	  	     	    <a href=""class='show-title'>${showtitle}</a>
	  	     	     <a href="" class='show-price'>${showprice}</a>
	  	     		</li>`
    	        }

    	         str+=`<p class='cont-title clear'>
	  	     		<span class='cont-title-left fl '>${json1[i].title}</span>
	  	     		<span class='cont-title-right fr '>></span>
	  	     	</p>
	  	     	<p class="cont-cont clear">
	  	     		<a href="">${a1}</a>
	  	     		<a href="">${a2}</a>
	  	     		<a href="">${a3}</a>
	  	     		<a href="">${a4}</a>
	  	     		<a href="">${a5}</a>
	  	     		<a href="">${a6}</a>
	  	     		<a href="">${a7}</a>
	  	     		<a href="">${a8}</a>
	  	     		<a href="">${a9}</a>
	  	     		<a href="">${a10}</a>
	  	     		<a href="">${a11}</a>
	  	     		<a href="">${a12}</a>
	  	     		<a href="">${a13}</a>
	  	     		<a href="">${a14}</a>
	  	     		<a href="">${a15}</a>
	  	     		
	  	     	</p>
	  	     		<ul class="shop-show clear">
	  	       ${str1}
	  	     	</ul>`
    	      oRight.innerHTML=str
     	}
     	oRight.onmouseover=function(ev){
     	var oEvent=ev||event;
    	if(oEvent&&oEvent.stopPropagation){
    		oEvent.stopPropagation();
    	}
    	else{
    		oEvent.cancelBubble=true;
    	}//取消冒泡
     	}
      document.onmouseover=function(){
      	oRight.style.display='none';
      } 

     }
    })//banner侧边导航内容展示
   var oTopul=document.getElementsByClassName('font-nl')[0];
   var oToplis=oTopul.children;
   var li=oToplis[0].cloneNode(true);
       oTopul.appendChild(li);
    var topheight = oToplis[0].offsetHeight
  oTopul.style.height = topheight * oToplis.length + 'px';
  var now1 = 0;
  var target = 0;
  function top() {
  	if (now1 == oToplis.length - 1) {
  		now1 = 0;
  		oTopul.style.top = 0 + 'px'
  	}
  	now1++;
  	target = -now1 * topheight
  	startMove(oTopul, {
  		top: target
  	})
  }
  setInterval(top, 1500);//公告

date('json/toggle.json', "produce-show-k");
date('json/toggle.json', "noo-dress-show-k");
date('json/toggle.json', "noo-home-show-k");
date('json/toggle.json', "hot-play-show-k");
date('json/toggle.json', "brand-play-show-k");
new LunboTU("banner","ol");
new LunboTU("lit-lunbo","ol1");
dateOne('json/phone.json',"phone-show")
dateOne('json/computer.json',"computer-show")
dateOne('json/fcomputer.json',"f-computer-show")
dateOne('json/noodress.json',"noo-dress-show")
dateOne('json/noodress.json',"noo-home-show")
dateOne('json/hotplay.json',"hot-play-show")
dateOne('json/brandplay.json',"brand-play-show")
var ofootUl=document.getElementById("dd-ul");
var ofootlis=ofootUl.children;
var oSpanL=document.getElementById('span-l');
var oSpanR=document.getElementById('span-r');
var oFliwidth=ofootlis[0].offsetWidth;
var page1=0;
var tage=0;
ofootUl.style.width=oFliwidth*ofootlis.length+"px";
console.log(ofootUl,ofootlis,oSpanL,oSpanR,ofootUl.offsetWidth);
oSpanL.onclick=function(){
	page1++;
	oSpanL.style.cursor="default"
	if(page1>=ofootlis.length){
		page1=ofootlis.length-1;
		 oSpanL.style.cursor="no-drop"//鼠标变成禁止状态	
	}
	tage=-page1*oFliwidth;
      startMove(ofootUl, {
  		left: tage
  	}) 
}
oSpanR.onclick=function(){
	page1--;
	oSpanR.style.cursor="default"
	if(page1<=0){
		page1=0
		oSpanR.style.cursor="no-drop"//鼠标变成禁止状态	
	}
	tage=-page1*oFliwidth;
      startMove(ofootUl, {
  		left: tage
  	}) 
}//footer 友情链接
var oBacknav=document.getElementById("back-nav")
var oBacknavLi=document.getElementById("help-center")
var oBackup= document.getElementsByClassName("back-up")[0]
console.log( oBackup)
oBacknav.onmouseover=function(){
	startMove1(oBacknav,"height",60,function(){
		startMove1(oBacknav,"width",140)
	})	
}
oBacknav.onmouseout=function(){
	startMove1(oBacknav,"width",40,function(){
		startMove1(oBacknav,"height",40)
	})
}

window.onscroll=function(){
	if(scroll().top>1000)
	{
	oBackup.style.opacity="1";	
	}
	else{
	oBackup.style.opacity="0";		
	}
	leader=scroll().top;
}
var tager=0;
var leader=0;
var tim=null;
oBackup.onclick=function(){
	clearInterval(tim);
	tim=setInterval(function(){
		var speed=(tager-leader)/10;
	speed=speed>0?Math.ceil(speed):Math.floor(speed);
	leader+=speed;
	window.scrollTo(0,leader)
	if(leader===0){
		clearInterval(tim)
	}
	},30)
}//悬浮框返回顶部
}
