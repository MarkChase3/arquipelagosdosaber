update['intro'] = () => {
    ctx.save()
    ctx.translate(-cam.x, -cam.y)
    for(let y  = 0; y < introMap[1].length; y++)
    for(let x  = 0; x < introMap[1][y].length; x++){
        ctx.drawImage(tileset1IntroSpr, 0, introMap[1][y][x]*32, 32, 32, x*32*2, y*32*2, 32*2, 32*2)
    }
    for(let y  = 0; y < introMap[0].length; y++)
    for(let x  = 0; x < introMap[0][y].length; x++){
        ctx.drawImage(tileset2IntroSpr, 0, introMap[0][y][x]*32, 32, 32, x*32*2, y*32*2, 32*2, 32*2)
    }
    ctx.drawImage(playerSpr, 0, 0, 32, 32, player.x, player.y, 64, 64)
    ctx.restore()
    player.x += axisX() * 3
    for(let y  = 0; y < introMap[0].length; y++)
    for(let x  = 0; x < introMap[0][y].length; x++){
        if(introMap[0][y][x] > 0 && x*32*2 + 32*2 > player.x && x*32*2 < player.x + 32*2 && y*32*2 + 32*2 > player.y && y*32*2 < player.y + 32*2){
            player.x -= axisX() * 3
        }
    }
    player.y += axisY() * 3
    for(let y  = 0; y < introMap[0].length; y++)
    for(let x  = 0; x < introMap[0][y].length; x++){
        if(introMap[0][y][x] > 0 && x*32*2 + 32*2 > player.x && x*32*2 < player.x + 32*2 && y*32*2 + 32*2 > player.y && y*32*2 < player.y + 32*2){
            player.y -= axisY() * 3
        }
    }
    if (Math.abs((cam.x + 640) - player.x) > 100 && Math.abs((cam.x + 640) - player.prex)<=Math.abs((cam.x + 640) - player.x)) {
        cam.x += (player.x - player.prex)
    } else {
        cam.x += (player.x - (cam.x + 640)) * 0.1
    }
    if (Math.abs((cam.y + 360) - player.y) > 100 && Math.abs((cam.y + 360) - player.prey)<=Math.abs((cam.y + 360) - player.y)) {
        cam.y += (player.y - player.prey)
    } else {
        cam.y += (player.y - (cam.y + 360)) * 0.1
    }
    cam.x = Math.max(0, Math.min(cam.x, (introMap[0][0].length - 20) * 32 * 2))
    cam.y = Math.max(0, Math.min(cam.y, (introMap[0].length - 12) * 32 * 2))
    player.prex = player.x
    player.prey = player.y
    if(player.y < 96){
        room = 'game'
        player.y = map.length*32-512
        cam.y = player.y - 360
        player.x = map[0].length*32/2-512
        cam.x = player.x - 640
    }
}