class Game{
    constructor(){

    }
     barrier(x,y,w,h){
      
        stop = createSprite(x,y,w,h);
        stopGroup.add(stop);
      }
      
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                mapSprite = createSprite(1000,600,200,200)
  mapSprite.addImage("map",map);
  mapSprite.scale = 1.4;
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,400);
    player1.addImage("player1",player_img);
    player1.scale = .13;
    player2 = createSprite(800,400);
    player2.addImage("player2", player2_img);
    player2.scale = .2;
    player3 = createSprite(900,400);
    player3.addImage("player3", player3_img);
    player3.scale = .2;
    players=[player1,player2,player3];
        }
    
    play(){

                form.hide();

                Player.getPlayerInfo();
                
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
         
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500-allPlayers[plr].height;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;

                     //checks
                     if(index === player.index){

                 /*   game.textInfo(players[index - 1],`12345678901234567
1234567890123456789012
1234567890123456789012
1234567890123456789012
1234567890123456789012`)*/
//checks
if(player1.isTouching(camper) && player.index === 1){
    game.textInfo(players[index - 1],`Camp victim:
I was a survivor from the
 attacks in 1975.I came 
 here to meet another
survivor, but he didnt show`)
 }
 if(player2.isTouching(camper) && player.index === 2){
  game.textInfo(players[index - 1],`Camp victim:
  I was a survivor from the
   attacks in 1975.I came 
   here to meet another
  survivor, but he didnt show`)
}
if(player3.isTouching(camper) && player.index === 3){
  game.textInfo(players[index - 1],`Camp victim:
  I was a survivor from the
   attacks in 1975.I came 
   here to meet another
  survivor, but he didnt show`)
}
if(player1.isTouching(owner) && player.index === 1){
  game.textInfo(players[index - 1],`Camp Owner:
I own this camp and love it more 
than anything. I was attacked and
 stabbed by the killer in my office
but I easily held off his puny knife.`)
}
if(player2.isTouching(owner) && player.index === 2){
game.textInfo(players[index - 1],`Camp victim:
15 years uwu
1234567890123456789012
234567890123456789012
1234567890123456789012`)
}
if(player3.isTouching(owner) && player.index === 3){
game.textInfo(players[index - 1],`Camp victim:
15 years uwu
1234567890123456789012
234567890123456789012
1234567890123456789012`)
}
if(player1.isTouching(wife) && player.index === 1){
  game.textInfo(players[index - 1],`Mrs Owner:
15 years uwu
1234567890123456789012
234567890123456789012
1234567890123456789012`)
}
if(player2.isTouching(wife) && player.index === 2){
game.textInfo(players[index - 1],`Camp victim:
15 years uwu
1234567890123456789012
234567890123456789012
1234567890123456789012`)
}
if(player3.isTouching(wife) && player.index === 3){
game.textInfo(players[index - 1],`Camp victim:
15 years uwu
1234567890123456789012
234567890123456789012
1234567890123456789012`)
}
if(player1.isTouching(check1) && player.index === 1){
  game.textInfo(players[index - 1],`Player 1's
  Car,
  Enjoys Nature, Books,
  Hunting`)
}
if(player2.isTouching(check1) && player.index === 2){
game.textInfo(players[index - 1],`Player 1's
Car,
Enjoys Nature, Books,
Hunting`)
}
if(player3.isTouching(check1) && player.index === 3){
game.textInfo(players[index - 1],`Player 1's
Car,
Enjoys Nature, Books,
Hunting`)
}
if(player1.isTouching(check2) && player.index === 1){
  game.textInfo(players[index - 1],`Player 2's
  Car`)
}
if(player2.isTouching(check2) && player.index === 2){
game.textInfo(players[index - 1],`Player 2's
Car`)
}
if(player3.isTouching(check2) && player.index === 3){
game.textInfo(players[index - 1],`Player 2's
Car`)
}
if(player1.isTouching(check3) && player.index === 1){
  game.textInfo(players[index - 1],`Player 3's
  Car`)
}
if(player2.isTouching(check3) && player.index === 2){
game.textInfo(players[index - 1],`Player 3's
Car`)
}
if(player3.isTouching(check3) && player.index === 3){
game.textInfo(players[index - 1],`Player 3's
Car`)
}
if(player1.isTouching(check4) && player.index === 1){
  game.textInfo(players[index - 1],`The entrance to the 
  home. The door is locked.`)
}
if(player2.isTouching(check4) && player.index === 2){
game.textInfo(players[index - 1],`The entrance to the 
home. The door is locked.`)
}
if(player3.isTouching(check4) && player.index === 3){
game.textInfo(players[index - 1],`The entrance to the 
home. The door is locked.`)
}
if(player1.isTouching(check5) && player.index === 1){
  game.textInfo(players[index - 1],`The killers
  Hideout From 1970.`)
}
if(player2.isTouching(check5) && player.index === 2){
game.textInfo(players[index - 1],`The killers
Hideout From 1970.`)
}
if(player3.isTouching(check5) && player.index === 3){
game.textInfo(players[index - 1],`The killers
Hideout From 1970.`)
}
if(player1.isTouching(check6) && player.index === 1){
  game.textInfo(players[index - 1],`The owners office.
  There are documents
 and books in the back.`)
}
if(player2.isTouching(check6) && player.index === 2){
game.textInfo(players[index - 1],`The owners office.
There are documents
and books in the back.`)
}
if(player3.isTouching(check6) && player.index === 3){
game.textInfo(players[index - 1],`The owners office.
There are documents
and books in the back.`)
}
if(player1.isTouching(check8) && player.index === 1){
  game.textInfo(players[index - 1],`All players must be
 present in order to enter.`)
}
if(player2.isTouching(check8) && player.index === 2){
game.textInfo(players[index - 1],`All players must be
present in order to enter.`)
}
if(player3.isTouching(check8) && player.index === 3){
game.textInfo(players[index - 1],`All players must be
present in order to enter.`)
}

if(player1.isTouching(check9) && player.index === 1){
camp1970.y =1503;

}else{
  if(player.index === 1){
  camp1970.y = -10000;
  }}
if(player2.isTouching(check9) && player.index === 2){
  camp1970.y =1503;

}else{
  if(player.index === 2){
  camp1970.y = -10000;
  }

}
if(player3.isTouching(check9) && player.index === 3){
  camp1970.y =1503;

}else{
  if(player.index === 3){
  camp1970.y = -10000;
  }
}
if(player1.isTouching(pills) && player.index === 1){
  game.textInfo(players[index - 1],`These are
  your pills. Avoid letting
  other playes see them.`)
}
if(player2.isTouching(pills) && player.index === 2){
game.textInfo(players[index - 1],`A bottle of 
Pills. Inside are several
Xanax and Antidepressants`)
}
if(player3.isTouching(pills) && player.index === 3){
game.textInfo(players[index - 1],`A bottle of 
Pills. Inside are several
Xanax and Antidepressants`)
}



if(player1.isTouching(check8) && player3.isTouching(check8) && player2.isTouching(check8)){
  check7.y = -10000;
  check8.y = -100020;

}

                     }


                     if(index === player.index){
                         fill("white");
                         textSize(25);
                         text(allPlayers[plr].name ,x-45,y-55);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                       
                        
                
         
         
                 }
                 if(player.index === 1){
                    if(keyDown("space")){
                        player.height = -2500;
                        player.distance = -400;
                        player.update();

                    }
                    if(keyWentUp("d")){
                        player.distance += 20
                        player.update();

                    }
                    if(keyWentUp("a")){
                        player.distance -= 20
                        player.update();

                    }
                    if(keyWentUp("w")){
                        player.height -= 20
                        player.update();

                    }
                    if(keyWentUp("s")){
                        player.height += 20
                        player.update();

                    }
              
                
                 for (var i = 0; i < stopGroup.length; i++) {
                    if (keyDown("d") && player.index !== null) {
                        //game.bounce();
                      //  camera.x = camera.x+4
                      if(player1.isTouching(stopGroup) === false){
                        player.distance -= speed
                      }
                                           //   player.distance -= 3

                        player.update();
                    }
                    if (keyDown("a") && player.index !== null) {
                       // game.bounce();
                        //camera.x = camera.x-4
                        if(player1.isTouching(stopGroup) === false){
                          player.distance += speed
                        }                  
                       //  player.distance += 3
                         player.update();
                    }
                    if (keyDown("w") && player.index !== null) {
                        //camera.y = camera.y-4
                        if(player1.isTouching(stopGroup) === false){
                          player.height += speed
                        }   
                         //player.height += 3
                         player.update();
                    }
                    if (keyDown("s") && player.index !== null) {
                       // camera.y = camera.y+4
                       if(player1.isTouching(stopGroup) === false){
                        player.height -= speed
                      }                    
                     //player.height -= 3
                     player.update();
                    }
                }
            }
            if(player.index === 2){
              if(keyDown("space")){
                player.height = -2500;
                player.distance = -400;
                player.update();

            }
                if(keyWentUp("d")){
                    player.distance += 20
                    player.update();

                }
                if(keyWentUp("a")){
                    player.distance -= 20
                    player.update();

                }
                if(keyWentUp("w")){
                    player.height -= 20
                    player.update();

                }
                if(keyWentUp("s")){
                    player.height += 20
                    player.update();

                }
                 for (var i = 0; i < stopGroup.length; i++) {
                    if (keyDown("d") && player.index !== null) {
                        //game.bounce();
                      //  camera.x = camera.x+4
                      if(player2.isTouching(stopGroup) === false){
                        player.distance -= speed

                      }

                        player.update();
                    }
                    if (keyDown("a") && player.index !== null) {
                    
                        if(player2.isTouching(stopGroup) === false){
                          player.distance += speed

                         
                         }                     
                         player.update();
                    }
                    if (keyDown("w") && player.index !== null) {
                        //camera.y = camera.y-4
                        if(player2.isTouching(stopGroup) === false){
                          player.height += speed
                        }   
                         player.update();
                    }
                    if (keyDown("s") && player.index !== null) {
                       // camera.y = camera.y+4
                       if(player2.isTouching(stopGroup) === false){
                        player.height -= speed

                     }                 

                     player.update();
                    }
                }
            }
            if(player.index === 3){
              if(keyDown("space")){
                player.height = -2500;
                player.distance = -400;
                player.update();

            }
                if(keyWentUp("d")){
                    player.distance += 20
                    player.update();

                }
                if(keyWentUp("a")){
                    player.distance -= 20
                    player.update();

                }
                if(keyWentUp("w")){
                    player.height -= 20
                    player.update();

                }
                if(keyWentUp("s")){
                    player.height += 20
                    player.update();

                }
                 for (var i = 0; i < stopGroup.length; i++) {
                    if (keyDown("d") && player.index !== null) {
                        //game.bounce();
                      //  camera.x = camera.x+4
                      if(player3.isTouching(stopGroup) === false){
                        player.distance -= speed
                      }

                        player.update();
                    }
                    if (keyDown("a") && player.index !== null) {
                       // game.bounce();
                        //camera.x = camera.x-4
                        if(player3.isTouching(stopGroup) === false){
                          player.distance += speed
                         }              
                         player.update();
                    }
                    if (keyDown("w") && player.index !== null) {
                        //camera.y = camera.y-4
                        if(player3.isTouching(stopGroup) === false){
                          player.height += speed
                        
                         }          
                         player.update();
                    }
                    if (keyDown("s") && player.index !== null) {
                       // camera.y = camera.y+4
                       if(player3.isTouching(stopGroup) === false){
                        player.height -= speed
                      }            
                     player.update();
                    }
                }
            }
         
            
            if(frameCount%550 === 1){
              pills = createSprite(player1.x,player1.y,50,50)
              pills.addImage(pillsIMG);
              pills.scale = 0.1;
             }
    }

    end(){
       console.log("Game Ended");
    }





textInfo(playerNumber,clue){
  fill("white")
rect(playerNumber.x+30,playerNumber.y,150,72)
fill("black")
textSize(12);
text(clue,playerNumber.x+30,playerNumber.y+10)
}
}