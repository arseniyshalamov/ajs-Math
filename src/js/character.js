'use strict'

let types = ['Daemon', 'Magician', 'Bowerman']

export default class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error('wrong name');
        } else if (!types.includes(type)) {
            throw new Error('wrong type');
        } else {
            this.name = name;
            this.type = type;
        }
        this.health = 100;
        this.level = 1;
    }
}