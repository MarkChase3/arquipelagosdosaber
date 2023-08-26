function loadImage(path){
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.src = path
        img.onload = (e) => {
            resolve(img)
        }
    })
}