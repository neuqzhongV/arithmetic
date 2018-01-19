class Drag {
	static startDrag(dis) {
		let p = {};
		dis.addEventListener('mousedown', touchStart);

		function touchStart(e) {
	    	p = {x: e.data.global.x, y: e.data.global.y} 
	    	this.addEventListener('mousemove', touchMove);
	    	this.addEventListener('mouseup', touchUp);
	    }

	    function touchMove(e) {
	    	let dx = e.data.global.x - p.x;
	    	let dy = e.data.global.y - p.y;
	    	p = {x: e.data.global.x, y: e.data.global.y} 
	    	dis.x += dx;
	    	dis.y += dy;
	    }

	    function touchUp() {
	    	this.removeEventListener('mousemove', touchMove);
	    	this.removeEventListener('mouseup', touchUp);
	    }
	}
}