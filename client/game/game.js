let map = genMap(260, 125)
let gameHouses = []
let player = { x: 640, y: 360, prex: 640, prey: 360 }
let cam = { x: 64, y: 64 }
update['game'] = () => {
    ctx.save()
    ctx.translate(-cam.x, -cam.y)
    for (let i = Math.floor(cam.y / 32) - 2; i < Math.floor(cam.y / 32) + 25; i++)
        for (let j = Math.floor(cam.x / 32) - 1; j < Math.floor(cam.x / 32) + 41; j++) {
            if (map[i][j] != 4) ctx.drawImage(spr[map[i][j]], j * 32, i * 32)
            else ctx.drawImage(spr[2], j * 32, i * 32)
        }
    ctx.drawImage(playerSpr, 0, 0, 32, 32, player.x, player.y, 32, 32)
    player.x += axisX() * 3
    for (let i = Math.floor(cam.y / 32) - 2; i < Math.floor(cam.y / 32) + 25; i++)
        for (let j = Math.floor(cam.x / 32) - 1; j < Math.floor(cam.x / 32) + 41; j++)
            if (map[i][j] == 4) {
                ctx.drawImage(spr[map[i][j]], j * 32, i * 32)
                if (player.x + 32 > j * 32 && player.x < j * 32 + 64 && player.y + 32 > i * 32 && player.y < i * 32 + 96) {
                    player.x = player.prex
                }
            }
    player.y += axisY() * 3
    for (let i = Math.floor(cam.y / 32) - 2; i < Math.floor(cam.y / 32) + 25; i++)
        for (let j = Math.floor(cam.x / 32) - 1; j < Math.floor(cam.x / 32) + 41; j++)
            if (map[i][j] == 4) {
                if (player.x + 32 > j * 32 && player.x < j * 32 + 64 && player.y + 32 > i * 32 && player.y < i * 32 + 96) {
                    player.y = player.prey
                }
            }
    gameHouses.forEach(e=>{
        ctx.drawImage(houseSpr, 0, 0, 1500, 1500, e.local.x, e.local.y, 128, 128)
        if (player.x + 32 > e.local.x && player.x < e.local.x + 96 && player.y + 32 > e.local.y && player.y < e.local.y + 96) {
            room = 'insideHouse'
            currentHouse = e
        }
    })
    ctx.restore()
    if (Math.abs((cam.x + 640) - player.x) > 100 && Math.abs(cam.x - player.x) > 540) {
        cam.x += (player.x - player.prex)
    } else {
        cam.x += (player.x - (cam.x + 640)) * 0.1
    }
    if (Math.abs((cam.y + 360) - player.y) > 100 && Math.abs(cam.y - player.y) > 260) {
        cam.y += (player.y - player.prey)
    } else {
        cam.y += (player.y - (cam.y + 360)) * 0.1
    }
    cam.x = Math.max(64, Math.min(cam.x, (map[0].length - 41) * 32))
    cam.y = Math.max(64, Math.min(cam.y, (map.length - 25) * 32))
    player.prex = player.x
    player.prey = player.y
}