const step = 1
let xPosition = 0
function move (ctx) {
  // ctx.clearRect(0, 0, 600, 600)
  ctx.fillRect(xPosition, 0, 300, 150)
  xPosition += step
  if (xPosition <= 300) {
    requestAnimationFrame(() => {
      move(ctx)
    })
  }
};
export default move
