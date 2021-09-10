const speed = 90
const lightCount = 3

const light = [
  { distance: 300, duration: 30 },
  { distance: 1500, duration: 20 },
  { distance: 3000, duration: 10 }
]

function getLimit(limit, maxSpeed) {
  upperBound = limit
  for (let i = 0; i < upperBound; i++) {
    limit--
    if (!(maxSpeed % limit)) return limit
  }
}

function findSpeed(speed, distance, duration) {

  let result = speed


  let speedMPS = speed / 3.6

  let timeTillLight = distance / speedMPS

  if (timeTillLight >= duration) {
    speedMPS = distance / duration
    timeTillLight = distance / speedMPS
  }

  const maxSpeed = speedMPS * 3.6

  if (maxSpeed > speed) {
    result = getLimit(speed, maxSpeed)
  }

  return result
}

// console.error(speed)

console.log(findSpeed(90,1500,20))