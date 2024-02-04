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
