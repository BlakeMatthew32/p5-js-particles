
class Emitter {
    constructor(x, y, controller) {
        this.position = new createVector(x, y)
        this.particles = []
    }

    update() {
        
        this.emit(2)


        for(let particle of this.particles) {
            const gravity = createVector(0, 0.1)
            particle.update()
            particle.applyForce(gravity)
        }


        this.removeParticle()
    }


    show() {
    
        this.particles.forEach(particle => particle.show())
        fill(150)
        ellipse(this.position.x, this.position.y, 20)

    }
    
    removeParticle() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].finished()) {
            this.particles.splice(i, 1);
            }
        }
    }
    
    emit(num) {
        for (let i = 0; i < num; i++){
            this.particles.push(new Particle(this.position.x, this.position.y))
        }
        this.particles.forEach(particle => particle.setColor())
    }
}