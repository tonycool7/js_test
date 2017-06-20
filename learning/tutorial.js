/**
 * Created by root on 6/14/17.
 */

var person = {
    name: 'John',
    age: 27,
    reach: '77cm',
    info: function(){
        return "This person's name is "+this.name+". I am "+this.age+" years old. I have a reach of "+this.reach;
    },

    fightHistory: {
        win_streak: 7,
        ko: 6,
        state: 'ohio'
    }
};

var g = new Array(1,2,3,4);

Array.prototype.inarray = function (value){
    for(i = 0; i < this.length; i++){
        if(this[i] == value) {
            return true;
        }
    }
    return false;
}

var footballer = {
    position: "",
    shoot: 0,
    strength: 0,
    get getfootballerInfo() {
        console.log("position: "+this.position+"\nshoot: "+this.shoot+"\nstrenght: "+this.strength);
    },
    set footballerInfo(parameters){
        var params = parameters.toString().split(',');
        this.position = params[0],
        this.shoot = params[1],
        this.strength = params[2]
    }
};

function fighter(btn, name, age, city, wins, losses, height, weight){
    var self = this;
    this.record = 23;
    this.btn = btn;
    this.btn.addEventListener('click', function (e) {
        self.display();
        e.preventDefault();
    });
    this.name = name;
    this.age = age;
    this.city = city;
    this.wins = wins;
    this.losses = losses;
    this.height = height;
    this.weight = weight;
    this.lang;
}

fighter.prototype = {

    constructor : fighter,

    get getLang(){
        return this.lang;
    },

    set setLang(language){
        this.lang = language;
    },

    display : function(){
        console.log('Introducing, all the way from '+this.city+' standing '+this.height+' meters tall, weighing '+this.weight+' pounds, '+this.age+' of age. '+this.wins+' wins and '+this.losses+' losses, '+this.name);
    },

    info : function(){
        console.log(this.name);
        console.log('Introducing, all the way from '+this.city+' standing '+this.height+' meters tall, weighing '+this.weight+' pounds, '+this.age+' of age. '+this.wins+' wins and '+this.losses+' losses, '+this.name);
    },

    legend : function(){
        if(this.wins >= this.record ) return true;
        return false;
    }
};

// Object.defineProperty(fighter.prototype, 'setLang', {
//     get : function(){
//         return this.lang;
//     },
//     set : function (language) {
//         this.lang = language;
//     }
// });

function changeName(object, value){
    object.name = value;
}

