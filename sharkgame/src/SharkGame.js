import Phaser from "phaser";
export default class SharkGame extends Phaser.Scene {
    constructor() {
        super("shark-game");
    }
    init() {
        this.player = undefined;
        this.cursors = this.input.keyboard.createCursorKeys()
        this.trash = undefined;
        this.score = 0;
    }
    preload() {
        this.load.image("sea", "../public/Assets/image/sea_background.png")
        this.load.image("ground", "../public/Assets/image/foreground.png")
        this.load.image("ground2", "../public/Assets/image/farground.png")
        this.load.image("bubble", "../public/Assets/image/bubble.png")
        this.load.image("sea", "../public/Assets/image/sea_background.png" )
        this.load.image("trash", "../public/Assets/image/trash1.png")
        this.load.image("trash2", "../public/Assets/image/trash2.png")
        this.load.image("trash3", "../public/Assets/image/trash3.png")
        this.load.image("shark", "../public/Assets/image/Shark.gif")
        this.load.spritesheet("fishes","../public/Assets/image/fish.png", {
            frameWidth : 16,
            frameHeight : 16,
        });

    }
    create() {
        this.add.image(900,500, "sea");
        this.add.image(450,320, "ground2").setScale(0.6);
        this.add.image(450,300, "ground").setScale(0.6);
        this.player = this.physics.add.sprite(450,400, "shark").setScale(3.9);
        this.player.setCollideWorldBounds(true)
        // this.add.image(400,300, "trash").setScale(3);
        // this.add.image(400,200, "trash2").setScale(3);
        // this.add.image(400,100, "trash3").setScale(3);
        // this.trash = this.physics.add.group({
        //     classType: FallingObject,
        //     maxSize: 10,
        //     runChildUpdate: true,
        // }) 
        this.trash = this.physics.add.group()
        this.time.addEvent({
            delay: 3000,
            callback: this.spawnTrash,
            callbackScope: this,
            loop: true,
        }); 
        this.time.addEvent({
            delay: 3000,
            callback: this.spawnTrash2,
            callbackScope: this,
            loop: true,
        });
        this.time.addEvent({
            delay: 3000,
            callback: this.spawnTrash3,
            callbackScope: this,
            loop: true,
        });

        this.physics.add.overlap(this.player, this.trash, this.collectTrash, null, this);
        this.physics.add.overlap(this.player, this.trash, this.collectTrash2, null, this);

        this.scoreText = this.add.text(240, 10, "Score: 0", {
            color: "#000", 
            // @ts-ignore
            fontSize: 24 
         }).setScrollFactor(0);
        
    }
    update() {
  
        const speed = 200
        

        if(this.cursors.left.isDown){
            this.player.setVelocityX(speed*-1)
            this.player.setFlipX(false)
        }
        else if(this.cursors.right.isDown){
            this.player.setVelocityX(speed)
            this.player.setFlipX(true)
        }
        else if(this.cursors.up.isDown){
            this.player.setVelocityY(speed*-1)
            this.player.setFlipX(false)
        }
        else if(this.cursors.down.isDown){
            this.player.setVelocityY(speed)
            this.player.setFlipX(false)
        }
        else {
            this.player.setVelocity(0,0)
           
        }
        

    }
    spawnTrash(){
   
        var bomb = this.trash.create(Phaser.Math.Between(100,1200),10 , 'trash')
        bomb.setScale(3)
        bomb.setCollideWorldBounds(false)
        bomb.setVelocity(1) 
    } spawnTrash2(){
        var bomb = this.trash.create(Phaser.Math.Between(100,1200),10 , 'trash2')
        bomb.setScale(3)
        bomb.setCollideWorldBounds(false)
        bomb.setVelocity(1) 
    }  spawnTrash3(){
        var bomb = this.trash.create(Phaser.Math.Between(100,1200),10 , 'trash3')
        bomb.setScale(3)
        bomb.setCollideWorldBounds(false)
        bomb.setVelocity(1) 
    } 
    collectTrash(player, trash){
    trash.destroy()

    this.score += 10;
    this.scoreText.setText('score : '+this.score);
  }  collectTrash2(player, trash2){
    trash2.destroy()

    this.score += 10;
    this.scoreText.setText('score : '+this.score);
  } 
  gameOver(){
    if (this.score>10) {
        this.scene.start("over-scene", {score: this.score});
    }
   }
}
