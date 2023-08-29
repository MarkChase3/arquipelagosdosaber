update['exam'] = () => {
    ctx.drawImage(avaliationSpr, 0, 0, 128, 72, 0, 0, 1280, 720)
    ctx.drawImage(avaliationQuestionSpr, 0, 0, 128, 72, 0, 0, 1280, 720)
    ctx.drawImage(optionSpr, 0, 0, 300, 80, 0, 360, 300, 80)
    ctx.drawImage(optionSpr, 0, 0, 300, 80, 0, 360+80, 300, 80)
    ctx.drawImage(optionSpr, 0, 0, 300, 80, 0, 360+80+80, 300, 80)
    ctx.drawImage(optionSpr, 0, 0, 300, 80, 0, 360+80+80+80, 300, 80)
    text(ctx, currentHouse.question, font, 370, 200)
    text(ctx, currentHouse.options[0], font, 60, 360+40)
    text(ctx, currentHouse.options[1], font, 60, 360+80+40)
    text(ctx, currentHouse.options[2], font, 60, 360+80+80+40)
    text(ctx, currentHouse.options[3], font, 60, 360+80+80+80+40)
    if(click == pressed && mousex < 130){
        let id = Math.floor((mousey - 180)/40)
        if(id < 4 && id >= 0){
            if(id == currentHouse.right){
                tickets++
                room = 'game'
            }
        }
    }
}