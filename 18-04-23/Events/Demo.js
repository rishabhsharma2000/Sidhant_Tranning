const events = require('events')
const eventEmitter = new events.EventEmitter()

eventEmitter.on('ring', () => {
  console.log('Published Ring1')
})

eventEmitter.on('ring', () => {
  console.log('Published Ring2')
})

eventEmitter.on('ring', attach)
function attach () {
  console.log('Published Ring3')
}

eventEmitter.once('ringOnce', () => {
  console.log('published Ring Onced')
})

eventEmitter.emit('ring')
eventEmitter.emit('ringOnce')
eventEmitter.emit('ringOnce')
eventEmitter.off('ring', attach)
eventEmitter.removeAllListeners()
eventEmitter.emit('ring')
eventEmitter.emit('ringOnce')
eventEmitter.emit('ring')
