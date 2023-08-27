function loadJson(path){
    return new Promise((resolve, reject) => {
        fetch(path).then(e=>e.json().then(resolve).catch(reject)).catch(reject)
    })
}