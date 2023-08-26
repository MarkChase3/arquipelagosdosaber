let particles = []
function newParticles(number, size, sizeInc, rangeSize, life, rangeLife, lifeDec, x, y, rangeX, rangeY, speed, rangeSpeed, speedInc, angle, angleInc, rangeAngle, color, colorInc, rangeColor, delay) {
    particles.push(...Array.from({ length: number }).map(e => {
        return {
            size: size + rangeSize * (Math.random() - 0.5) * 2,
            life: life + rangeLife * (Math.random() - 0.5) * 2,
            lifeDec: lifeDec,
            sizeInc: sizeInc,
            speedInc: speedInc,
            angleInc: angleInc,
            colorInc: colorInc,
            x: x + rangeX * (Math.random() - 0.5) * 2,
            y: y + rangeY * (Math.random() - 0.5) * 2,
            speed: speed + rangeSpeed * (Math.random() - 0.5) * 2,
            angle: angle + rangeAngle * (Math.random() - 0.5) * 2,
            color: {
                r: (color.r + rangeColor * (Math.random() - 0.5) * 2) % 256,
                g: (color.g + rangeColor * (Math.random() - 0.5) * 2) % 256,
                b: (color.b + rangeColor * (Math.random() - 0.5) * 2) % 256,
                a: color.a ? (((color.a + rangeColor)) * (Math.random()) * 2) % 256 : null
            },
            delay: (delay || 0) * Math.random()
        }
    })
    )
}
function simulateParticles(ctx) {
    particles.forEach((e, i) => {
        if (e.existence > e.delay) {
            ctx.fillStyle = '#' + (Math.floor(e.color.r).toString(16).padStart(2, '0')) + (Math.floor(e.color.g).toString(16).padStart(2, '0')) + (Math.floor(e.color.b).toString(16).padStart(2, '0')) + (Math.floor(e.color.a || 255).toString(16).padStart(2, '0'))
            e.color.r += e.colorInc
            e.color.g += e.colorInc
            e.color.b += e.colorInc
            if(e.color.a)e.color.a += e.colorInc
            ctx.fillRect(e.x, e.y, e.size, e.size)
            e.size += e.sizeInc
            e.x += Math.cos(e.angle) * e.speed
            e.y += Math.sin(e.angle) * e.speed
            e.angle += e.angleInc
            e.speed += e.speedInc
            e.life -= e.lifeDec
            if (e.life < 0) {
                particles.splice(i, 1)
            }
        } else e.existence = e.existence + 1000 / 60 || 0
    })
}