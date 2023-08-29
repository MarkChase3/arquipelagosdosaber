let question = {text: ''}
let options = [{text: ''}, {text: ''}, {text: ''}, {text: ''}]
update['avaliationSet'] = () => {
    ctx.drawImage(avaliationSpr, 0, 0, 128, 72, 0, 0, 1280, 720)
    ctx.drawImage(avaliationQuestionSpr, 0, 0, 128, 72, 0, 0, 1280, 720)
    ctx.drawImage(optionSpr, 0, 0, 300, 80, 0, 360, 300, 80)
    ctx.drawImage(optionSpr, 0, 0, 300, 80, 0, 360+80, 300, 80)
    ctx.drawImage(optionSpr, 0, 0, 300, 80, 0, 360+80+80, 300, 80)
    ctx.drawImage(optionSpr, 0, 0, 300, 80, 0, 360+80+80+80, 300, 80)
    textarea(question, {x: 370, y:200})
    if(click == pressed && mousex > 160 && mousex < 500 && mousey<180){
        question.writing = true
        options.forEach((e,i)=>{
            e.writing = false
        })
    } else if(click == pressed){
        question.writing = false
    }
    if(click == pressed && mousex < 130){
        let id = Math.floor((mousey - 180)/40)
        if(id < 4 && id >= 0){
            options[id].writing = true
            options.forEach((e,i)=>{
                if(i!=id)e.writing = false
            })
            question.writing = false
        }
    }
    for (let index = 0; index < options.length; index++) {
        textarea(options[index], {x:60, y:360+80*index+40})
    }
    if(keys['Enter'] && !question.writing){
        room = 'contents'
    }
}