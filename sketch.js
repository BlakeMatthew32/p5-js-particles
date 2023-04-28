
const canvasData = {
  width: 1000,
  height: 800,
  background: 55
};



let emitters = []

let rocketEmitter
let rocket

function setup() {
  createCanvas(canvasData.width, canvasData.height)

  const gravity = new createVector(0, 0.1)
  emitters.push(new Emitter(canvasData.width/2, 100))

  rocketEmitter = new Emitter(0, 0)
  rocket = new ControllableEmitter(canvasData.width/2, 
    canvasData.height - 100, 
    gravity
  )

  rocket.setEmitter(rocketEmitter)

}

function draw() {

  background(canvasData.background); 

  for(let emitter of emitters){
    emitter.show()
    emitter.update()
  }

  if(keyIsDown(87)) {
    rocket.inFlight = true
    rocket.move(new createVector(0, -0.5))
    rocket.emitter.show()
  } else {
    rocket.inFlight = false
  }

  rocket.show()
  rocket.update()

  arrayLimit(emitters)
  
}

function arrayLimit(array) {
  if(array.length > 5) {
    array.shift()
  }
}

// function mouseClicked() {
//   emitters.push(new Emitter(mouseX, mouseY))
//   // emitter.position.x = mouseX
//   // emitter.position.y = mouseY
// }

// // function mouseDragged() {
// //   emitter.position.x = mouseX
// //   emitter.position.y = mouseY
// // }






