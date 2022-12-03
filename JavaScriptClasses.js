//reference

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value:10 };


//context vs scope
const object4 = {
    a: function() {
        console.log(this);
    }
}

//Instantiation 
class Player {

    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
    }

}

class Wizard extends Player {

    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }

    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }

}

const wizard1 = new Wizard('Maya', 'Healer');
const wizard2 = new Wizard('Harold', 'Dark magic');

wizard1.introduce();
wizard1.play();

wizard2.introduce();
wizard2.play();