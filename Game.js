class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }
  car1 = createSprite(100,200);
  car2 = createSprite(300,200);
  car3 = createSprite(500,200);
  car4 = createSprite(700,200)

  play(){
    form.hide();
    
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index = 0
      //var display_position = 130;
      var X = 0;
      var Y = 0;
      for(var plr in allPlayers){
index = index+1;
X = x+200;
y = displayHeight-allPlayers[plr].distance;
cars [index - 1].x = x;
cars [index - 1].y = y;





        if (index ===  player.index)
        {
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camer.position.y = cars[index - 1].Y;
          
        }
         

        
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
  }
}
