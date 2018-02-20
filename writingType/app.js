function person(name){
    this.name = name;
}

var person = new person("Mike");
person.name;

console.log(person.name);
