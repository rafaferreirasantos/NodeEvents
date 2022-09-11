const { inherits } = require('util');
const { EventEmitter } = require('events');

class Character extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

const chapolin = new Character("Chapolin Colorado");
const chaves = new Character("Chaves do oito");

chapolin.on('Help', () => {
  console.log("Eu o Chapolin Colorado!");
});

chaves.on('Brigou', () => {
  console.log("Ninguém tem paciencia comigo...");
});

console.log("Oh, e agora quem poderá me defender?");
chapolin.emit('Help');

console.log('\nTinha que ser o Chaves mesmo!');
chaves.emit('Brigou');