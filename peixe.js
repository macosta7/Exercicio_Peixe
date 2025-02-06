var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
        }
    
};

var game = new Phaser.Game(config);
let caranguejo;
var nemo;
var nemoOldX;

function preload() { 
    this.load.image('fundoDoMar','assets/fundoDoMar.png');
    this.load.image('logo','assets/logo-inteli_branco.png');
    this.load.image('nemo','assets/peixes/nemo.png');
    this.load.image('dori','assets/peixes/dori.png');
    this.load.image('tartaruga','assets/peixes/tartaruga.png');
    this.load.image('planta','assets/planta.png');
    this.load.image('coral','assets/coral.png');
    this.load.image('caranguejo', 'assets/peixes/caranguejo.png');
}

function create() { 
    this.add.image(400, 300, 'fundoDoMar');
    this.add.image(400, 50, 'logo').setScale(0.5);

    nemo = this.add.image(400, 300, 'nemo');

    this.add.image(150,475, 'planta').setScale(0.8);
    this.add.image(650,475, 'coral').setScale(0.7);

    this.add.image(150,95, 'dori').setScale(0.8);
    this.add.image(650,90, 'tartaruga').setScale(0.35);

    caranguejo = this.add.image(750,565, 'caranguejo');
    caranguejoIda = false;
}

function update() { 
    nemo.x = this.input.x;
    nemo.y = this.input.y;

    if(nemo.x > this.nemoOldX){
        nemo.setFlip(false,false);
    }
    
    if(nemo.x < this.nemoOldX){
        nemo.setFlip(true,false);
    }
    
    this.nemoOldX = this.input.x;


    if(caranguejo.x <= 50){
        caranguejo.setFlip(true, false);
        caranguejoIda = true;
    }

    if(caranguejo.x >= 750){
        caranguejo.setFlip(false, false);
        caranguejoIda = false;
    }

    if(caranguejoIda){
        caranguejo.x += 2.5;
    }
    else{
        caranguejo.x -= 2.5;
    }
}