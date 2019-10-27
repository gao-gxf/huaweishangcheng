window.onload=function(){
	var oBut=document.getElementById('but');
	var oBli=document.getElementById('li-left');
	var center=document.getElementById('li-center');
	var Oul=document.getElementById('up-list');
	var Int=document.getElementById('input-s');
	var arrP=center.getElementsByTagName('p');
	var erro=document.getElementById('erro');
	var arrInput=document.getElementsByClassName('sinput')
	console.log(oBut,oBli,center,Oul,arrP,Int,arrInput);
	oBut.onmousedown=function(ev){
		var eve=ev||event;
			if(eve.stopPropagation){
			eve.stopPropagation();
		}
		else{
			eve.cancelBubble=true;
		}
			Oul.style.display="block"
		var dicY=eve.clientY-oBut.offsetTop;
		document.onmousemove=function(ev){
			var eve=ev||event;
			var t=eve.clientY-dicY;
			if(t<0){
				t=0
			}
			else if(t>oBli.offsetHeight-oBut.offsetHeight){
				t=oBli.offsetHeight-oBut.offsetHeight
			}
			oBut.style.top=t+'px';
			var scal=t/(oBli.offsetHeight-oBut.offsetHeight);
			center.style.top=-(center.offsetHeight-Oul.offsetHeight)*scal+"px"
		}
			document.onmouseup=function(){
			document.onmousemove=null
			document.onmouseup=null;
		}
		
	}
	var os=document.getElementsByClassName('up-ra')[0];
	os.onclick=function(ev){
	
		var eve=ev||event;
		if(eve.stopPropagation){
			eve.stopPropagation();
		}
		else{
			eve.cancelBubble=true;
		}
		Oul.style.display="block"
		
	}
	document.onclick=function(){
		Oul.style.display="none"

	}
	for (let i=0;i<arrP.length;i++) {
		arrP[i].onclick=function(){
			Int.value=arrP[i].innerHTML
		}
	}
//	下拉
   arrInput[3].onclick=function(ev){
   	     var eve=ev||event;
		if(eve.stopPropagation){
			eve.stopPropagation();
		}
		else{
			eve.cancelBubble=true;
		}
   	     erro.style.display="block" 
   	     console.log(1)
   	     addEvent(document,'click',function(){
   	     			erro.style.display="none"
   	     })
   }

	
}
