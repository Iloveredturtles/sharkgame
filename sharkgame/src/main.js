import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import SharkGame from './SharkGame'
import StartScene from './StartScene'
import GameOverScene from './GameOver'
import GameOver from './GameOver'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1000,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [StartScene,SharkGame,GameOver],
}

export default new Phaser.Game(config)
