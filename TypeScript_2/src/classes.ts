type skill = {strength:number, aim:number, speed:number};

class basketPlayer {
    private name
    private height
    private skills

    get playerName() {
        return this.name;
    };
    get playerHeight() {
        return this.height;
    };
    get playerSkills() {
        return this.skills;
    };
    constructor(name:string,height:number,skills:skill){
        this.name = name;
        this.height = height;
        this.skills = skills;
    }

    play() {
        return this.skills;
    }
}

const player = new basketPlayer('Daniel V. Falcão',1.65,{aim:100,speed:40,strength:40});

