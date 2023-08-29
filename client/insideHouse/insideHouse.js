let housePlayer = {x: 350, y: 600}
let contentRendering = false
let currentHouse
update['insideHouse'] = () => {
    ctx.drawImage(backgroundHouseSpr, 0, 0, 242, 134, -5, -5, 1300, 730)
    ctx.drawImage(notepadSpr, 0, 0, 55, 27, 950, 150, 275, 135)
    ctx.drawImage(playerSpr, 0, 0, 32, 32, housePlayer.x, housePlayer.y, 64, 64)
    housePlayer.x += axisX() * 3
    housePlayer.y += axisY() * 3
    housePlayer.y = Math.min(610, Math.max(160, housePlayer.y))
    housePlayer.x = Math.min(1230, Math.max(20, housePlayer.x))
    if(housePlayer.y == 610 && housePlayer.x > 320 && housePlayer.x < 380){
        room = 'exam'
        player.x = currentHouse.x+32
        player.y = currentHouse.y+96
    }
    if(housePlayer.y < 300 && housePlayer.x > 950){
        contentRendering = true
    } else {
        contentRendering = false
    }
    if(contentRendering){
        ctx.drawImage(bookSpr, 0, 0, 640, 360, 150, 80, 1280, 720)
        text(ctx, currentHouse.text, font, 300, 160)
    }
}