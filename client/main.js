(async()=>{
let canvas = document.querySelector('#canvas');
canvas.width = 1280
canvas.height = 720
ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false
font = await loadImage('text/font.png');
menuSpr = await loadImage('menu/menuBackground.png');
boatBackgroundSpr = await loadImage('boat/boatBackground.png');
boatSpr = await loadImage('boat/boat.png');
loginSpr = await loadImage('login/login.png');
loginOrRegisterSpr = await loadImage('loginOrRegister/loginOrRegister.png');
registerSpr = await loadImage('register/register.png');
deckSpr = await loadImage('deck/deck.png');
bigBoatSpr = await loadImage('deck/bigBoat.png');
deckBackgroundSpr = await loadImage('deck/background.png');
islandSpr = await loadImage('islandMap/island.png');
islandBackgroundSpr = await loadImage('islandMap/background.png');
playerDeckSpr = await loadImage('deck/player.png')
houseSetsSpr = await loadImage('contents/houseSets.png')
houseSpr = await loadImage('chooseHouse/house.jpg')
backgroundHouseSpr = await loadImage('insideHouse/background.png')
notepadSpr = await loadImage('insideHouse/notepad.png')
avaliationSpr = await loadImage('avaliationSet/avaliationBackground.png')
avaliationQuestionSpr = await loadImage('avaliationSet/questionsRoomQuestionBackground.png')
spr.push(await loadImage('game/grass.png'))
spr.push(await loadImage('game/water.png'))
spr.push(await loadImage('game/grass.png'))
spr.push(await loadImage('game/sand.png'))
spr.push(await loadImage('game/tree.png'))
playerSpr = await loadImage('game/player.png')
mapChooseSpr = await loadImage('mapChoose/mapChoose.png')
bookSpr = await loadImage('contents/notepadOpenned.png')
tileset1IntroSpr = await loadImage('intro/tileset1.png')
tileset2IntroSpr = await loadImage('intro/tileset2.png')
introMap = await loadJson('intro/map.json')
optionSpr = await loadImage('avaliationSet/answerBackground.png')
function step(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    update[room]()
    if(click == pressed)click = down
    if(click == released)click = up
    for(let i in keys){
        if(keys[i] == pressed)keys[i] = down
        if(keys[i] == released)keys[i] = up
    }
    tick++
}
setInterval(step, 1000 / 60)
})()