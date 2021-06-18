class Game {
    constructor(){
  
    }
  
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

      redDuck = createSprite(200, 500);
      redDuck.addImage(redDuckImg);
      redDuck.scale = 0.5;

      blueDuck = createSprite(1200, 500);
      blueDuck.addImage(blueDuckImg);
      blueDuck.scale = 0.5;

      ducks = [redDuck, blueDuck];
    }

    play(){
      form.hide();

      Player.getPlayerInfo();

      if(allPlayers !== undefined){
        background(grass);

        image(burrowImg, 400, 200, 125, 60);
        image(burrowImg, 650, 200, 125, 60);
        image(burrowImg, 900, 200, 125, 60);
        image(burrowImg, 400, 400, 125, 60);
        image(burrowImg, 650, 400, 125, 60);
        image(burrowImg, 900, 400, 125, 60);
      }

      drawSprites();
    }

    end(){
      console.log("Game Over");
    }
}