// Base class representing generic information about an animal
class Animal {
    constructor(name, type, habitat, coldBlooded) {
      this.name = name;
      this.type = type; //The phylum or class of the animal.
      this.habitat = null;
      this.coldBlooded = coldBlooded;
    }
    // Inheritance: Allows creating subclasses for specific animal groups.
    static createSubclass(parentType, subclassName) {
      class Subclass extends Animal {
        constructor(name) {
          super(name, subclassName, parentType.coldBlooded);
        }
        // Polymorphism: Represents a specific behavior related to this animal classification.
        specificBehavior() {
          console.log(`${this.name} exhibits specific behavior characteristic of ${subclassName}.`);
        }
      }
  
      return Subclass;
    }

    // Encapsulation: Getters and setters for controlled access to properties.
    get scientificName() {
        return this.genus + " " + this.species;
    }
    
    set scientificName(value) {
        const parts = value.split(" ");
        this.genus = parts[0];
        this.species = parts[1];
    }

    // Polymorphism: Abstract method that must be implemented in subclasses.
    move() {
       throw new Error("This method must be implemented in subclasses");
    }
   
     // Abstraction: Common method providing a generic animal sound.
    makeSound() {
        console.log("Generic animal sound");
    }
}

// Examples of Subclasses
const Fish = Animal.createSubclass(Animal, "fish");
const Mammal = Animal.createSubclass(Animal, "mammal");
const Arthropoda = Animal.createSubclass(Animal, "arthropoda");
const Amphibia = Animal.createSubclass(Animal, "amphibia");
const Repitiles = Animal.createSubclass(Animal, "repitiles");
const Aves = Animal.createSubclass(Animal, "aves");

// Specific Subclass for Dogs
class Dog extends Mammal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    // Polymorphism: Override the move method with a specific behavior for dogs.
    move() {
      console.log("Walking or running");
    }
    // Additional method for demonstration of a specific action for dogs.
    bark() {
      console.log(`${this.name} is barking.`);
    }
}

// Specific Subclass for Goldfish
class Goldfish extends Fish {
    constructor(name) {
      super(name);
    } 
    // Polymorphism: Override the move method with a specific behavior for goldfish.
    move() {
      console.log(`My name is ${this.name}, and i can swim`);
    }
  
    // Additional method for demonstration of a specific action for goldfish.
    blowBubbles() {
      console.log(`${this.name} is blowing bubbles.`);
    }
}

// Usage example
const bingo = new Dog("Bingo", "German shepherd");
const goldie = new Goldfish("Goldie");
  
// Accessing attributes and methods
console.log(bingo.name);
console.log(goldie.type);
bingo.move();
bingo.bark();

goldie.makeSound();
goldie.move();
goldie.blowBubbles();
