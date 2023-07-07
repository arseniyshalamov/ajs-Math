'use strict';

import Character from './character.js';

class Magi extends Character {
    magicAttack(attack, dist = 1, stoned = false) {
        let percAttack = 100 - (dist - 1) * 10;
        let calcAttack = Math.floor(attack * (percAttack / 100));
        if (stoned) {
            calcAttack -= Math.floor(5 * (Math.log(dist) / Math.log(2)));
        }
        return calcAttack;
    }
  
    get stoned() {
        return this.isStoned;
    }
  
    set stoned(value) {
        this.isStoned = value;
    }
  
    get attack() {
        return this.magicAttack(this.baseAttack, this.distance, this.stoned);
    }
}


export class Magician extends Magi {
    constructor(name, type = 'Magician') {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Daemon extends Magi {
    constructor(name, type = 'Daemon') {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
    }
}