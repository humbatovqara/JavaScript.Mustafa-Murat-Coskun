const person = {
    age : 21,

    /*
    tellAge : function() {
        // this = Person
        console.log(this);
        console.log(this.age);
    }.bind(this)
    */

    // qısa üsul Arrow function
    tellAge : () => {
        console.log(this);
        console.log(this.age);
    }

    // this = Window
}

person.tellAge();