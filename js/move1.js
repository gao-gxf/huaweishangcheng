function startMove(obj, json,fnend) {
	clearInterval(obj.time);
	obj.time = setInterval(function() {
		for(var attr in json){
			var btstop=true;	
		if (attr == 'opacity') {
			var cue = Math.round(parseFloat(getStyle(obj, attr)) * 100)
		} else {

			var cue = parseInt(getStyle(obj, attr))
		}
			var speed = (json[attr]- cue) / 6;
		    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		   
		 if(cue!=json[attr]){
		    	bstop=false;
		    	cue += speed;	
		 }    
		 if (attr == "opacity") {
				obj.style.filter = 'alpha(opacity:' + cue + ')'
				obj.style.opacity = cue / 100;
		  } else {
				obj.style[attr] = cue + 'px'
			}	
		}
		if (bstop) {
			clearInterval(obj.time)
			if(fnend){
				fnend();
			}

		} 

	}, 30)
}
	function getStyle(obj,name){
		if(obj.currentStyle){
			return obj.currentStyle[name]
		}
		else{
			return getComputedStyle(obj)[name]
		}	
	}
	