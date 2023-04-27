const { Console } = require('console');
const events = require('events');
const eventEmitter  = new events.EventEmitter();
let FilePath,PasteFilePath;
const copyFile=(Filename,FilePath)=>{
    console.log(Filename + ' Copy from' + FilePath);
    eventEmitter.emit('paste','C:\Users\Hp\Desktop\Nojejs')

}

eventEmitter.on('Copy',copyFile('E:\My Web Sites\WebSite1' , "E:\Ravikoushik\New folder\Pictures"));

eventEmitter.on('paste',(PasteFilePath)=>{
    console.log('File copying in ',PasteFilePath);
    eventEmitter.emit('done');
});

eventEmitter.on('done',()=>{
    console.log('Your file Paste Succesfully from '+ FilePath + 'to '+ PasteFilePath);
});

eventEmitter.emit('Copy');