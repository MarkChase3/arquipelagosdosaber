let name = {
    writing: false,
    text: ''
};
let id = {
    writing: false,
    text: ''
}
let password = {
    writing: false,
    text: ''
}
update['login'] = () => {
    ctx.drawImage(menuSpr, 0, 0, 221, 90, 0, 0, 1768, 720)
    ctx.drawImage(menuSpr, 160, 0, 221, 90, 400, 0, 1768, 720)
    ctx.drawImage(loginSpr, 0, 0, 160, 90, pos-1200, 0, 1280, 720)
    ctx.drawImage(loginOrRegisterSpr, 0, 0, 160, 90, pos, 0, 1280, 720)
    if(pos<1200)pos+=10
    if(click && mousex > 280 && mousex < 452 && mousey > 120 && mousey < 140){
        name.writing = true
        id.writing = false
        password.writing = false
    }
    if(click && mousex > 280 && mousex < 452 && mousey > 150 && mousey < 170){
        id.writing = true
        name.writing = false
        password.writing = false
    }
    if(click && mousex > 280 && mousex < 452 && mousey > 180 && mousey < 200){
        id.writing = false
        name.writing = false
        password.writing = true
    }
    console.log(mousey)
    textarea(name, {x: 580, y: 266})
    textarea(id, {x: 580, y: 320})
    textarea(password, {x: 580, y: 378})
    if(click == pressed && mousex > 370 && mousex < 430 && mousey > 220 && mousey < 250){
        fetch('/login', {
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
        }).then(e=>e.json().then(e=>{
            if(e.class == 'TEACHER'){
                room = 'island'
                pos = 0
            } else if(e.class == 'STUDENT'){
                room = 'boat'
            }
            if(room != 'NOTHING'){
                islands = e.islands.filter(o=>o).map(e=>{return {x:e.split(',')[0]-360, y:e.split(',')[1]-180, frame:0}})
            }
        }))
    } else {
        console.log(click, mousex > 280, mousex < 360, mousey < 256, mousey > 73)
    }
}