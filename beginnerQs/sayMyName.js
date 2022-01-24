//Define an object, "me" that has a name property and a getGreeting method.
//getGreeting should return a greeting.
let me = {
  name: 'Jessica',
  getGreeting: function() {
    return 'Hi, my name is ' + this.name + '.'
  }
}

me.getGreeting();