import 'pixi';
import 'p2';
import Phaser from 'phaser';


import config from './config';
import GameState from './states/game';

class game extends Phaser.Game{
	constructor(){
		super(config.width,config.height,Phaser.AUTO);
		this.state.add('GameState',GameState);
		this.state.start('GameState');
	}
}


const newgame = new game();