update['register'] = () => {
    ctx.drawImage(menuSpr, 0, 0, 221, 90, 0, 0, 1768, 720)
    ctx.drawImage(menuSpr, 160, 0, 221, 90, 400, 0, 1768, 720)
    ctx.drawImage(registerSpr, 0, 0, 160, 90, pos-1200, 0, 1280, 720)
    ctx.drawImage(loginOrRegisterSpr, 0, 0, 160, 90, pos, 0, 1280, 720)
    if(pos<1200)pos+=10
    if(click && mousex > 280 && mousex < 452 && mousey > 130 && mousey < 150){
        name.writing = true
        id.writing = false
        password.writing = false
    }
    if(click && mousex > 280 && mousex < 452 && mousey > 160 && mousey < 180){
        id.writing = true
        name.writing = false
        password.writing = false
    }
    if(click && mousex > 280 && mousex < 452 && mousey > 190 && mousey < 210){
        id.writing = false
        name.writing = false
        password.writing = true
    }
    textarea(name, {x: 585, y: 265})
    textarea(id, {x: 585, y: 320})
    textarea(password, {x: 585, y: 375})
    if(click == pressed && mousex > 280 && mousex < 360 && mousey > 256 && mousey < 290){
        fetch('/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },        
            'body': JSON.stringify({
                name: name.text,
                id: id.text,
                password: password.text,
            })
        }).then(e=>e.text().then(e=>{
            if(e == 'OK'){
                room = 'boat'
                pos = 0
            }
        }))
    } else {
        console.log(click, mousex > 280, mousex < 360, mousey < 256, mousey > 73)
    }
}