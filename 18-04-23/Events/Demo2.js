const {EventEmitter,errorMonitor} = require('events')

const event = new EventEmitter();

// event.on(errorMonitor, (err) => {
//   errorMonitor.MyMonitoringTool.log(err)
// });

// event.emit('error', new Error('whoops!'));


///removeListener

const myEventHandler = () => {
    console.log('Event listener executed');
  }

event.on('myEvent', myEventHandler);
  
console.log('Starting script');

event.emit('myEvent');

event.removeListener('myEvent',myEventHandler);

console.log('Ending script');

event.emit('myEvent');