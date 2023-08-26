update['menu'] = () => {
    ctx.drawImage(menuSpr, 0, 0, 221, 90, 0, 0, 1768, 720)
    ctx.drawImage(menuSpr, 160, 0, 221, 90, 400, 0, 1768, 720)
    if(click == pressed && mousex > 280 && mousex < 360 && mousey > 256 && mousey < 290){
        room = 'loginOrRegister'
        pos = -1280;
    }
}