let book = -1
let houses = [{text:''}, {text:''}, {text:''}]
let contents = [{text:''}, {text:''}, {text:''}]
update['contents'] = (e) => {
    ctx.drawImage(houseSetsSpr, 0, 0, 320, 180, 0, 0, 1280, 720)
    if(click == pressed && mousex > 175 && mousex < 340){
        let id = Math.floor((mousey-160)/30)
        if(id >= 0 && id<4 && id<houses.length){
            houses[id].writing = true
            for(let i = 0; i < houses.length; i++){
                if(i!=id)houses[i].writing = false
            }
        }
    }
    if(click == pressed && mousex > 410 && mousex < 480){
        let id = Math.floor((mousey-160)/30)
        if(id >= 0 && id<4 && id<houses.length){
            book = id
            contents[book].writing = true
            for(let i = 0; i < houses.length; i++){
                if(i!=id)contents[i].writing = false
            }
        }
    }
    for(let i = 0; i < houses.length; i++){
        textarea(houses[i], {x:350, y:320+i*65})
    }
    if(book > -1){
        ctx.drawImage(bookSpr, 0, 0, 640, 360, 150, 80, 1280, 720)
        textarea(contents[book], {x: 360, y:220})
    }
}