function genMap(w, h){
    let map = Array.from({length: h}).map(e=>Array.from({length: w}).map(e=>-1))
    let newMap = Array.from({length: h}).map(e=>Array.from({length: w}).map(e=>-1))
    let planSpot = {x: Math.floor(Math.random()*w), y: Math.floor(Math.random()*h)}
    let lakeSpot = {x: Math.floor(Math.random()*w), y: Math.floor(Math.random()*h)}
    let forestSpot = {x: Math.floor(Math.random()*w), y: Math.floor(Math.random()*h)}
    map.forEach((e,y)=>{e.forEach((e,x)=>{
        let min = Math.min(Math.hypot(planSpot.x-x, planSpot.y-y), Math.hypot(forestSpot.x-x, forestSpot.y-y), Math.hypot(lakeSpot.x-x, lakeSpot.y-y))
        if(min == Math.hypot(planSpot.x-x, planSpot.y-y)){
            map[y][x] = 0
        }
        if(min == Math.hypot(lakeSpot.x-x, lakeSpot.y-y)){
            map[y][x] = 1
        }
        if(min == Math.hypot(forestSpot.x-x, forestSpot.y-y)){
            map[y][x] = 2
        }
    })})

    map.forEach((e,y)=>{e.forEach((e,x)=>{
        newMap[y][x] = e
        for(let offx = -Math.min(5, x); offx < Math.min(5, w-x); offx++)
        for(let offy = -Math.min(5, y); offy < Math.min(5, h-y); offy++)
        if(e == 1 && map[y+offy][x+offx] != 1)
        newMap[y][x] = 3
        if(newMap[y][x] == 2 && Math.random()<0.05)
        newMap[y][x] = 4
    })})
    return newMap
}