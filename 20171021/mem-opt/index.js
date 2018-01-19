window.main = new Main();

window.onload = ()=> {
	document.getElementById('btn').addEventListener('click', destory);
};

function destory() {
	window.main.destory();
}