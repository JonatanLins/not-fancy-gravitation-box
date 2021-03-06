;(() => {

  let hasAccelerometerSupport = 'DeviceOrientationEvent' in window

  if (hasAccelerometerSupport) {
    const ball = document.getElementById('ball')

    const width = window.innerWidth - 25
    const height = window.innerHeight - 25
    
    const position = { x: width / 2, y: height / 2 }
    const acceleration = { x: 0, y: 0 }

    const setGravity = ({ beta, gamma }) => {
      acceleration.x += gamma * 0.005
      acceleration.y += beta * 0.005
    }

    const moveBall = () => {
      acceleration.x *= 0.993
      acceleration.y *= 0.993
      position.x += acceleration.x
      position.y += acceleration.y

      if (position.x < 25) {
        position.x = 25
        acceleration.x = 0
      } else if (position.x > width) {
        position.x = width
        acceleration.x = 0
      }
      if (position.y < 25) {
        position.y = 25
        acceleration.y = 0
      } else if (position.y > height) {
        position.y = height
        acceleration.y = 0
      }
      
      ball.style.top = `${ position.y }px`
      ball.style.left = `${ position.x }px`
    }

    setInterval(moveBall, 3)
    window.addEventListener('deviceorientation', setGravity)
  } else {
    const message =
      `Unfortunatelly your devide don't support this aplication 😔`
    document.getElementById('instructions').innerHTML = message
  }

})()