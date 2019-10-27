window.onload=function(){
	var oRecommed=document.getElementById('recommed');
	var oClose=document.getElementsByClassName('close')[0];
	oClose.onclick=function(){
		oRecommed.style.display="none";
	}//头部下拉
	new LunboTU("banner", "ol") 
	var anavlistli=document.getElementById("nav-list-up").getElementsByTagName('li');
	
	var onavlist=document.getElementById("nav-list");
	var oIn=document.getElementById("nav-list-in");
	console.log(anavlistli,oIn);
	Ajax('GET','json/huaweimain.json',function(str){
		var js=JSON.parse(str);
		console.log(js);
		for(let  i=0;i<anavlistli.length;i++){
			anavlistli[i].onmousemove=function(ev){
					 	var oEvent=ev||event;
    	if(oEvent&&oEvent.stopPropagation){
    		oEvent.stopPropagation();
    	}
    	else{
    		oEvent.cancelBubble=true;
    	}//取消冒泡

			onavlist.style.height="300px"	
	     let {a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15}=js[i].cont[0];	
     	 let str=``;
    	 let str1=``;	
    	 for (var j = 0; j < js[i].shopshow.length; j++) {

	let {
		src,
		showtitle,
		showprice
	} = js[i].shopshow[j];

	str1 += `<li>
			     			<a href="">
			     					<p class="nav-li-con-img"><img src="${src}" alt="" /></p>
			     					<p class="nav-li-con-tit">${showtitle}
			     			      </p>
			     					<p class="nav-li-con-pri">${showprice}</p>
			     				</a>
			     			</li>
			 			`
}
			       str+=`
	  	     		<div class="inner">
			     	<div id="nav-list-in">
	  	     	<p class="nav-list-tit clear">
	  	     	    <a href=""class="one-tit">${js[i].title}</a>
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
	  	     		<ol class="nav-list-cont">
	  	       ${str1}
	  	     	</ol>
	  	     		</div>
			     	</div>
               
	  	     	`
	  	     	onavlist.innerHTML=str;
    	        }
			}
	
		 document.onmousemove=function(ev){
		 	var even=ev||event;
		 	var ele=even.srcElement||even.target
		 	if(ele.className==="nav-list"){
	          onavlist.style.height='0'
		}
		 }
	})
	date2('phone-cont-right',"json/hpone.json");
	date('json/toggle1.json', "produce-show-k");
	date2('fcomputer-cont-right',"json/hpone.json")
	date('json/toggle1.json', "f-show-k");
	date2('noohome-cont-right',"json/hpone.json")
	date('json/toggle1.json', "home-show-k");
	date2('hotplay-cont-right',"json/hpone.json")
	date('json/toggle1.json', "play-show-k");
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
	
	}
    