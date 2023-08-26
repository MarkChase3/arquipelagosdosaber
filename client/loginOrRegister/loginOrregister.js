update['loginOrRegister'] = () => {
    ctx.drawImage(menuSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
    ctx.drawImage(menuSpr, 160, 0, 221, 90, 400, 0, 1768, 720)
    ctx.drawImage(loginOrRegisterSpr, 0, 0, 160, 90, pos, 0, 1280, 720)
    if(pos<0)pos+=12
    if(click && mousex > 230 && mousex < 410 && mousey < 230 && mousey > 190){
        room = 'login'
    }
    if(click && mousex > 230 && mousex < 410 && mousey < 170 && mousey > 130){
        room = 'register'
    }
}