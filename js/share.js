function dateOne(ul,id){
	var phoneUl=document.getElementById(id);
	Ajax("GET",ul,function(sv){
		var js2=JSON.parse(sv);
		let str1=``;
	    let str2=``;
	    let {
  				src1
  			} = js2[0]
	    str1=`	<li class="phone-show-one">
	     			<a href="">
	     				<p class="phone-img">
	     					<img src="${src1}" alt="" />
	     				</p>
	     			</a>
	     		</li>`
	   	for (var i = 1; i < js2.length; i++) {
  			let {
  				src,
  				protit,
  				prodes,
  				propri,
  				circle
  			} = js2[i]
  			str2 += `		<li>
	     			<a href="">
	     				<p class="phone-img">
	     					<img src="${src}" alt="" />
	     				</p>
	     				<p class="phone-tit tit">${protit}</p>
	     				<p class="phone-des des">${prodes} </p>
	     				<p class="phone-price price">${propri}</p>
	     				<p class='phone-circle circle'>
	     					<img src="${circle}" alt="" />
	     				</p>
	     			</a>
	     		</li>
  	  `
  			
  		}
	   	 phoneUl.innerHTML = str1+str2;
	})
}//数据请求
 function LunboTU(id, ol) {
 	this.oBox = document.getElementsByClassName(id)[0];
 	this.oUl = this.oBox.firstElementChild;
   	this.arrLis = this.oUl.children;
// 	this.arrLis = this.oUl.getElementsByTagName('li');
 	this.oOl = document.getElementById(ol);
 	this.arrLis1 = this.oOl.children;
 	console.log(this.arrLis )
 	this.now = 0;
 	this.time = null;
 	var _this = this;
 	for (var i = 0; i < this.arrLis1.length; i++) {
 		this.arrLis1[i].index = i;
 		this.arrLis1[i].onmouseover = function() {
 			_this.now = this.index;
 			_this.tab();
 		}

 	}
 	this.time = setInterval(function() {
 		_this.now++
 			if (_this.now == _this.arrLis.length) {
 				_this.now = 0
 			}
 		_this.tab();
 	}, 1500)
 	this.oBox.onmouseenter = function() {
 		clearInterval(_this.time)
 	}
 	this.oBox.onmouseleave = function() {
 		_this.time = setInterval(function() {
 			_this.now++
 				if (_this.now == _this.arrLis.length) {
 					_this.now = 0
 				}
 			_this.tab();
 		}, 1500)
 	}
 }
 LunboTU.prototype.tab = function() {
 	for (var j = 0; j < this.arrLis1.length; j++) {
 		this.arrLis1[j].classList.remove("now");
 		this.arrLis[j].classList.remove('now');
 	}
 	this.arrLis1[this.now].classList.add('now');
 	this.arrLis[this.now].classList.add('now');
 }//轮播图
function date(ul, id){
  	Ajax('GET', ul, function(sv) {
  		var js2 = JSON.parse(sv);
  		  var oShow=document.getElementById(id);
  		  var oProUl=oShow.firstElementChild;
  		let str = ``;
  		for (var i = 0; i < js2.length; i++) {
  			let {
  				src,
  				protit,
  				prodes,
  				propri,
  				circle
  			} = js2[i]
  			str += `	<li><a href="" class='produce-a'>
	   			<p class="produce-img">
	   				<img src="${src}" alt="" />
	   			</p>
	   			<p class='produce-tit tit'> 
	   		     ${protit}
	   			</p>
	   			<p class="produce-des des">${prodes}  </p>
	   			<p class="produce-price price">${propri}</p>
	   			<p class="produce-circle">
	   				<img src="${circle}"/>
	   			</p>
	   		</a>
	   		</li>
  	  `
		
	oProUl.innerHTML = str;
  	  
  		}/*循环结束*/
  		  var oProUlli=oProUl.children; 
  	      var opliwidth=oProUlli[0].offsetWidth+1;
  		  oProUl.style.width=opliwidth*oProUlli.length+"px";
  		  var oBtnleft=oShow.children[1].children[0];
  		  var oBtnright=oShow.children[1].children[1];
  		  var oShowwidth=oShow.offsetWidth;
  		  var ProUlwidth=oProUl.offsetWidth;
  		  var page=Math.floor(ProUlwidth/oShowwidth)
  		  var num=0;
  		  var tag=0;

          oBtnleft.onclick=function(){
             num++;
             if(num<page){
            tag=-num*oShowwidth;
             oBtnleft.style.cursor="default"
             }
            if(num>=page){
            num=page;
             	console.log(num)
            tag=-(num-1)*oShowwidth-360;	
           oBtnleft.style.cursor="no-drop"//鼠标变成禁止状态	
            }
          startMove(oProUl, {
  		left: tag
  	}) 
           }
         
      oBtnright.onclick = function() {
     	num--;
     	if(num==page){
     	tag=-(num-1)*oShowwidth
     	 oBtnright.style.cursor="default"
     	}
     	if(num>=0){
     	tag = -num * oShowwidth;	
     	 oBtnright.style.cursor="default"
     	}
     	if(num<0){
     		num=0;
     	oBtnright.style.cursor="no-drop"	
     	tag = -num * oShowwidth;	
     	}
     	startMove(oProUl, {
     		left: tag
     	})
     }
  	})
  }  //左右点击商品展示
function scroll(){
       return{
           top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
           left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
       }
   }
function date2(cc,ul){
	var oUl=document.getElementById(cc);
	Ajax("GET",ul,function(sts){
		  var js1=JSON.parse(sts);
		  console.log(js1)
		  let str1=``;
		  let str2=``;
		  let {src,tit,pri,cir}=js1[0];
		  str1=`	<li class="li-one">
	   	  				<a href="">
	   	  				<img src="${src}" alt="" />
	   	  				<div class="se-cont-font">
	   	  				<p class="se-cont-tit">${tit}</p>
	   	  				<p class="se-cont-pri">${pri}</p>
	   	  				</div>
	   	  				<p class="se-cont-circle">
	   	  					<img src="${cir}" alt="" />
	   	  				</p>
	   	  				</a>
	   	  			</li>`
		  for(var i=1;i<js1.length;i++){
		  	let {src,tit,pri,cir}=js1[i];
		  	str2+=`
		  	<li >
	   	  				<a href="">
	   	  				<img src="${src}" alt="" />
	   	  				<div class="se-cont-font">
	   	  				<p class="se-cont-tit">${tit}</p>
	   	  				<p class="se-cont-pri">${pri}</p>
	   	  				</div>
	   	  				<p class="se-cont-circle">
	   	  					<img src="${cir}" alt="" />
	   	  				</p>
	   	  				</a>
	   	  			</li>
		  	
		  	
		  	
		  	`
		  	 
		  }
		  
		  oUl.innerHTML=str1+str2;
	})
	}
function addEvent(obj,e,fn){
       "use strict";
       if(obj.addEventListener){
           obj.addEventListener(e,fn);
       }
       else if(obj.attachEvent){
           obj.attachEvent('on'+e,fn);
       }
       else{
           obj['on'+e]=fn;
       }
   }
function setCookie(name,value,iDay){
			var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
			document.cookie=name+'='+value+';expires='+oDate;
		}
function removeCookie(name){
			setCookie(name,1,-1)
		}
function getCookie(name){
			var arr=document.cookie.split('; ')
			console.log(arr)
			 for(var i=0;i<arr.length;i++){
			 	var arr2=arr[i].split('=');
			 	if(arr2[0]==name){
			 		return arr2[1]
			 	}  
			 }
			 return ''
		}