class Scene1 extends AdventureScene {
    constructor() {
        super("scene1", "The Meadow");
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('player', 'player.png');
        this.load.image('flower', 'flower.png');
        this.load.image('back', 'back.png');
        this.load.image('arrow', 'arrow.png');
        this.load.image('dog', 'dog.png');
    }

    onEnter() {
    // Create a background image

    this.dog = this.add.image(
        100,//x
        400,//y
        'dog',//imagename
        )
        this.dog.setDepth(1)
        this.dog.setScale(.5) //resize
    .setInteractive()
    .on('pointerover', () => {
        this.showMessage('So fast!');
        this.dog.setDepth(1)
        this.tweens.add({
            targets: this.dog,
            x: this.s + (this.h - 2 * this.s) * Math.random(),
            y: this.s + (this.h - 2 * this.s) * Math.random(),
            ease: 'Sine.inOut',
            duration: 500
        });
    })
    .on('pointerdown', () => {
        this.showMessage("Your name shall be Beanie.");
        this.gainItem('dog');
        this.tweens.add({
            targets: this.dog,
            y: `-=${2 * this.s}`,
            alpha: { from: 1, to: 0 },
            duration: 500,
            onComplete: () => this.dog.destroy()
        });
    })

        this.player = this.add.image(
            400,//x
            860,//y
            'player',//imagename
            )
            this.player.setDepth(1)
            this.player.setScale(1.5) //resize
        //let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
        //let player = this.add.image("player")
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("I feel as though I am being touched by forces beyond this world. Creepy."))
            .on('pointerdown', () => {
                this.showMessage("Cut it out!");
                this.tweens.add({
                    targets: this.player,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

            //let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            this.flower = this.add.image(
                600,//x
                950,//y
                'flower',//imagename
                )
                this.flower.setDepth(1)
                this.flower.setScale(1) //resize
            //.setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("This is a interesting flower.")
            })
            .on('pointerdown', () => {
                this.showMessage("I think I'll hold onto it for a while.");
                this.gainItem('flower');
                this.tweens.add({
                    targets: this.flower,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.flower.destroy()
                });
            })
            const fxadow = this.flower.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.flower,
            //scale: 1.05,
            scale: 1.2,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxadow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })


        

        this.arrow = this.add.image(
            1200,//x
            900,//y
            'arrow',//imagename
            )
            this.arrow.setDepth(1);
            this.arrow.setScale(.5) //resize
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("flower")) {
                    this.showMessage("Maybe there are more flowers in the woods.");
                } else {
                    this.showMessage("Maybe I should pick a flower before I go since they are so beautiful.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("flower")) {
                    //this.loseItem("flower");
                    this.showMessage("*la la la*");
                    //door.setText("🚪 unlocked door");
                    this.gotoScene('scene2');
                }
            })
            const fxshadow = this.arrow.preFX.addShadow(0, 0, 0.002, 1, 0x333333, 5); // reduce blur, quality, and distance
        this.add.tween({
            targets: this.arrow,
            //scale: 1.05,
            scale: .55,
            duration: 800,
            yoyo: true,
            repeat: -1
        });
        this.add.tween({
            targets: fxshadow,
            x: 5,
            y: -5,
            duration: 800,
            yoyo: true,
            repeat: -1
        })

            const myBackground = this.add.image(0, 0, 'back');
            myBackground.setOrigin(0);
            myBackground.setDepth(0);
            
            this.flower.background = this.back;
            this.player.background = this.back;
            this.arrow.background = this.back;
            this.dog.background = this.back;
        

    }
}
class S0 extends Phaser.Scene {
    constructor() {
        super('s0');
    }
    create() {
    this.cameras.main.setBackgroundColor('#000000');

    this.textObject0 = this.add.text(
            600, //x
            350,//y
            "tap to progress", //text
            {
                font: "100px Arial",
                color: "#FFFFFF",
                align: "center"
            } //style
        );
    //textObject0.setAlpha(1);
    this.tweens.add({
        targets: this.textObject0,
        alpha:0,
        duration: 2000,
        repeat: -1,
    });
    //textObject0.setAlpha(1);
    this.tweens.add({
        targets: this.textObject8,
        alpha:0,
        duration: 2000,
        repeat: -1,
    });

    this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    preload(){
        this.load.path = "./assets/";
        this.load.audio('logos', 'logos.wav');
        this.load.spritesheet('slogo', 'slogo.png', {
            frameWidth: 500,
            frameHeight: 500
        });
        
    }
    create() {
        
        this.cameras.main.setBackgroundColor('#ffffff');

        const backgroundMusic = this.sound.add('logos', { loop: false });
        backgroundMusic.play();
        

        this.imageObject2 = this.add.sprite(
            900,//x
            500,//y
            'slogo',//imagename
        );

        this.imageObject2.setScale(1); //resize
        this.anims.create({
            key: 'slogo',
            frames: this.anims.generateFrameNumbers('slogo', {
                start: 0,
                end: 11
            }),
            frameRate: 7,
            repeat: 0
        });
        this.imageObject2.anims.play('slogo', true);

        this.imageObject2.setScale(2); //resize

        
        this.time.delayedCall(2000, () => {
            this.tweens.add({
                targets: this.imageObject2,
                alpha:0,
                duration: 2000,
                //ease: 'Linear',
                repeat: 0,
                onComplete: () => {
                    this.textObject8 = this.add.text(
                        850, //x
                        420,//y
                        "tap", //text
                        {
                            font: "60px Arial",
                            color: "#00000",
                            align: "center"
                        } //style
                    );
                    //textObject0.setAlpha(1);
                    this.tweens.add({
                        targets: this.textObject8,
                        alpha:0,
                        duration: 2000,
                        repeat: -1,
                    });
                }
            });
        }, null, this);
        
        this.input.on('pointerdown', () => this.scene.start('title'));
    }
}

class Title extends Phaser.Scene {
    constructor() {
        super('title')
    }
    preload() {
        this.load.path = "./assets/";
        this.load.image('title', 'title.png');
        
        this.load.spritesheet('playerIdle', 'playerIdle.png', {
            frameWidth: 48,
            frameHeight: 48
        });
    }
    create() {
        this.cameras.main.setBackgroundColor('0xadd8e6');

        this.imageObject = this.add.sprite(
            1500,//x
            700,//y
            'playerIdle',//imagename
        );
        this.imageObject.setScale(10); //resize
        this.anims.create({
            key: 'playerIdle',
            frames: this.anims.generateFrameNumbers('playerIdle', {
                start: 0,
                end: 3
            }),
            frameRate: 7,
            repeat: -1
        });
        this.imageObject.anims.play('playerIdle', true);

        
        //this.image.add()
        this.titleob = this.add.image(
            1500,//x
            650,//y
            'title',//imagename
            )
            //this.title.setDepth(1)
            this.titleob.setScale(15) //resize
        //this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        //this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        const playText = this.add.text(300, 600, 'PLAY', { fontSize: '100px', fill: '#fff' });
        playText.setInteractive();
        playText.on('pointerover', () => {
            playText.setStyle({ fill: '#ff0' });
        });
        playText.on('pointerout', () => {
            playText.setStyle({ fill: '#fff' });
        });
        playText.on('pointerdown', () => {
            this.scene.start('scene1');
        });
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [S0, Intro, Title, Scene1],
    title: "Adventure Game",
});