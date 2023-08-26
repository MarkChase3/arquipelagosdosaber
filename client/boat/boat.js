let pos = 0;
let inc = 6;
let boatScale = 1;
update['boat'] = () => {
    ctx.drawImage(boatBackgroundSpr, 0, 0, 160, 90, 0, 0, 1280, 720)
    simulateParticles(ctx)
    ctx.drawImage(boatSpr, 0, 0, 160, 90, Math.min(1280, pos-960), 0, 1280*boatScale, 720*boatScale)
    ctx.drawImage(menuSpr, 0, 0, 160, 90, 0, pos*1.5, 1280, 720)
    ctx.drawImage(loginSpr, 0, 0, 160, 90, 0, pos*1.5, 1280, 720)
    newParticles(5, 10, 0, 0, 15, 3, 0.5, Math.min(1280, pos-960)+470, 220, 18, 4, 2, 1, 0.1, Math.PI*1.5, 0, Math.PI*0.1, {r: 40, g: 40, b: 40}, 0, 0, 0)
    newParticles(1, 10, 0, 0, 5, 1, 0.5, Math.min(1280, pos-960)+400, 530, 18, 4, 2, 1, 0.1, Math.PI*1, 0, Math.PI*0.1, {r: 200, g: 255, b: 255}, 0, 0, 0)
    pos+=inc
    if(pos > 1800){
        pos = 0
        room = 'deck'
    }
}