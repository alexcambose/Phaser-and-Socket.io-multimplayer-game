export default class Player{
	constructor(id, game, x, y, angle){
		this.id = id;
		this.game = game;

		
		this.sprite = this.game.add.sprite(0, 0, 'arrow',100);
		this.sprite.scale.setTo(-.1,.1);
	    this.game.physics.arcade.enable(this.sprite);
	    this.sprite.body.collideWorldBounds = true;
	    this.sprite.inputEnabled = true;
	    this.sprite.anchor.setTo(0,0.5);
	    this.sprite.x = x;
	    this.sprite.y = y;
	    this.sprite.angle = angle;
	    this.sprite.body.allowRotation = false;
	}
	
	update(){
		this.sprite.rotation = this.game.physics.arcade.moveToPointer(this.sprite, 60, this.game.input.activePointer, 500);
	}
	setX(x){
		this.sprite.x = x;
		return this;
	}
	setY(y){
		this.sprite.y = y;
		return this;
	}
	setAngle(deg){
		this.sprite.angle = deg;
		return this;
	}
}