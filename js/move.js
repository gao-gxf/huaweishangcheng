function startMove1(obj, attr, itarget,fnend) {
	clearInterval(obj.time);
	obj.time = setInterval(function() {
		if (attr == 'opacity') {
			var cue = Math.round(parseFloat(getStyle(obj, attr)) * 100)
		} else {

			var cue = parseInt(getStyle(obj, attr))
		}
		var speed = (itarget - cue) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		cue += speed;
		if (cue == itarget) {
			clearInterval(obj.time)
			if(fnend){
				fnend();
			}

		} else {
			if (attr == "opacity") {
				obj.style.filter = 'alpha(opacity:' + cue + ')'
				obj.style.opacity = cue / 100;
			} else {
				obj.style[attr] = cue + 'px'
			}
		}

	}, 30)
}
function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name]
	} else {
		return getComputedStyle(obj)[name]
	}
}