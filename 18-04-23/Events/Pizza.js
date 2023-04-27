const events = require('events');
const eventEmitter = new events.EventEmitter();

const orederPizza=()=>{
    console.log('pizza Has been oder');
eventEmitter.emit('payment',1000);
}

eventEmitter.on('order',orederPizza);
eventEmitter.on('payment',(amount)=>{
    console.log("Payment rec",amount);
eventEmitter.emit('deliver','Amit');
});

eventEmitter.on('deliver',(deliverBoyName)=>{
    console.log('Deliver by',deliverBoyName);
});

eventEmitter.emit('order');