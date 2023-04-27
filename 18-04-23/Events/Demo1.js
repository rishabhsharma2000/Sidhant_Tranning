const events = require('events');
const errorMonitor = require('events')
const eventEmitter = new events();

eventEmitter.on('printName' ,(name)=>{
    console.log(name);
});

eventEmitter.emit('printName',"Rishabh");

//Passing arguments and this to listeners

eventEmitter.on('event',(a,b)=>{
    console.log(a+b,this);
});

eventEmitter.emit('event',3,6);

//using setImmediate for perform the operation in next iteration

eventEmitter.on('newEvent', () => {
    console.log('Event listener executed this console synchronously');
  
    
    setImmediate(() => {
      console.log('Event listener executed asynchronously with setImmediate');
    });
  });
  
  console.log('First Console');
  
  eventEmitter.emit('newEvent');
  
  console.log('Ending Console');

  //Once with differnece between on

  let m = 0;
  eventEmitter.on('event', () => {
    console.log("Value of m ",++m);
  });
  eventEmitter.emit('event');

  eventEmitter.emit('event');


  //once
  eventEmitter.once('eventOnce', () => {
    console.log(++m);
  });

  eventEmitter.emit('eventOnce');

  eventEmitter.emit('eventOnce');//ignore this one


  //error handling 

  eventEmitter.on('error', (err) => {
    console.error(err.message);
  });
  eventEmitter.emit('error', new Error('there is something wrong in this event'));

  //error  handling by callback and the Error object Example 2

  eventEmitter.on('unknownEvent', (callback) => {
    const err = new Error('Unknown event received');
    callback(err);
  });
  
  eventEmitter.emit('unknownEvent', (err) => {
    if (err) {
      console.error('An error occurred:', err.message);
    } else {
      console.log('Event handled successfully');
    }
  });

  //error handling by try and catch and the Error object example 3
  eventEmitter.on('error', (err) => {
    console.error('An error occurred:', err.message);
  });
  
  try {
    eventEmitter.emit('unknownEvent');
  } catch (err) {
    console.error('Caught an error:', err.message);
  }

  //errorMonitor for error log 

  eventEmitter.on(errorMonitor,(err)=>{
    MyMonitoringTool.log(err)
  })

  eventEmitter.emit('eventCall',new Error('New Error Occured !'))