// oop - class

class Animal {
    name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is making sound ${this.sound}`);
    }
}

const dog = new Animal("Husky", "dog", "bhau bhau");

const cat = new Animal("Oggy", "cat", "meaw meaw");

console.log(dog.name, dog.species, dog.sound);

cat.makeSound();