// Base class representing generic information about an animal
class Animal {
    constructor(name, type, habitat, coldBlooded) {
      this.name = name;
      this.type = type; //The phylum or class of the animal.
      this.habitat = null;
      this.coldBlooded = coldBlooded;
    }