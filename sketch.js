var bg, bgImg;
var player,playerImg;
var npc,npcImg;
var npcGroup;

function preload(){
    bgImg = loadImage("transformerbackground.jpg");
    playerImg = loadImage("transformers1v3.png");
    npcImg = loadImage("transformer2v2.png")
    
}

function setup(){
    createCanvas(700,600)

    bg = createSprite(600,300);
    bg.addImage(bgImg);
    bg.velocityX = -3;
    bg.scale = 1.5;

    player = createSprite(55,470);
    player.addImage(playerImg);
    player.scale = 0.3;

    npcGroup = new Group;

    
}

function draw(){
    background(0);
    
    if(bg.x < 150){
        bg.x = bg.width/2;
    }

    if(keyDown("UP_ARROW")){
        player.y = player.y-4;
    }

    if(keyDown("DOWN_ARROW")){
        player.y = player.y+4;
    }
    
    if(keyDown("RIGHT_ARROW")){
        player.x = player.x+2;
    }

    if(keyDown("LEFT_ARROW")){
        player.x = player.x-2;
    }

    spawnNpc();
    drawSprites();
}

function spawnNpc(){
    if(World.frameCount % 150 === 0){
        npc = createSprite(700,300);
        npc.addImage(npcImg);
        npc.velocityX = -3;
        npcGroup.add(npc);
        npc.scale = 0.2
    }
}