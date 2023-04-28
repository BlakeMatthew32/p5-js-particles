

class Particle {
    constructor(x, y) {
        this.position = createVector(x, y)
        this.accelaration = createVector(0, 0)
        this.velocity = p5.Vector.random2D()
        this.velocity.mult(random(0, 1))
        this.radius = 15
        this.lifetime = 255

        this.background = {
            red: random(0, 255),
            green: random(0, 255),
            blue: random(0, 255),
        }
    }

    applyForce(force) {
        this.accelaration.add(force)
    }

    edge() {
        if (this.position.y > window.height - this.radius) {
            this.position.y = window.height - this.radius
            this.velocity.y *= -1
        }
        // if (this.position.y < 0) {
        //     this.velocity.y = -this.velocity.y
        // }
        if (this.position.x > canvasData.width - this.radius) {
            this.position.x = window.width - this.radius
            this.velocity.x *= -1
        }
        if (this.position.x < 0 + this.radius) {
            this.position.x += this.radius
            this.velocity.x *= -1
        }
    }

    lock(){
        this.locked = true
    }

    finished() {
        return this.lifetime < 0
    }

    update() {

        if(!this.locked){
            this.velocity.add(this.accelaration)
            this.position.add(this.velocity)
            this.accelaration.set(0, 0)
        }

        this.edge()

        this.lifetime -= 5
    }

    show() {
        stroke(this.background.red, this.background.green, this.background.blue, this.lifetime)
        fill(this.background.red, this.background.green, this.background.blue, this.lifetime)
        ellipse(this.position.x, this.position.y, this.radius * 2)
    }

    setColor() {
        this.background = {
            red: random(200, 255),
            green: random(0, 150),
            blue: 0,
        }
    }

    
      

}