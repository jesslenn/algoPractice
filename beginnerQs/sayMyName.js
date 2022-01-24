//Define an object, "me" that has a name property and a getGreeting method.
//getGreeting should return a greeting.
let me = {
  name: 'Jessica',
  getGreeting: function() {
    return 'Hi, my name is ' + this.name + '.'
  }
}

me.getGreeting();

//Say Your Name
//Create a new object, me2 that contains a name property and a getGreeting methoc--this time, the method should accept an object that contains a name property as an argument.  The returned greeting should now greet the other object by name

let me2 = {
  name: 'Grace',
  getGreeting: function(otherName) {
    return 'Hi ' + otherName.name + ', my name is ' + this.name + '.'
  }
}