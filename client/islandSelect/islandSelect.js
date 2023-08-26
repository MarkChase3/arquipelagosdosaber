update['islandSelect'] = () => {
    ctx.drawImage(islandBackgroundSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
    ctx.drawImage(deckBackgroundSpr, 0, 0, 160, 90, 0, pos, 1280, 720)
    ctx.drawImage(bigBoatSpr, 0, 0, 73, 90, 0, pos, 696, 720)
    ctx.drawImage(deckSpr, 0, 0, 160, 90, 0, pos, 1280, 720)  
    pos+=10
    islands.forEach(e=> {
        e.frame+=1/60*16
        ctx.drawImage(islandSpr, Math.min(Math.floor(e.frame)*160, 2720-160), 0, 160, 90, e.x, e.y, 640,360)
        if(click == pressed && Math.hypot(mousex-e.x, mousey-e.y)<200){
            room = 'game'
        }
    })
}