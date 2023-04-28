class ControllableEmitter {
    constructor(x, y, gravity) {
        this.position = new createVector(x, y)
        this.accelaration = new createVector(0, 0)
        this.velocity = new createVector(0, 0)
        this.maxSpeed = -4
        this.width = 40
        this.height = 80
        this.inFlight = false
        this.gravity = gravity
        this.emitter
    }

    update() {

        if(!this.inFlight) {
            this.move(this.gravity)
            this.velocity.add(this.accelaration)
            this.position.add(this.velocity)
        }
        

        if(this.edge() && !this.inFlight){
            this.accelaration.set(0, 0)
            this.velocity.set(0, 0)
            this.position.y = canvasData.height - this.height
        }


        if(this.velocity.y > this.maxSpeed) {
            this.velocity.add(this.accelaration)
        }
        
        this.position.add(this.velocity)
        this.emitter.position.set(this.position.x + this.width/2, this.position.y + this.height)
        
        this.accelaration.set(0, 0)

        this.emitter.update()
    }

    setEmitter(emitter) {
        this.emitter = emitter
        this.emitter.position.set(this.position.x + this.width/2, this.position.y - this.height)
    }

    show() {
        stroke(190)
        fill(255)
        rect(this.position.x, this.position.y, this.width, this.height)
    }

    edge() {
        return this.position.y > canvasData.height - this.height
    }

    move(force) {
        this.accelaration.add(force)
    }

    setEmitter() {
        this.emitter = new Emitter(this.position.x - this.width/2, this.position.y + this.height)
    }
}