
function text(ctx, e, font, x, y, c){
    let canvasTexts = document.createElement('canvas')
    canvasTexts.width = 1280
    canvasTexts.height = 720
    let ctxText = canvasTexts.getContext('2d')
    let table = {};
    ('0123456789'+':;<=>^?@'+'abcdefghijklmnopqrstuvwxyz'+'abcdefghijklmnopqrstuvwxyz'.toUpperCase()).split('').map((e,i,arr)=>{table[e]=15+arr.indexOf(e.toLowerCase())})
    e.split('').map(e=>table[e]).forEach((e,i) => {
        ctxText.drawImage(font, (e*7)%(126), Math.floor(e/18)*9, 7, 9, x+i*14, y, 14, 18)
    });
    ctxText.globalCompositeOperation = 'source-in'
    ctxText.fillStyle = c
    ctxText.fillRect(0, 0, 1280, 720)
    ctxText.globalCompositeOperation = 'source-over'
    ctx.globalCompositeOperation = 'source-atop'
    ctx.drawImage(canvasTexts, 0, 0)
    ctx.globalCompositeOperation = 'source-over'
}