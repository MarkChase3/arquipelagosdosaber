function genMap(w, h){
    let map = Array.from({length: h}).map(e=>Array.from({length: w}).map(e=>-1))
    let newMap = Array.from({length: h}).map(e=>Array.from({length: w}).map(e=>-1))
    let planSpot = {x: Math.floor(w/2), y: h+10}
    let planSpot2 = {x: Math.floor(Math.random()*w), y: 0}
    let lakeSpot = {x: Math.floor(Math.random()*w/2), y: Math.floor(Math.random()*(h-90)+40)}
    let forestSpot = {x: Math.floor(Math.random()*w), y: Math.floor(Math.random()*(h-90)+40)}
    let forestSpot2 = {x: Math.floor(Math.random()*w), y: Math.floor(Math.random()*(h-90)+40)}
    map.forEach((e,y)=>{e.forEach((e,x)=>{
        let lake = Math.hypot(x-lakeSpot.x, y-lakeSpot.y)
        let plan = Math.hypot(x-planSpot.x, y-planSpot.y)
        let plan2 = Math.hypot(x-planSpot2.x, y-planSpot2.y)
        let forest = Math.hypot(x-forestSpot.x, y-forestSpot.y)
        let forest2 = Math.hypot(x-forestSpot2.x, y-forestSpot2.y)
        if(Math.hypot(x-lakeSpot.x, y-lakeSpot.y)<w/5 && lake < plan && lake < forest && lake < forest2){
            map[y][x] = 1
        } else if((plan < forest && plan < forest2) || (plan2 < forest && plan2 < forest2) ){
            map[y][x] = 0
        } else {
            map[y][x] = 2
        }
    })})

    map.forEach((e,y)=>{e.forEach((e,x)=>{
        newMap[y][x] = e
        for(let offx = -Math.min(5, x); offx < Math.min(5, w-x); offx++)
        for(let offy = -Math.min(5, y); offy < Math.min(5, h-y); offy++)
        if(e == 1 && map[y+offy][x+offx] != 1)
        newMap[y][x] = 3
        if(newMap[y][x] == 2 && Math.random()<0.01)
        newMap[y][x] = 4
    })})
    return newMap
}