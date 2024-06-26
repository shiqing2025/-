function Animal(name, language) {
  this.name = name;
  this.say = function () {
    console.log(this.name + " say " + language);
  };
}

const cat = new Animal("cat", "meow");
