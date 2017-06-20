/**
 * Created by root on 6/19/17.
 */

function extend(Child, Parent) {
    Child.prototype = new Parent;
    Child.prototype.constructor = Child;
}

function vehicle(name) {
    this.name = name;
}

vehicle.prototype = {
    constructor : vehicle,

    toString : function () {
        return 'Hi, I am a '+this.name;
    },

    drive : function () {
        return 'driving forward';
    },

    stop: function () {
        return 'Stopping '+this.name;
    },

    refuel : function () {
        return 'Refueling '+this.name;
    },

    reverse : function () {
        return 'Default reverse';
    }
};

function Tractor(name) {
    this.name = name;
}

extend(Tractor, vehicle);

Tractor.prototype.reverse = function () {
    var msg = vehicle.prototype.reverse.apply(this);
    return msg + ' Reversing '+this.name;
}


