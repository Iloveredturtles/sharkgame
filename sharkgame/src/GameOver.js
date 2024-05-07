import Phaser from "phaser";
export default class GameOver extends Phaser.Scene {
    constructor() {
        super("over-scene");
    }
    init(data) {
        this.replayButton = undefined;
        this.score = data.score;
    }
    preload() {
        this.load.image("../public/Assets/image/replaybutton.png")
    }
    create() {

        
        this.replayButton = this.add.image(400, 400, "replaybutton").setInteractive()
        this.replayButton.once("pointerup", () => {
            this.scene.start("shark-game");
        }, this)
    }
}