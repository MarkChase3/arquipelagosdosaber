let maps = Array.from({length:4}).map(e=>genMap(260,125))
update['mapChoose'] = () => {
    ctx.drawImage(mapChooseSpr, 0, 0, 320, 180, 0, 0, 1280, 720)
    renderMinimap(maps[0], 96, 128)
    renderMinimap(maps[1], 96, 393)
    renderMinimap(maps[2], 630, 128)
    renderMinimap(maps[3], 630, 393)
    if(click == pressed && mousex > 96 && mousex < 630+260 && mousey > 128 && mousey < 393 + 125){
        let id = Math.floor((mousey-128)/125)*2+Math.floor((mousex-96)/260)
        room = 'contents'
    }
}
function renderMinimap(map, x, y){
    for(let i = 0; i < map.length; i++)
        for(let j = 0; j < map[i].length; j++){
            ctx.fillStyle = ['#70a18f', '#74a0d1', '#70a18f', '#ffe0bd', '#4c2d17'][map[i][j]]
            ctx.fillRect(x+j*2,y+i*2,2,2)
        }
}