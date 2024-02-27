"use strict";
class basketPlayer {
    get playerName() {
        return this.name;
    }
    ;
    get playerHeight() {
        return this.height;
    }
    ;
    get playerSkills() {
        return this.skills;
    }
    ;
    constructor(name, height, skills) {
        this.name = name;
        this.height = height;
        this.skills = skills;
    }
    play() {
        return this.skills;
    }
}
const player = new basketPlayer('Daniel V. Falcão', 1.65, { aim: 100, speed: 40, strength: 40 });
