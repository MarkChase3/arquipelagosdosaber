let scrollingBoat = true, walkingPlayer = false, boatMoving = false;
update['deck'] = () => {
    if(scrollingBoat){
        ctx.drawImage(deckBackgroundSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
        ctx.drawImage(bigBoatSpr, 0, 0, 73, 90, -73*8, 0, 73*8, 720)
        ctx.drawImage(bigBoatSpr, 73, 0, 85, 90, 600, 0, 85*8, 720)
        ctx.drawImage(deckSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
        ctx.drawImage(boatBackgroundSpr, 0, 0, 160, 90, 0, pos, 1280, 720)
        simulateParticles(ctx)
        ctx.drawImage(boatSpr, 0, 0, 160, 90, 1280, pos, 1280*boatScale, 720*boatScale)
        pos += 5
        if(pos > 720){
            pos = -73*8
            scrollingBoat = false
        }
    } else if(!walkingPlayer){
        pos += 5 
        ctx.drawImage(deckBackgroundSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
        ctx.drawImage(bigBoatSpr, 0, 0, 73, 90, pos, 0, 73*8, 720)
        ctx.drawImage(bigBoatSpr, 73, 0, 85, 90, 600, 0, 85*8, 720)
        ctx.drawImage(deckSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
        if(pos > 0){
            pos = 0
            walkingPlayer = true
        }
    } else if(!boatMoving){
        pos += 5 
        ctx.drawImage(deckBackgroundSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
        ctx.drawImage(bigBoatSpr, 0, 0, 73, 90, 0, 0, 73*8, 720)
        ctx.drawImage(bigBoatSpr, 73, 0, 85, 90, 600, 0, 85*8, 720)
        ctx.drawImage(deckSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
        ctx.drawImage(playerDeckSpr, Math.floor(pos/50)*160, 0, 160, 90, 0, 0, 1280, 720)
        if(pos*160/50 > 3840){
            pos = 0
            boatMoving = true
        }
    } else {
        pos += 5 
        ctx.drawImage(deckBackgroundSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
        ctx.drawImage(bigBoatSpr, 0, 0, 73, 90, 0, 0, 73*8, 720)
        ctx.drawImage(bigBoatSpr, 73, 0, 85, 90, 600+pos, 0, 85*8, 720)
        ctx.drawImage(deckSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
        ctx.drawImage(playerDeckSpr,3925, 0, 160, 90, pos+655, 0, 1280, 720)
        if(pos > 700){
            room = 'islandSelect'
        }
    }
} 