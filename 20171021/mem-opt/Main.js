class Main {
	constructor() {
		window.instance = this;
		this.instance = PIXI.autoDetectRenderer(1024, 768, {
			transparent: true,
			resolution: 1
		}, false);
		document.body.appendChild(this.instance.view);

		this.stage = new NBSprite();
		let gra = new Gra();
		let flag = false;

		this.stage.addChild(gra);
		Drag.startDrag(gra);

		this.render();
	}

	render() {
		window.id = window.requestAnimationFrame(this.render.bind(this));
		instance.instance.render(this.stage);
	}

	/**
	 *  销毁方法
	 */
	destory() {
		// 只能在这个方法里面修改
		window.cancelAnimationFrame(window.id);
		delete this.instance.plugins.interaction.eventData.target;
		delete this.instance._lastObjectRendered;
		delete PIXI.Texture.EMPTY._events.update.context;
		delete window.main;
		delete window.instance;
	}
}