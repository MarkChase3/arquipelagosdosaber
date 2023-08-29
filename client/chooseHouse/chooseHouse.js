let canPlace = true
update['chooseHouse'] = () => {
    ctx.save()
    ctx.translate(-cam.x, -cam.y)
    for (let i = Math.floor(cam.y / 32) - 2; i < Math.floor(cam.y / 32) + 25; i++)
        for (let j = Math.floor(cam.x / 32) - 1; j < Math.floor(cam.x / 32) + 41; j++) {
            if (map[i][j] != 4) ctx.drawImage(spr[map[i][j]], j * 32, i * 32)
            else ctx.drawImage(spr[2], j * 32, i * 32)
        }
    canPlace = true
    player.x += axisX() * 3
    for (let i = Math.floor(cam.y / 32) - 2; i < Math.floor(cam.y / 32) + 25; i++)
        for (let j = Math.floor(cam.x / 32) - 1; j < Math.floor(cam.x / 32) + 41; j++)
            if (map[i][j] == 4) {
                ctx.drawImage(spr[map[i][j]], j * 32, i * 32)
                if (player.x + 64 > j * 32 && player.x < j * 32 + 64 && player.y + 64 > i * 32 && player.y < i * 32 + 96) {
                    canPlace = false
                }
            }
    if(keys['Enter']){
        fetch('/island/content', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },        
            'body': JSON.stringify({
                name: name.text,
                id: id.text.toUpperCase(),
                password: password.text,
                number: indexIsland,
                content: JSON.stringify({local:{x:player.x, y:player.y}, text: contents[indexIsland].text, name: houses[indexIsland].text, question: question.text, answers: answers.map(e=>e.text), right: right})
            })
        })
        room = 'contents'
    }
    if(canPlace)ctx.drawImage(houseSpr, 0, 0, 1500, 1500, player.x, player.y, 128, 128)
    player.y += axisY() * 3
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