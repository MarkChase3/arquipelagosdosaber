let islands = []
update['island'] = () => {
    ctx.drawImage(islandBackgroundSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
    pos+=10
    islands.forEach(e=> {
        e.frame+=1/60*16
        ctx.drawImage(islandSpr, Math.min(Math.floor(e.frame)*160, 2720-160), 0, 160, 90, e.x, e.y, 640,360)
        if(click == pressed && Math.hypot(mousex*2-(e.x+360), mousey*2-(e.y+180))<100){
            room = 'mapChoose'
        }
    })
    if(click == pressed && room != 'mapChoose'){
        islands.push({x:mousex*2-360, y:mousey*2-180, frame: 0})
        fetch('/island/new', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },        
            'body': JSON.stringify({
                id: id.text.toUpperCase(),
                x:mousex*2,
                y:mousey*2
            })
        })
    }
}