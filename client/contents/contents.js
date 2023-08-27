let book = -1
let houses = [{text:''}, {text:''}, {text:''}]
let contents = [{text:''}, {text:''}, {text:''}]

update['contents'] = (e) => {
    ctx.drawImage(houseSetsSpr, 0, 0, 320, 180, 0, 0, 1280, 720)
    if(click == pressed && mousex > 140 && mousex < 310){
        let id = Math.floor((mousey-130)/30)
        if(id >= 0 && id<4 && id<houses.length){
            houses[id].writing = true
            for(let i = 0; i < houses.length; i++){
                if(i!=id)houses[i].writing = false
            }
        }
    }
    for(let i = 0; i < houses.length; i++){
        textarea(houses[i], {x:280, y:260+i*65})
    }
    if(click == pressed && mousex > 460 && mousex < 510){
        let id = Math.floor((mousey-130)/30)
        if(id >= 0 && id<4 && id<houses.length){
            room = 'chooseHouse'
        }
    }
    if(book > -1 ){
        ctx.drawImage(bookSpr, 0, 0, 640, 360, 150, 80, 1280, 720)
        textarea(contents[book], {x: 300, y:160})
        if(click == pressed && !(mousex > 150 && mousey > 80 && mousex < 1130 && mousey < 1200)){
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
                    number: book,
                    content: JSON.stringify({text: contents[book].text, name: houses[book].text})
                })
            })
            for(let i = 0; i < houses.length; i++){
                contents[i].writing = false
            }        
            book = -1   
        }
    }
    if(click == pressed && mousex > 350 && mousex < 420){
        let id = Math.floor((mousey-130)/30)
        if(id >= 0 && id<4 && id<houses.length){
            book = id
            contents[book].writing = true
            for(let i = 0; i < houses.length; i++){
                if(i!=id)contents[i].writing = false
            }
            for(let i = 0; i < houses.length; i++){
                houses[i].writing = false
            }
        }
    }

}